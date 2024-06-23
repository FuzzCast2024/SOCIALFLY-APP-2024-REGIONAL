import { View, Text, ImageBackground, TouchableOpacity, Image, StyleSheet } from 'react-native';
import React from 'react';
import themeStyle, { FONT } from '../styles/themeStyle';
import LinearGradient from 'react-native-linear-gradient'; 
import { CustomTextRegular, CustomTextSemiBold } from '../components/CustomText';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../routes/RoutesConstants';

export default function OnBoarding() {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Welcome To Sociafly{'\n'}A Social Media Network</Text>
        <Text style={styles.subHeaderText}>Meet New People, chat, go live</Text>
      </View>
      <Image resizeMode='contain' style={styles.phoneImage} source={require('../../assets/images/OnBoarding/phne.png')}/>
      <ImageBackground style={styles.imageBackground} source={require('../../assets/images/OnBoarding/whitecircle.png')}>
        <TouchableOpacity onPress={()=>navigation.navigate(ROUTES.Signin)} style={styles.buttonContainer}>
          <LinearGradient colors={['#49C0D8', '#2F5CA4']} style={styles.linearGradient}>
            <Image resizeMode='contain' style={styles.vectorImage} source={require('../../assets/images/OnBoarding/Vector.png')}/>
            <CustomTextSemiBold style={styles.buttonText} fontSize={13}>
              Login Or Sign up with Email
            </CustomTextSemiBold>
          </LinearGradient>
        </TouchableOpacity>
        <Image resizeMode='contain' style={styles.orImage} source={require('../../assets/images/OnBoarding/Or.png')}/>
        <TouchableOpacity style={[styles.buttonContainer,{bottom:"15%"}]}>
          <LinearGradient colors={['#49C0D8', '#2F5CA4']} style={styles.linearGradient}>
            <Image resizeMode='contain' style={styles.googleImage} source={require('../../assets/images/OnBoarding/google.png')}/>
            <CustomTextSemiBold style={styles.buttonText} fontSize={13}>
              Login with Google
            </CustomTextSemiBold>
          </LinearGradient>
        </TouchableOpacity>
        <View style={styles.linkContainer}>
          <CustomTextRegular fontSize={9}>
            Terms and Services
          </CustomTextRegular>
          <Image style={styles.separator} source={require('../../assets/images/OnBoarding/line.png')}/>
          <CustomTextRegular style={styles.linkText} fontSize={9}>
            Code and conduct
          </CustomTextRegular>
          <Image style={styles.separator} source={require('../../assets/images/OnBoarding/line.png')}/>
          <CustomTextRegular style={styles.linkText} fontSize={9}>
            Website
          </CustomTextRegular>
          <Image style={styles.separator} source={require('../../assets/images/OnBoarding/line.png')}/>
          <CustomTextRegular style={styles.linkText} fontSize={9}>
            Careers
          </CustomTextRegular>
        </View>
        <View style={[styles.linkContainer, styles.additionalLinks]}>
          <CustomTextRegular fontSize={9}>
            Events
          </CustomTextRegular>
          <Image style={styles.separator} source={require('../../assets/images/OnBoarding/line.png')}/>
          <CustomTextRegular style={styles.linkText} fontSize={9}>
            Partners
          </CustomTextRegular>
          <Image style={styles.separator} source={require('../../assets/images/OnBoarding/line.png')}/>
          <CustomTextRegular style={styles.linkText} fontSize={9}>
            Online stores
          </CustomTextRegular>
          <Image style={styles.separator} source={require('../../assets/images/OnBoarding/line.png')}/>
          <CustomTextRegular style={styles.linkText} fontSize={9}>
            Support hub
          </CustomTextRegular>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeStyle.lessDark,
  },
  header: {
    height: 106,
    width: '100%',
    backgroundColor: themeStyle.lessLight,
    marginTop: '10%',
  },
  headerText: {
    fontSize: 22,
    color: themeStyle.WHITE,
    fontFamily: FONT.Montserrat_SemiBold,
    textAlign: 'center',
    marginTop: '3%',
  },
  subHeaderText: {
    fontSize: 14,
    color: themeStyle.textColor,
    fontFamily: FONT.Montserrat_SemiBold,
    textAlign: 'center',
    marginTop: '2%',
  },
  phoneImage: {
    height: 233,
    width: 250,
    marginTop: '8%',
  },
  imageBackground: {
    height: 801,
    width: 809,
    alignSelf: 'center',
    marginTop: '5%',
  },
  buttonContainer: {
    marginTop: '10%',
  },
  linearGradient: {
    height: 54,
    width: '40%',
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    borderRadius: 5,
  },
  vectorImage: {
    height: 24,
    width: 30,
    marginLeft: '5%',
  },
  buttonText: {
    marginLeft: '10%',
  },
  orImage: {
    height: 100,
    width: '100%',
    bottom: '3%',
  },
  googleImage: {
    height: 30,
    width: 30,
    marginLeft: '5%',
  },
  linkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '40%',
    alignSelf: 'center',
    marginLeft: '5%',
    bottom:'11%'
  },
  separator: {
    width: 2,
    height: 10,
    marginLeft: '2%',
  },
  linkText: {
    marginLeft: '2%',
  },
  additionalLinks: {
    marginLeft: '12%',
    marginTop: '1%',
  },
});
