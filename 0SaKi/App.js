import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image, Pressable } from 'react-native';
import { useState, useEffect } from 'react';

export default function App() {
  const [dateTime, setDateTime] = useState(new Date());

  // Tableau des 3 images à afficher (mets les bons noms de fichiers)
  const images = [
    require('./assets/images/lisa.jpg'),
    require('./assets/images/BloodMask.jpeg'),
    require('./assets/images/CestTriste.jpg'),
  ];
  const [imgIndex, setImgIndex] = useState(0);

  const nextImage = () => {
    setImgIndex((i) => (i + 1) % images.length); // revient à la 1ère après la 3e
  };

  useEffect(() => {
    const interval = setInterval(() => setDateTime(new Date()), 1000);
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

        {/* Bloc centré */}
        <View style={styles.middleBlock}>
          <Text style={styles.welcome}>Bienvenue sur 0SaKi !!!!</Text>
          <Text style={styles.overlayText}>Salut!</Text>

          {/* Image au milieu */}
          <Image source={images[imgIndex]} style={styles.centerImage} />

          {/* Bouton sous l'image */}
          <Pressable style={styles.btn} onPress={nextImage}>
            <Text style={styles.btnText}>Changer l’image</Text>
          </Pressable>

          {/* (Optionnel) Indicateur */}
          <Text style={styles.counter}>Image {imgIndex + 1} / {images.length}</Text>
        </View>

        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1, resizeMode: 'cover' },
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
});
