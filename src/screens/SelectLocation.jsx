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








export default function SelectLocation() {
  

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
<Image resizeMode='contain' style={{height:30,width:160,right:90}} source={require('../../assets/images/postaudience/location.png')}/>
    </View>


 </View>

 <View style={{height:45,width:'90%',alignSelf:'center',borderWidth:1,marginTop:'5%',flexDirection:'row',alignItems:'center',borderRadius:5}}>
<Image resizeMode='contain' style={{height:16,width:16,marginLeft:'5%'}} source={require('../../assets/images/Music/search.png')}/>
<TextInput style={{fontSize:14,fontFamily:FONT.Montserrat_Regular,width:'90%',paddingLeft:20,color:themeStyle.BLACK}} placeholderTextColor={themeStyle.GREY} placeholder='Search Location'/>
 </View>

 <CustomTextSemiBold style={{marginLeft:"5%",marginTop:'5%',color:themeStyle.BLACK}}>
 Suggestions Nearby Locations

 </CustomTextSemiBold>

 {buttons.map((button, index) => (
 <LinearGradient style={{height:50,flexDirection:'row',alignItems:'center',width:'90%',alignSelf:"center",marginTop:'3%'}} colors={['#49C0D8','#2F5CA4']}>
 <Image style={{height:32,width:32,marginLeft:'3%'}} source={require('../../assets/images/home/maploc.png')} />
 <View style={{marginLeft:'3%'}}>
     <Text  style={{fontSize:10,color:themeStyle.WHITE,fontFamily:FONT.Montserrat_SemiBold}}>LOCAL BUSINESS</Text>
     <Text  style={{fontSize:8,color:themeStyle.WHITE,fontFamily:FONT.Montserrat_SemiBold}}>MCDONALDS,</Text>
 </View>
 <Text  style={{fontSize:8,color:themeStyle.WHITE,fontFamily:FONT.Montserrat_Regulars,top:15,left:15}}>1657 MAIN ST, OSHKOSH, WI, 54902, USA</Text>
 
 </LinearGradient>
        ))}

       
 <View style={{height:40}}/>
 </ScrollView>
 {/* <View style={{position:'absolute',width:'100%',bottom:50}}>
       <GlobalButton title={'SELECT Loca'}/>
       </View> */}
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
  