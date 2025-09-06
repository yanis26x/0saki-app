import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

/** ------- ÉCRAN 1 : Accueil (ton écran actuel avec carrousel d’images) ------- */
function HomeScreen() {
  const [dateTime, setDateTime] = useState(new Date());
  const images = [
    require('./assets/images/lisa.jpg'),
    require('./assets/images/BloodMask.jpeg'),
    require('./assets/images/CestTriste.jpg'),
  ];
  const [imgIndex, setImgIndex] = useState(0);

  const nextImage = () => setImgIndex((i) => (i + 1) % images.length);

  useEffect(() => {
    const interval = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <ImageBackground
      source={require('./assets/images/appBackgound.jpg')}
      style={styles.background}
    >
      <SafeAreaView style={styles.container}>
        {/* Date & heure */}
        <Text style={styles.dateText}>
          {dateTime.toLocaleDateString()} {dateTime.toLocaleTimeString()}
        </Text>

        {/* Bloc central */}
        <View style={styles.middleBlock}>
          <Text style={styles.welcome}>Bienvenue sur 0SaKi !!!!</Text>
          <Text style={styles.overlayText}>Salut!</Text>

          <Image source={images[imgIndex]} style={styles.centerImage} />

          <Pressable style={styles.btn} onPress={nextImage}>
            <Text style={styles.btnText}>Changer l’image</Text>
          </Pressable>

          <Text style={styles.counter}>Image {imgIndex + 1} / {images.length}</Text>
        </View>

        <StatusBar style="auto" />
      </SafeAreaView>
    </ImageBackground>
  );
}

/** ------- ÉCRAN 2 : simple exemple ------- */
function Page2() {
  return (
    <ImageBackground
      source={require('./assets/images/appBackgound.jpg')}
      style={styles.background}
    >
      <SafeAreaView style={styles.pageContainer}>
        <Text style={styles.pageTitle}>Page 2</Text>
        <Text style={styles.pageText}>Contenu de ta deuxième page ✨</Text>
      </SafeAreaView>
    </ImageBackground>
  );
}

/** ------- ÉCRAN 3 : simple exemple ------- */
function Page3() {
  return (
    <ImageBackground
      source={require('./assets/images/appBackgound.jpg')}
      style={styles.background}
    >
      <SafeAreaView style={styles.pageContainer}>
        <Text style={styles.pageTitle}>Page 3</Text>
        <Text style={styles.pageText}>Tu peux mettre ce que tu veux ici 👀</Text>
      </SafeAreaView>
    </ImageBackground>
  );
}

/** ------- APP AVEC NAVIGATION PAR ONGLETS ------- */
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarShowLabel: true,
          tabBarStyle: { backgroundColor: 'rgba(0,0,0,0.7)', borderTopColor: 'transparent' },
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: 'rgba(255,255,255,0.6)',
          tabBarIcon: ({ color, size }) => {
            // Icônes par onglet
            let name = 'home';
            if (route.name === 'Accueil') name = 'home';
            else if (route.name === 'Page 2') name = 'images-outline';
            else if (route.name === 'Page 3') name = 'settings-outline';
            return <Ionicons name={name} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Accueil" component={HomeScreen} />
        <Tab.Screen name="Page 2" component={Page2} />
        <Tab.Screen name="Page 3" component={Page3} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

/** ------- STYLES ------- */
const styles = StyleSheet.create({
  background: { flex: 1, resizeMode: 'cover' },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 10,
  },

  dateText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },

  middleBlock: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  welcome: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 15,
    textShadowColor: 'rgba(0,0,0,0.8)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
    textAlign: 'center',
  },

  overlayText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },

  centerImage: {
    width: 220,
    height: 220,
    resizeMode: 'contain',
    marginBottom: 12,
  },

  btn: {
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 10,
    backgroundColor: 'rgba(0,0,0,0.6)',
  },

  btnText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },

  counter: {
    marginTop: 8,
    color: '#fff',
    opacity: 0.9,
  },

  // Styles génériques pour Page 2 / Page 3
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
