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








export default function PromotePostsecond({navigation}) {
  

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

<LinearGradient style={{height:30,width:90,alignItems:'center',justifyContent:'center',flexDirection:"row",borderRadius:5,marginLeft:"5%"}} colors={['#F4F4F4','#F4F4F4']}>
<CustomTextRegular style={{color:themeStyle.GREY,marginLeft:'5%',borderRadius:5}} fontSize={12}>
Step 3
</CustomTextRegular>

</LinearGradient>
</View>

 <CustomTextSemiBold fontSize={18} style={{marginTop:'8%',color:themeStyle.PRIMARY_COLOR,alignSelf:'center'}}>
 BASIC INFORMATION

 </CustomTextSemiBold>


<View style={{flexDirection:"row",alignItems:'center',marginLeft:"5%",marginTop:"5%"}}>
<CustomTextSemiBold fontSize={11} style={{color:themeStyle.BLACK}}>
WEBSITE URL
</CustomTextSemiBold>
<TextInput style={{height:35,width:213,borderWidth:1,marginLeft:8,borderColor:themeStyle.GREY}}/>
</View>

<View style={{flexDirection:"row",alignItems:'center',marginLeft:"5%",marginTop:"5%"}}>
<CustomTextSemiBold fontSize={11} style={{color:themeStyle.BLACK}}>
CELL NUMBER
</CustomTextSemiBold>
<TextInput style={{height:35,width:213,borderWidth:1,marginLeft:5,borderColor:themeStyle.GREY}}/>
</View>

<CustomTextSemiBold fontSize={18} style={{marginTop:'8%',color:themeStyle.PRIMARY_COLOR,alignSelf:'center'}}>
BUDGET

 </CustomTextSemiBold>


<View style={{flexDirection:"row",alignItems:"center",marginTop:'8%',alignSelf:"center"}}>
<CustomTextSemiBold fontSize={18} style={{color:themeStyle.BLACK}}>
$5
 </CustomTextSemiBold>
 <Slider
  style={{width: 200, height: 40}}
  minimumValue={0}
  maximumValue={1}
  minimumTrackTintColor={themeStyle.PRIMARY_COLOR}
  maximumTrackTintColor="#000000"
/>
<CustomTextSemiBold fontSize={18} style={{color:themeStyle.BLACK}}>
$5,000
 </CustomTextSemiBold>
</View>


<CustomTextSemiBold fontSize={18} style={{marginTop:'8%',color:themeStyle.PRIMARY_COLOR,marginLeft:"5%"}}>
TOTAL $1,200

 </CustomTextSemiBold>


<View style={{flexDirection:"row",alignItems:'center',justifyContent:"space-between",marginHorizontal:"5%",marginTop:'5%'}}>
<LinearGradient
style={{height:78,width:147,alignItems:'center',}}
colors={['#55A6B7','#3669A7']}
>
  <CustomTextSemiBold fontSize={15} style={{color:themeStyle.WHITE,marginTop:"10%"}}>
  LINK CLICKS
  </CustomTextSemiBold>

  <CustomTextSemiBold fontSize={15} style={{color:themeStyle.WHITE,marginTop:"5%"}}>
  50 - 200
  </CustomTextSemiBold>

</LinearGradient>


<LinearGradient
style={{height:78,width:147,alignItems:'center',}}
colors={['#55A6B7','#3669A7']}
>
  <CustomTextSemiBold fontSize={12} style={{color:themeStyle.WHITE,marginTop:"10%"}}>
  PEOPLE REACHED
  </CustomTextSemiBold>

  <CustomTextSemiBold fontSize={15} style={{color:themeStyle.WHITE,marginTop:"5%"}}>
  5K - 600K
  </CustomTextSemiBold>

</LinearGradient>
</View>

<LinearGradient
style={{height:50,width:311,alignItems:'center',flexDirection:'row',alignItems:'center',alignSelf:'center',marginTop:"5%",borderRadius:5}}
colors={['#55A6B7','#3669A7']}
>
  <CustomTextSemiBold fontSize={12} style={{color:themeStyle.WHITE,marginLeft:"5%"}}>
  START DATE:
  </CustomTextSemiBold>
  <Image style={{height:16,width:16,marginLeft:"5%"}} source={require('../../assets/images/Promote/calender.png')}/>

  <CustomTextSemiBold fontSize={15} style={{color:themeStyle.WHITE,marginLeft:'5%'}}>
  FRI, JUNE 14, 2024
  </CustomTextSemiBold>

</LinearGradient>

<LinearGradient
style={{height:50,width:311,alignItems:'center',flexDirection:'row',alignItems:'center',alignSelf:'center',marginTop:"5%",borderRadius:5}}
colors={['#55A6B7','#3669A7']}
>
  <CustomTextSemiBold fontSize={12} style={{color:themeStyle.WHITE,marginLeft:"5%"}}>
  END DATE:
  </CustomTextSemiBold>
  <Image style={{height:16,width:16,marginLeft:"5%"}} source={require('../../assets/images/Promote/calender.png')}/>

  <CustomTextSemiBold fontSize={15} style={{color:themeStyle.WHITE,marginLeft:'5%'}}>
  FRI, JUNE 14, 2024
  </CustomTextSemiBold>

</LinearGradient>

        <View  style={{width:'100%',bottom:0}}>
       <GlobalButton onPress={()=>navigation.navigate(ROUTES.PromotePostthird)} title={'NEXT PAGE'}/>
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
  