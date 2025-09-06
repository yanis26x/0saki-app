import React, { useState } from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CameraView, useCameraPermissions } from 'expo-camera';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Page2() {
  const [permission, requestPermission] = useCameraPermissions();
  const [facing, setFacing] = useState('front'); // 'front' ou 'back'

  if (!permission) {
    return (
      <View style={styles.center}>
        <Text style={styles.info}>Chargement des permissions…</Text>
      </View>
    );
  }

  if (!permission.granted) {
    return (
      <View style={styles.center}>
        <Text style={styles.info}>
          Nous avons besoin de ton autorisation pour utiliser la caméra.
        </Text>
        <Pressable style={styles.primaryBtn} onPress={requestPermission}>
          <Text style={styles.primaryBtnText}>Autoriser la caméra</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Aperçu caméra plein écran */}
      <CameraView style={StyleSheet.absoluteFill} facing={facing} />

      {/* Contrôles (overlay) */}
      <SafeAreaView style={styles.controls}>
        <Text style={styles.title}>Cam26x</Text>

        <View style={styles.bottomBar}>
          <Pressable
            style={styles.roundBtn}
            onPress={() => setFacing(f => (f === 'front' ? 'back' : 'front'))}
          >
            <Ionicons name="camera-reverse" size={24} color="#000" />
          </Pressable>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  center: {
    flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24, backgroundColor: '#000',
  },
  info: { color: '#fff', textAlign: 'center', fontSize: 16, opacity: 0.9 },
  controls: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  title: {
    color: '#fff', fontSize: 18, fontWeight: '600', textAlign: 'center', marginTop: 8,
    textShadowColor: 'rgba(0,0,0,0.8)', textShadowOffset: { width: 1, height: 1 }, textShadowRadius: 3,
  },
  bottomBar: {
    alignItems: 'center', justifyContent: 'center',
  },
  roundBtn: {
    width: 56, height: 56, borderRadius: 28, backgroundColor: 'rgba(255,255,255,0.9)',
    alignItems: 'center', justifyContent: 'center',
  },
  primaryBtn: {
    marginTop: 16, backgroundColor: '#2563eb', paddingVertical: 12, paddingHorizontal: 16, borderRadius: 10,
  },
  primaryBtnText: { color: '#fff', fontWeight: '600', fontSize: 16 },
});
