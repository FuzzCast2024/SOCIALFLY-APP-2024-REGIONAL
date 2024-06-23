import React, { useEffect } from 'react';
import { View, Text, ImageBackground, StatusBar, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import themeStyle from '../styles/themeStyle';
import { CustomTextRegular, CustomTextSemiBold } from '../components/CustomText';
import OTPInput from '../components/OtpInput';
import GlobalButton from '../components/GlobalButton';
import { ROUTES } from '../routes/RoutesConstants';

export default function Verification() {
  const navigation = useNavigation();


  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={themeStyle.PRIMARY_LIGHT} />
      <ImageBackground
        style={styles.imageBackground}
        source={require('../../assets/images/Splash/imgbg.png')}
      >

        <View style={styles.emailBox}>
          <CustomTextSemiBold fontSize={18}>
            EMAIL VERIFICATIONS
          </CustomTextSemiBold>

        </View>
        <CustomTextRegular style={styles.text} fontSize={16}>
          PLEASE CHECK YOUR EMAIL FOR{'\n'}
          YOUR 4 DIGIT VERIFICATIONS CODE {'\n'}
          AND PLEASE INPUT IT BELOW:
        </CustomTextRegular>
        <OTPInput />
        <GlobalButton onPress={()=>navigation.navigate(ROUTES.SignupOnboarding)} marginTop={'20%'} title={'Click here to verify'} />
        <GlobalButton marginTop={'1%'} title={'Click here to resend'} />

      </ImageBackground>

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

  }, emailBox: {
    height: 57, width: '100%', backgroundColor: themeStyle.lessLight, alignItems: 'center', justifyContent: 'center', marginTop: '10%'
  }, text: {
    textAlign: 'center', color: themeStyle.WHITE, marginTop: '5%', lineHeight: 22
  }

});
