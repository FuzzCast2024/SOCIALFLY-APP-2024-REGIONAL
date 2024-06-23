import { View, Text, ImageBackground, Image, TextInput, ScrollView, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import React, { useState } from 'react';
import themeStyle, { FONT } from '../styles/themeStyle';
import { CustomTextRegular, CustomTextSemiBold } from '../components/CustomText';
import AuthInput from '../components/AuthInput';
import GlobalButton from '../components/GlobalButton';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../routes/RoutesConstants';
import Slider from '@react-native-community/slider';
import ImageCropPicker from 'react-native-image-crop-picker';


export default function SignupOnboarding() {
const navigation = useNavigation()
const [selectedGender, setSelectedGender] = useState('SELECT GENDER');
const [showList, setShowList] = useState(false); 
const [modalVisible, setModalVisible] = useState(false);
const [modalVisible2, setModalVisible2] = useState(false);
const [image, setImage] = useState(null);
const selectImage = async () => {
  try {
      const image = await ImageCropPicker.openPicker({
          width: 300,
          height: 400,
          cropping: true,
          cropperCircleOverlay: true,
          compressImageQuality: 0.7,
          mediaType: 'photo',
      });
      // Update state with the selected image
      setImage(image);
  } catch (error) {
      console.log('Error selecting image:', error);
  }
};

const handleSelectGender = (gender) => {
  setSelectedGender(gender);
  setShowList(false); 
};

const toggleList = () => {
  setShowList(!showList);
};
const [inputValue, setInputValue] = useState('SELECT AGE');

const handleInputChange = (text) => {
  // Limit input to two characters
  if (text.length <= 2) {
    setInputValue(text);
  }
};

  return (
    <View style={styles.container}>
      <ScrollView>
        <ImageBackground resizeMode='contain' style={styles.backgroundImage} source={require('../../assets/images/Login/bgcircle.png')}>
          <View style={styles.logoContainer}>
            <CustomTextSemiBold style={styles.loginText} fontSize={22}>
            Socialfy ONBOARDING
            </CustomTextSemiBold>
            <Image resizeMode='contain' style={styles.logoImage} source={require('../../assets/images/Splash/logo.png')}/>
          </View>
        </ImageBackground>
        <View style={styles.inputContainer}>
          <AuthInput marginTop={'8%'} placeholder={'FIRST NAME & LAST NAME'} source={require('../../assets/images/Login/user.png')}/>
<TouchableOpacity onPress={()=>setModalVisible(true)}>
<AuthInput editable={false} marginTop={'5%'} placeholder={inputValue} source={require('../../assets/images/OnboardSignup/age.png')}/>
</TouchableOpacity>
<TouchableOpacity onPress={toggleList}>
        <AuthInput
          editable={false}
          marginTop={'5%'}
          placeholder={selectedGender}
          source={require('../../assets/images/OnboardSignup/gender.png')}
        />
      </TouchableOpacity>
      {showList && (
        <View style={{ height: 100, backgroundColor: '#FFFFFF', width: '90%', alignSelf: 'center' ,position:'absolute',top:'60%',zIndex:2}}>
          <TouchableOpacity
            style={{ height: 40, backgroundColor: selectedGender === 'Female' ? themeStyle.PRIMARY_COLOR : themeStyle.WHITE, justifyContent: 'center' }}
            onPress={() => handleSelectGender('Female')}
          >
            <Text style={{ marginLeft: '5%', fontSize: 12, color: selectedGender === 'Female' ? '#FFFFFF' : '#000000', fontFamily: 'Montserrat_Regular' }}>Female</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ height: 40, backgroundColor: selectedGender === 'Male' ? themeStyle.PRIMARY_COLOR : themeStyle.WHITE, justifyContent: 'center' }}
            onPress={() => handleSelectGender('Male')}
          >
            <Text style={{ marginLeft: '5%', fontSize: 12, color: selectedGender === 'Male' ? '#FFFFFF' : '#000000', fontFamily: 'Montserrat_Regular' }}>Male</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ height: 40, backgroundColor: selectedGender === 'Non-Binary' ? themeStyle.PRIMARY_COLOR : themeStyle.WHITE, justifyContent: 'center' }}
            onPress={() => handleSelectGender('Non-Binary')}
          >
            <Text style={{ marginLeft: '5%', fontSize: 12, color: selectedGender === 'Non-Binary' ? '#FFFFFF' : '#000000', fontFamily: 'Montserrat_Regular' }}>Non-Binary</Text>
          </TouchableOpacity>
        </View>
      )}
<TouchableOpacity onPress={()=>setModalVisible2(true)}>
<AuthInput editable={false} marginTop={'5%'} placeholder={'UPLOAD PROFILE PICTURE'} source={require('../../assets/images/OnboardSignup/gallery.png')}/>

