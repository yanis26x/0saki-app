import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import { useState, useEffect } from 'react';

export default function App() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <ImageBackground
      source={require('./assets/images/appBackgound.jpg')}
      style={styles.background}
    >
      <View style={styles.container}>
        {/* Date et heure */}
        <Text style={styles.dateText}>
          {dateTime.toLocaleDateString()} {dateTime.toLocaleTimeString()}
        </Text>

        {/* Bloc centré avec texte d’accueil + hey + image */}
        <View style={styles.middleBlock}>
          <Text style={styles.welcome}>Bienvenue sur 0SaKi !!</Text>
          <Text style={styles.overlayText}>Salut!</Text>
          <Image
            source={require('./assets/images/lisa.jpg')}
            style={styles.centerImage}
          />
        </View>

        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
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
    fontSize: 28, // plus grand
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 15, // espace avant "hey"
    textShadowColor: 'rgba(0,0,0,0.8)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
    textAlign: 'center',
  },
  overlayText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10, // espace avant l’image
  },
  centerImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});
