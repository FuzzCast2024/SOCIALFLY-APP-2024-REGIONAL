import React, { useEffect, useState } from 'react';
import { View, Text, ImageBackground, StatusBar, StyleSheet, Image, Modal, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import themeStyle from '../styles/themeStyle';
import { CustomTextRegular, CustomTextSemiBold } from '../components/CustomText';
import OTPInput from '../components/OtpInput';
import GlobalButton from '../components/GlobalButton';
import { ROUTES } from '../routes/RoutesConstants';
import AuthInput from '../components/AuthInput';
import LinearGradient from 'react-native-linear-gradient';

export default function Newpassword() {
  const navigation = useNavigation();
  const [modalVisible2, setModalVisible2] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={themeStyle.PRIMARY_LIGHT} />
      <ImageBackground
        style={styles.imageBackground}
        source={require('../../assets/images/Splash/imgbg.png')}
      >

  <Image style={{height:78,width:78,alignSelf:'center',marginTop:'20%'}} source={require('../../assets/images/Forgotpassword/key.png')}/>
    <CustomTextSemiBold style={{alignSelf:'center',marginTop:'10%'}} fontSize={14}>
    otp verification
    </CustomTextSemiBold>
    <CustomTextRegular fontSize={14} style={{color:themeStyle.WHITE,textAlign:'center',marginTop:'5%'}}>
    Enter your Email associated with your{'\n'}
 account we will send you a link to reset{'\n'}
 your password
    </CustomTextRegular>
    <AuthInput marginTop={'15%'} placeholder={'input your Password '} source={require('../../assets/images/Login/password.png')}/>
    <AuthInput marginTop={'7%'} placeholder={'input your New Password '} source={require('../../assets/images/Login/password.png')}/>


        <GlobalButton onPress={()=>setModalVisible2(true)} marginTop={'12%'} title={'Submit'} />

      </ImageBackground>


      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible2}
        onRequestClose={() => {
          setModalVisible2(!modalVisible2);
        }}
      >
  <View style={{flex:1,backgroundColor:'rgba(0,0,0,0.5)',alignItems:'center',justifyContent:'center'}}>
<LinearGradient style={{height:378,width:307,borderRadius:10}}  colors={['#49C0D8', '#2F5CA4']} >
<Image style={{height:145,width:181,alignSelf:'center',marginTop:'10%'}} source={require('../../assets/images/Forgotpassword/tick.png')}/>


<CustomTextSemiBold style={{alignSelf:'center',marginTop:'10%'}} fontSize={18}>
Password changed!
</CustomTextSemiBold >

<CustomTextRegular style={{alignSelf:'center',marginTop:'5%',color:themeStyle.WHITE,textAlign:'center'}} fontSize={14}>
Congratulation your passwored {'\n'}
has been changed 
</CustomTextRegular>

<TouchableOpacity onPress={()=>{
  setModalVisible2(false)
  navigation.navigate(ROUTES.Signin)
}} style={{height:52,width:152,backgroundColor:themeStyle.WHITE,alignSelf:'center',borderRadius:10,marginTop:'8%',alignItems:'center',justifyContent:'center'}} >
<CustomTextSemiBold fontSize={14} style={{color:themeStyle.PRIMARY_COLOR}}>
  Login
</CustomTextSemiBold>
</TouchableOpacity>
</LinearGradient>


  </View>
      </Modal>
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
