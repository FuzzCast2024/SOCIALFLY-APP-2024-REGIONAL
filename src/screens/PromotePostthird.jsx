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
import Slider from '@react-native-community/slider';








export default function PromotePostthird({navigation}) {
  

  const [selectedButton, setSelectedButton] = useState('Gallery');

  const buttons = [
    { label: 'MORE PROFILE VISITS' ,src:require('../../assets/images/postaudience/public.png')},
    { label: 'MORE MESSAGES' ,src:require('../../assets/images/postaudience/friends.png')},
    { label: 'MORE WEBSITE VISITS' ,src:require('../../assets/images/postaudience/nofriends.png')},
    { label: 'MORE AWARENESS' ,src:require('../../assets/images/postaudience/onlyme.png')},
    { label: 'MORE SALES & REACTIONS' ,src:require('../../assets/images/postaudience/public.png')},
    { label: 'MORE FOLLOWERS' ,src:require('../../assets/images/postaudience/friends.png')},
    { label: 'GET MORE ENGAGEMENTS' ,src:require('../../assets/images/postaudience/nofriends.png')},
    { label: 'MORE MESSAGES' ,src:require('../../assets/images/postaudience/onlyme.png')},
    { label: 'MORE LEADS' ,src:require('../../assets/images/postaudience/onlyme.png')},



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

 <View style={{height:48,width:'90%',alignSelf:'center',borderRadius:5,marginTop:'8%'}}>
 <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:'2%',marginHorizontal:'5%'}}>
<Image resizeMode='contain' style={{height:31,width:31}} source={require('../../assets/images/Promote/left.png')}/>
    </View>


 </View>

<View style={{flexDirection:'row',marginTop:"5%",marginLeft:'5%'}}>
<LinearGradient style={{height:30,width:90,alignItems:'center',justifyContent:'center',flexDirection:"row",borderRadius:5}} colors={['#49C0D8','#2F5CA4']}>
<CustomTextRegular style={{color:themeStyle.WHITE,marginLeft:'5%',borderRadius:5}} fontSize={12}>
Step 1
</CustomTextRegular>

</LinearGradient>

<LinearGradient style={{height:30,width:90,alignItems:'center',justifyContent:'center',flexDirection:"row",borderRadius:5,marginLeft:'5%'}} colors={['#49C0D8','#2F5CA4']}>
<CustomTextRegular style={{color:themeStyle.WHITE,marginLeft:'5%',borderRadius:5}} fontSize={12}>
Step 2
</CustomTextRegular>

</LinearGradient>

<LinearGradient style={{height:30,width:90,alignItems:'center',justifyContent:'center',flexDirection:"row",borderRadius:5,marginLeft:"5%"}}  colors={['#49C0D8','#2F5CA4']}>
<CustomTextRegular style={{color:themeStyle.WHITE,marginLeft:'5%',borderRadius:5}} fontSize={12}>
Step 3
</CustomTextRegular>

</LinearGradient>
</View>

 <CustomTextSemiBold fontSize={18} style={{marginTop:'8%',color:themeStyle.PRIMARY_COLOR,marginLeft:'5%'}}>
 REVIEW & PAY

 </CustomTextSemiBold>

 <CustomTextRegular fontSize={16} style={{marginTop:'2%',color:themeStyle.BLACK,marginLeft:'5%'}}>
 COST SUMMARY:

 </CustomTextRegular>

<View style={{flexDirection:"row",alignItems:'center',marginLeft:"5%",marginTop:"10%"}}>
<Image style={{height:13,width:13}} source={require('../../assets/images/Promote/star.png')}/>

<CustomTextSemiBold fontSize={13} style={{color:themeStyle.BLACK,marginLeft:'5%'}}>
AD PRICE : $1,200

 </CustomTextSemiBold>
</View>

<View style={{flexDirection:"row",alignItems:'center',marginLeft:"5%",marginTop:"2%"}}>
<Image style={{height:13,width:13}} source={require('../../assets/images/Promote/star.png')}/>

<CustomTextSemiBold fontSize={13} style={{color:themeStyle.BLACK,marginLeft:'5%'}}>
AD REACH UP TO 200 CLICKS

 </CustomTextSemiBold>
</View>

<View style={{flexDirection:"row",alignItems:'center',marginLeft:"5%",marginTop:"2%"}}>
<Image style={{height:13,width:13}} source={require('../../assets/images/Promote/star.png')}/>

<CustomTextSemiBold fontSize={13} style={{color:themeStyle.BLACK,marginLeft:'5%'}}>
AD PEOPLE REACH UP TO 600K

 </CustomTextSemiBold>
</View>


<View style={{flexDirection:"row",alignItems:'center',marginLeft:"5%",marginTop:"2%"}}>
<Image style={{height:13,width:13}} source={require('../../assets/images/Promote/star.png')}/>

<CustomTextSemiBold fontSize={13} style={{color:themeStyle.BLACK,marginLeft:'5%'}}>
START DATE: FRI, JUNE 14, 2024

 </CustomTextSemiBold>
</View>


<View style={{flexDirection:"row",alignItems:'center',marginLeft:"5%",marginTop:"2%"}}>
<Image style={{height:13,width:13}} source={require('../../assets/images/Promote/star.png')}/>

<CustomTextSemiBold fontSize={13} style={{color:themeStyle.BLACK,marginLeft:'5%'}}>
END DATE: FRI, JUNE 19, 2024

 </CustomTextSemiBold>
</View>

<View style={{flexDirection:"row",alignItems:'center',marginLeft:"5%",marginTop:"2%"}}>
<Image style={{height:13,width:13}} source={require('../../assets/images/Promote/star.png')}/>

<CustomTextSemiBold fontSize={13} style={{color:themeStyle.BLACK,marginLeft:'5%'}}>
LIMITED TO 5 DAYS

 </CustomTextSemiBold>
</View>

<CustomTextSemiBold fontSize={18} style={{marginTop:'8%',color:themeStyle.PRIMARY_COLOR,marginLeft:'5%'}}>
COST CONVERSION:

 </CustomTextSemiBold>

 <CustomTextSemiBold fontSize={13} style={{color:themeStyle.BLACK,alignSelf:'center',marginTop:"5%"}}>
 AD PRICE : $1,200 = 174,000 CREDITS

 </CustomTextSemiBold>


 <CustomTextSemiBold fontSize={15} style={{marginTop:'50%',color:themeStyle.PRIMARY_COLOR,alignSelf:"center"}}>
 PAY 174,000 CREDITS NOW

 </CustomTextSemiBold>
        <View  style={{width:'100%',bottom:0}}>
       <GlobalButton onPress={()=>navigation.navigate(ROUTES.BottomNavigation)} title={'CONFIRM & PAY'}/>
       </View>
 <View style={{height:40}}/>
 </ScrollView>

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
  