import React, { useEffect } from 'react';
import { View, Text, ImageBackground, StatusBar, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import themeStyle from '../styles/themeStyle';
import { CustomTextRegular, CustomTextSemiBold } from '../components/CustomText';
import OTPInput from '../components/OtpInput';
import GlobalButton from '../components/GlobalButton';
import { ROUTES } from '../routes/RoutesConstants';
import AuthInput from '../components/AuthInput';

export default function Otp() {
  const navigation = useNavigation();


  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={themeStyle.PRIMARY_LIGHT} />
      <ImageBackground
        style={styles.imageBackground}
        source={require('../../assets/images/Splash/imgbg.png')}
      >

  <Image style={{height:78,width:78,alignSelf:'center',marginTop:'20%'}} source={require('../../assets/images/Forgotpassword/phone.png')}/>
    <CustomTextSemiBold style={{alignSelf:'center',marginTop:'10%'}} fontSize={14}>
    otp verification
    </CustomTextSemiBold>
    <CustomTextRegular fontSize={14} style={{color:themeStyle.WHITE,textAlign:'center',marginTop:'5%'}}>
    Enter the code from the Email we sent{'\n'}
    to @gmail.com
    </CustomTextRegular>
<OTPInput/>
        <GlobalButton onPress={()=>navigation.navigate(ROUTES.Newpassword)} marginTop={'20%'} title={'Submit'} />

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
