import React from 'react';
import { StyleSheet, Text, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Page3() {
  return (
    <ImageBackground
      source={require('../assets/images/appBackgound.jpg')}
      style={styles.background}
    >
      <SafeAreaView style={styles.pageContainer}>
        <Text style={styles.pageTitle}>Page 3</Text>
        <Text style={styles.pageText}>Not done yet...</Text>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1, resizeMode: 'cover' },
  pageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  pageTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
  },
  pageText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    opacity: 0.95,
  },
});
