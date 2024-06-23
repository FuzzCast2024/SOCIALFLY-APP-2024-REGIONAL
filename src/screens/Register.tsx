import { View, Text, ImageBackground, Image, TextInput, ScrollView, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import React, { useState } from 'react';
import themeStyle, { FONT } from '../styles/themeStyle';
import { CustomTextRegular, CustomTextSemiBold } from '../components/CustomText';
import AuthInput from '../components/AuthInput';
import GlobalButton from '../components/GlobalButton';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../routes/RoutesConstants';
import auth from '@react-native-firebase/auth';
import CustomToast from '../components/Customtoast';

export default function Register() {
const navigation = useNavigation()
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [Cpassword, setCPassword] = useState('');
const [showToast, setShowToast] = useState(false);
const [toastMessage, setToastMessage] = useState('');
const [loading, setloading] = useState(false)

const [emailError, setEmailError] = useState('');

const validateEmail = (text) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(text)) {
    setEmailError('Please enter a valid email address');
  } else {
    setEmailError('');
  }
  setEmail(text);
};

const handleSignUp = async () => {
if(emailError || !password){
  setToastMessage('Enter all fields')
  setShowToast(true)
}else if(
  password !== Cpassword
){
  setToastMessage('Password not match')
  setShowToast(true)
}else{
  setloading(true)
  try {
    const userCredential = await auth().createUserWithEmailAndPassword(email, password);
    // User signed up successfully
    console.log('User signed up!', userCredential.user);
    // You can navigate to another screen or do something else here
    setloading(false)
    navigation.navigate(ROUTES.BottomNavigation)
  } catch (error) {
    // Alert.alert('Sign Up Failed', error.message);
    setloading(false)
    setShowToast(true)
    setToastMessage(`Sign Up Failed  ${error.message}`)

  }
}
};
  return (
    <View style={styles.container}>
      <ScrollView>
        <ImageBackground resizeMode='contain' style={styles.backgroundImage} source={require('../../assets/images/Login/bgcircle.png')}>
          <View style={styles.logoContainer}>
            <CustomTextSemiBold style={styles.loginText} fontSize={22}>
            Socialfy email SIGNUP
            </CustomTextSemiBold>
            <Image resizeMode='contain' style={styles.logoImage} source={require('../../assets/images/Splash/logo.png')}/>
          </View>
        </ImageBackground>
        <View style={styles.inputContainer}>
          <AuthInput  onChangeText={validateEmail} marginTop={'8%'} placeholder={'input your email here'} source={require('../../assets/images/Login/email.png')}/>
          {emailError ? <Text style={{ color: 'red', marginLeft: '8%',marginTop:'2%' }}>{emailError}</Text> : null}
          <AuthInput secureTextEntry={true} onChangeText={(text)=>setPassword(text)} marginTop={'5%'} placeholder={'Create password here'} source={require('../../assets/images/Login/password.png')}/>
          <AuthInput secureTextEntry={true} onChangeText={(text)=>setCPassword(text)} marginTop={'5%'} placeholder={'Confirm password here'} source={require('../../assets/images/Login/password.png')}/>
          <AuthInput marginTop={'5%'} placeholder={'create username'} source={require('../../assets/images/Login/user.png')}/>

    
          <GlobalButton loading={loading} onPress={handleSignUp} title={'SIGNUP'}/>
          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>
            Have an account?<Text onPress={()=>navigation.navigate(ROUTES.Signin)} style={styles.signupLink}> Login Here</Text>
            </Text>
          </View>

      
        </View>
      </ScrollView>
     <CustomToast visible={showToast} message={toastMessage} onHide={() => setShowToast(false)} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeStyle.lessDark,
  },
  backgroundImage: {
    height: 600,
    width: 800,
    alignSelf: 'center',
    bottom: '28%',
  },
  logoContainer: {
    alignSelf: 'center',
    marginTop: '40%',
  },
  loginText: {
    color: themeStyle.loginCOlor,
  },
  logoImage: {
    height: 189,
    width: 217,
    marginTop: '3%',
    alignSelf:'center'
  },
  inputContainer: {
    bottom: '28%',
  },
  forgotPasswordText: {
    color: themeStyle.WHITE,
    marginLeft: 'auto',
    marginRight: '6%',
    marginTop: '5%',
  },
  signupContainer: {
    alignItems: 'center',
    marginTop: '5%',
  },
  signupText: {
    fontSize: 14,
    color: themeStyle.WHITE,
    fontFamily: FONT.Montserrat_Regular,
  },
  signupLink: {
    fontFamily: FONT.Montserrat_SemiBold,
    fontSize:17
  },
  linkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '40%',
marginTop:'10%',
marginLeft:'8%'
  },
  separator: {
    width: 2,
    height: 10,
    marginLeft: '4%',
  },
  linkText: {
    marginLeft: '8%',
    color:themeStyle.WHITE
  },
  additionalLinks: {
    marginLeft: '15%',
    marginTop: '3%',
  },
});
