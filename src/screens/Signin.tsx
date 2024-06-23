import { View, Text, ImageBackground, Image, TextInput, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import themeStyle, { FONT } from '../styles/themeStyle';
import { CustomTextRegular, CustomTextSemiBold } from '../components/CustomText';
import AuthInput from '../components/AuthInput';
import GlobalButton from '../components/GlobalButton';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../routes/RoutesConstants';
import auth from '@react-native-firebase/auth';
import CustomToast from '../components/Customtoast';

export default function Signin() {
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
    }else{
      setloading(true)
      try {
        const userCredential = await auth().signInWithEmailAndPassword(email, password);
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
              Socialfy email login
            </CustomTextSemiBold>
            <Image resizeMode='contain' style={styles.logoImage} source={require('../../assets/images/Splash/logo.png')}/>
          </View>
        </ImageBackground>
        <View style={styles.inputContainer}>
          <AuthInput  onChangeText={validateEmail} marginTop={'10%'} placeholder={'input your email here'} source={require('../../assets/images/Login/email.png')}/>
          {emailError ? <Text style={{ color: 'red', marginLeft: '8%',marginTop:'2%' }}>{emailError}</Text> : null}

          <AuthInput onChangeText={(text)=>setPassword(text)}  marginTop={'7%'} placeholder={'input your Password here'} source={require('../../assets/images/Login/password.png')}/>
          <TouchableOpacity onPress={()=>navigation.navigate(ROUTES.Forgotpassword)}>
            <CustomTextRegular color={themeStyle.WHITE} fontSize={13} style={styles.forgotPasswordText}>
              Forgot password?
            </CustomTextRegular>
          </TouchableOpacity>
          <GlobalButton onPress={handleSignUp} title={'LOGIN'}/>
          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>
              Don’t have an account?<Text onPress={()=>navigation.navigate(ROUTES.Register)} style={styles.signupLink}> Sign up</Text>
            </Text>
          </View>

          <View style={styles.linkContainer}>
          <CustomTextRegular style={{color:themeStyle.WHITE}} fontSize={9}>
            Terms and Services
          </CustomTextRegular>
          <Image style={styles.separator} source={require('../../assets/images/Login/line.png')}/>
          <CustomTextRegular style={{color:themeStyle.WHITE}} style={styles.linkText} fontSize={9}>
            Code and conduct
          </CustomTextRegular>
          <Image style={styles.separator} source={require('../../assets/images/Login/line.png')}/>
          <CustomTextRegular style={styles.linkText} fontSize={9}>
            Website
          </CustomTextRegular>
          <Image style={styles.separator} source={require('../../assets/images/Login/line.png')}/>
          <CustomTextRegular style={styles.linkText} fontSize={9}>
            Careers
          </CustomTextRegular>
        </View>
        <View style={[styles.linkContainer, styles.additionalLinks]}>
          <CustomTextRegular style={{color:themeStyle.WHITE}} fontSize={9}>
            Events
          </CustomTextRegular>
          <Image style={styles.separator} source={require('../../assets/images/Login/line.png')}/>
          <CustomTextRegular style={styles.linkText} fontSize={9}>
            Partners
          </CustomTextRegular>
          <Image style={styles.separator} source={require('../../assets/images/Login/line.png')}/>
          <CustomTextRegular style={styles.linkText} fontSize={9}>
            Online stores
          </CustomTextRegular>
          <Image style={styles.separator} source={require('../../assets/images/Login/line.png')}/>
          <CustomTextRegular style={styles.linkText} fontSize={9}>
            Support hub
          </CustomTextRegular>
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
    bottom: '25%',
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
  },
  inputContainer: {
    bottom: '25%',
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
