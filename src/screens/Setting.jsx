import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import themeStyle, { FONT } from '../styles/themeStyle'
import { CustomTextRegular, CustomTextSemiBold } from '../components/CustomText';
import Sound from 'react-native-sound';
import LinearGradient from 'react-native-linear-gradient';
import FeelingGallery from '../components/FeelingGallery';
import PhotoLibrary from '../components/PhotoLibrary';
import FeelingActivity from '../components/FeelingActivity';
import GlobalButton from '../components/GlobalButton';
import { ROUTES } from '../routes/RoutesConstants';








export default function Setting({navigation}) {
  

  const [selectedButton, setSelectedButton] = useState('Gallery');

  const buttons = [
    { label: 'EDIT PROFILE' ,src:require('../../assets/images/setting/user.png')},
    { label: 'EDIT USERS PRIVACY' ,src:require('../../assets/images/setting/lock.png')},
    { label: 'SECURITY' ,src:require('../../assets/images/setting/guard.png')},
    { label: 'FAQ & SUPPORT' ,src:require('../../assets/images/setting/faq.png')},
    { label: 'PREFERENCES' ,src:require('../../assets/images/setting/filter.png')},
    { label: 'BLOCK USERS' ,src:require('../../assets/images/setting/filter.png')},



  ];

  const RenderSelectedComponent = () => {
    switch (selectedButton) {
      case 'Gallery':
        return <FeelingGallery/>;
      case 'ACTIVITIES':
        return <FeelingActivity/>;

      default:
        return null;
    }
  };


  const getSongDuration = (songfile, callback) => {
    const sound = new Sound(songfile, (error) => {
      if (error) {
        console.log('Failed to load the sound', error);
        callback(0);
        return;
      }
      callback(sound.getDuration());
      sound.release();
    });
  };

  const playSong = (songfile) => {
    const sound = new Sound(songfile, (error) => {
      if (error) {
        console.log('Failed to load the sound', error);
        return;
      }
      sound.play((success) => {
        if (success) {
          console.log('Successfully finished playing');
        } else {
          console.log('Playback failed due to audio decoding errors');
        }
        sound.release();
      });
    });
  };
  const [duration, setDuration] = useState('0:00');
const [file, setfile] = useState(null)
  useEffect(() => {
    getSongDuration(file, (dur) => {
      const minutes = Math.floor(dur / 60);
      const seconds = Math.floor(dur % 60).toString().padStart(2, '0');
      setDuration(`${minutes}:${seconds}`);
    });
  }, [file]);



  return (
    <View style={{flex:1,backgroundColor:themeStyle.WHITE}}>
      <ScrollView>

 <View style={{height:48,width:'90%',alignSelf:'center',borderWidth:0,borderColor:themeStyle.PRIMARY_LIGHT,borderRadius:5,marginTop:'8%'}}>
 <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:'2%',marginHorizontal:'5%'}}>
<Image resizeMode='contain' style={{height:31,width:31}} source={require('../../assets/images/Promote/left.png')}/>
<Image resizeMode='contain' style={{height:30,width:150,right:90}} source={require('../../assets/images/setting/setting.png')}/>
    </View>


 </View>

 <View style={{height:45,width:'90%',alignSelf:'center',borderWidth:1,marginTop:'5%',flexDirection:'row',alignItems:'center',borderRadius:5}}>
<Image resizeMode='contain' style={{height:16,width:16,marginLeft:'5%'}} source={require('../../assets/images/Music/search.png')}/>
<TextInput style={{fontSize:14,fontFamily:FONT.Montserrat_Regular,width:'90%',paddingLeft:20,color:themeStyle.BLACK}} placeholderTextColor={themeStyle.GREY} placeholder='Search settings'/>
 </View>

<View style={{height:20}}/>

 {buttons.map((button, index) => (
   <TouchableOpacity onPress={() => {
    setSelectedButton(button.label)
    if(index === 0){
      navigation.navigate(ROUTES.EditProfile)
    }else if(index ===1){
      navigation.navigate(ROUTES.UserPrivacy)
    }else if(index ===2){
      navigation.navigate(ROUTES.Security)
    }else if(index ===5){
      navigation.navigate(ROUTES.BlockUsers)

    }else if(index ===4){
      navigation.navigate(ROUTES.Preferences)

    }else if(index ===3){
      navigation.navigate(ROUTES.Faq)

    }
   }} style={{width:'100%'}}>
   <LinearGradient
   style={{height:48,width:'90%',borderRadius:5,alignItems:'center',flexDirection:'row',alignSelf:'center',marginTop:10}}
   colors={['#49C0D8', '#2F5CA4']}>
     <Image resizeMode='contain' style={{height:25,width:25,marginLeft:10}} source={button.src}/>
     <CustomTextSemiBold  style={{color:themeStyle.WHITE,marginLeft:'8%'}}>
     {button.label}
     </CustomTextSemiBold>
 <Image style={{height:22,width:22,marginLeft:"auto",marginRight:'5%'}} source={require('../../assets/images/setting/arrowright.png')}/>
   </LinearGradient>
 </TouchableOpacity>
        ))}

       
 <View style={{height:40}}/>
 </ScrollView>
 <View style={{position:'absolute',width:'100%',bottom:50}}>
       <GlobalButton title={'SUSPEND / DELETE ACCOUNT'}/>
       <GlobalButton title={'LOGOUT OF ACCOUNT'}/>

       </View>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
      padding: 10,
    },
    imageContainer: {
height:44,
width:'90%',
alignSelf:'center',
borderWidth:0.5,
borderColor:themeStyle.PRIMARY_LIGHT,
marginTop:'5%',
borderRadius:5,
justifyContent:"center"
    },
    image: {
      width: 100,
      height: 86,
    },
  });
  