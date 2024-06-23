import React, { useEffect } from 'react';
import { View, Text, ImageBackground, StatusBar, StyleSheet } from 'react-native';
import { Image } from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import themeStyle from '../styles/themeStyle';
import { ROUTES } from '../routes/RoutesConstants';

export default function SplashScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate(ROUTES.OnBoarding);
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={themeStyle.PRIMARY_LIGHT} />
      <ImageBackground
        style={styles.imageBackground}
        source={require('../../assets/images/Splash/imgbg.png')}
      >
        <Image style={styles.logo} source={require('../../assets/images/Splash/logo.png')} />
      </ImageBackground>
      <Image
        resizeMode="contain"
        style={styles.footerImage}
        source={require('../../assets/images/Splash/dlogics.png')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: 189,
    width: 208,
  },
  footerImage: {
    height: 134,
    width: '90%',
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
  },
});
