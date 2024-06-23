import React, { useEffect } from 'react';
import { View, Text, ImageBackground, StatusBar, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import themeStyle from '../styles/themeStyle';
import { CustomTextRegular, CustomTextSemiBold } from '../components/CustomText';
import OTPInput from '../components/OtpInput';
import GlobalButton from '../components/GlobalButton';
import { ROUTES } from '../routes/RoutesConstants';
import AuthInput from '../components/AuthInput';

export default function Forgotpassword() {
  const navigation = useNavigation();


  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={themeStyle.PRIMARY_LIGHT} />
      <ImageBackground
        style={styles.imageBackground}
        source={require('../../assets/images/Splash/imgbg.png')}
      >

  <Image style={{height:78,width:78,alignSelf:'center',marginTop:'20%'}} source={require('../../assets/images/Forgotpassword/lock.png')}/>
    <CustomTextSemiBold style={{alignSelf:'center',marginTop:'10%'}} fontSize={14}>
    Sociafly forgot password
    </CustomTextSemiBold>
    <CustomTextRegular fontSize={14} style={{color:themeStyle.WHITE,textAlign:'center',marginTop:'5%'}}>
    Enter your Email associated with your{'\n'}
 account we will send you a link to reset{'\n'}
 your password
    </CustomTextRegular>
    <AuthInput marginTop={'15%'} placeholder={'input your email here'} source={require('../../assets/images/Login/email.png')}/>

        <GlobalButton onPress={()=>navigation.navigate(ROUTES.Otp)} marginTop={'20%'} title={'Continue'} />

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
