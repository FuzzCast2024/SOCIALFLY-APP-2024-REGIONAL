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








export default function PostAudience() {
  

  const [selectedButton, setSelectedButton] = useState('Gallery');

  const buttons = [
    { label: 'PUBLIC' ,src:require('../../assets/images/postaudience/public.png')},
    { label: 'FRIENDS' ,src:require('../../assets/images/postaudience/friends.png')},
    { label: 'FRIENDS OF FRIENDS' ,src:require('../../assets/images/postaudience/nofriends.png')},
    { label: 'ONLY ME' ,src:require('../../assets/images/postaudience/onlyme.png')},



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

 <View style={{height:48,width:'90%',alignSelf:'center',borderWidth:0.5,borderColor:themeStyle.PRIMARY_LIGHT,borderRadius:5,marginTop:'8%'}}>
 <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:'2%',marginHorizontal:'5%'}}>
<Image resizeMode='contain' style={{height:29,width:19}} source={require('../../assets/images/Gallery/cross.png')}/>
<Image resizeMode='contain' style={{height:30,width:110,right:130}} source={require('../../assets/images/postaudience/audience.png')}/>
    </View>


 </View>

 <CustomTextRegular style={{marginLeft:"5%",marginTop:'5%',color:themeStyle.BLACK}}>
 YOUR POST MAY SHOW UP IN NEWS FEEDS, ON YOUR PROFILE, IN SEARCH RESULTS, AND OUR PARTNER APPS.

 </CustomTextRegular>

 <CustomTextRegular style={{marginLeft:"5%",marginTop:'5%',color:themeStyle.BLACK}}>
 YOUR DEFAULT AUDIENCE IS SET TO PUBLIC, BUT YOU CAN CHANGE THE AUDIENCE OF THIS SPECIFIC POST

 </CustomTextRegular>

 <CustomTextSemiBold style={{marginLeft:"5%",marginTop:'5%',color:themeStyle.BLACK}}>
CHOOSE AUDIENCE

 </CustomTextSemiBold>

 {buttons.map((button, index) => (
   <TouchableOpacity onPress={() => setSelectedButton(button.label)} style={{width:'100%'}}>
   <LinearGradient
   style={{height:48,width:'90%',borderRadius:5,alignItems:'center',flexDirection:'row',alignSelf:'center',marginTop:10}}
   colors={['#49C0D8', '#2F5CA4']}>
     <Image resizeMode='contain' style={{height:25,width:25,marginLeft:10}} source={selectedButton === button.label ? require('../../assets/images/postaudience/tick.png') : require('../../assets/images/postaudience/white.png')}/>
    <Image resizeMode='contain' style={{height:25,width:25,marginLeft:10}} source={button.src}/>
     <CustomTextRegular  style={{color:themeStyle.WHITE,marginLeft:'8%'}}>
     {button.label}
     </CustomTextRegular>
 
   </LinearGradient>
 </TouchableOpacity>
        ))}

       
 <View style={{height:40}}/>
 </ScrollView>
 <View style={{position:'absolute',width:'100%',bottom:50}}>
       <GlobalButton title={'SELECT PRIVACY POLICY'}/>
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
  