</TouchableOpacity>
          <GlobalButton onPress={()=>navigation.navigate(ROUTES.Profile)} title={'CONTINUE TO NEXT PAGE'}/>
      

      
        </View>
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
      <ScrollView style={{flex:1,backgroundColor:themeStyle.PRIMARY_COLOR}}>
        <ImageBackground resizeMode='contain' style={styles.backgroundImage} source={require('../../assets/images/Login/bgcircle.png')}>
          <View style={styles.logoContainer}>
            <CustomTextSemiBold style={styles.loginText} fontSize={22}>
            Socialfy ONBOARDING
            </CustomTextSemiBold>
            <Image resizeMode='contain' style={styles.logoImage} source={require('../../assets/images/Splash/logo.png')}/>
          </View>
        </ImageBackground>
<View style={{bottom:'24%'}}>
  <CustomTextSemiBold style={{color:themeStyle.WHITE,marginLeft:'5%'}} fontSize={20}>
  How old are you?
  </CustomTextSemiBold>
    <CustomTextRegular style={{color:themeStyle.WHITE,marginLeft:'5%',marginTop:'3%'}} fontSize={12}>
    This help us personalise the app for you.
  </CustomTextRegular>


  <View style={{flexDirection:'row',alignItems:'center',marginLeft:'5%',marginTop:'10%'}}>
  <TextInput
        keyboardType='number-pad'
        style={styles.input}
        onChangeText={handleInputChange}
        maxLength={2} // Limit input to 2 characters
      />
<CustomTextSemiBold style={{color:themeStyle.WHITE,marginLeft:'5%'}} fontSize={20}>
Years old
  </CustomTextSemiBold>
  </View>
  <GlobalButton onPress={()=>setModalVisible(false)} marginTop={'10%'} title={'Save'}/>
</View>   
      </ScrollView>
      </Modal>





      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible2}
        onRequestClose={() => {
          setModalVisible2(!modalVisible2);
        }}
      >
  <View style={{flex:1,backgroundColor:'rgba(0,0,0,0.5)',alignItems:'center',justifyContent:'center'}}>
<View style={{height:300,width:309,backgroundColor:themeStyle.WHITE}}>
<CustomTextRegular fontSize={13} style={{color:themeStyle.BLACK,marginLeft:'5%',marginTop:'5%'}}>
Change your photo
</CustomTextRegular>
<TouchableOpacity onPress={selectImage}>
<CustomTextRegular fontSize={13} style={{color:themeStyle.PRIMARY_COLOR,marginLeft:'5%',marginTop:'2%'}}>
+ Upload a new photo
</CustomTextRegular> 
</TouchableOpacity>
<Image 
    style={{height: 147, width: 144, alignSelf: 'center', marginTop: '8%'}} 
    source={image ? { uri: image.path } : require('../../assets/images/OnboardSignup/selectedimage.png')} 
/>

{/* <View style={{flexDirection:'row',alignItems:'center',alignSelf:'center'}}>
  <TouchableOpacity>
<Image resizeMode='contain' style={{height:7,width:10}} source={require('../../assets/images/OnboardSignup/minus.png')}/>

  </TouchableOpacity>
<Slider
  style={{width: 120, height: 40}}
  minimumValue={0}
  maximumValue={1}
  minimumTrackTintColor={themeStyle.PRIMARY_COLOR}
  maximumTrackTintColor="#000000"
/>
<TouchableOpacity>
<Image resizeMode='contain' style={{height:7,width:10}} source={require('../../assets/images/OnboardSignup/plus.png')}/>

</TouchableOpacity>
</View> */}


<View style={{flexDirection:'row',alignSelf:'center',justifyContent:'space-between',width:'50%',marginTop:'8%'}}>
  <TouchableOpacity  onPress={()=>setModalVisible2(false)} style={{height:22,width:61,borderWidth:1,borderRadius:5,alignItems:'center',justifyContent:"center"}}>
<CustomTextRegular style={{color:themeStyle.PRIMARY_COLOR}} fontSize={10}>
  Cancel
</CustomTextRegular>
  </TouchableOpacity>

  <TouchableOpacity onPress={()=>setModalVisible2(false)} style={{height:22,width:61,backgroundColor:themeStyle.lessDark,borderRadius:5,alignItems:'center',justifyContent:"center"}}>
<CustomTextRegular style={{color:themeStyle.WHITE}} fontSize={10}>
  Apply
</CustomTextRegular>
  </TouchableOpacity>
</View>
</View>
  </View>
      </Modal>
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
  input: {
    height: 83,
    width: 83,
    backgroundColor: 'white',
    borderRadius: 5,
    fontSize: 25,
    fontFamily: FONT.Montserrat_SemiBold,
    color: themeStyle.PRIMARY_COLOR, // Change the color to your primary color
    textAlign: 'center', // Center the text horizontally
  },
});
