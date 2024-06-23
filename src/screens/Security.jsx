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








export default function Security({navigation}) {
  

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
 <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:'2%',marginHorizontal:'1%'}}>
<Image resizeMode='contain' style={{height:31,width:31}} source={require('../../assets/images/Promote/left.png')}/>
<Image resizeMode='contain' style={{height:15,width:89,left:10}} source={require('../../assets/images/Security/Security.png')}/>
<View style={{height:45,width:171,alignSelf:'center',borderWidth:1,flexDirection:'row',alignItems:'center',borderRadius:5,marginLeft:5}}>
<Image resizeMode='contain' style={{height:16,width:16,marginLeft:'5%'}} source={require('../../assets/images/Music/search.png')}/>
<TextInput style={{fontSize:14,fontFamily:FONT.Montserrat_Regular,width:120,paddingLeft:20,color:themeStyle.BLACK}} placeholderTextColor={themeStyle.GREY} placeholder='Search'/>
 </View>
    </View>


 </View>

 <CustomTextSemiBold fontSize={14} style={{color:themeStyle.BLACK,marginLeft:'5%',marginTop:'10%'}}>
 UPDATE SECURITY
</CustomTextSemiBold>

 <View style={{flexDirection:"row",alignItems:'center',marginTop:"10%",marginHorizontal:"5%"}}>
<CustomTextSemiBold fontSize={11} style={{color:themeStyle.BLACK}}>
PASSWORD:
</CustomTextSemiBold>
<TouchableOpacity style={{marginLeft:'auto',marginRight:'5%'}} onPress={()=>navigation.navigate(ROUTES.Securitychangepassword)}>
<TextInput editable={false} placeholder='CLICK TO UPDATE' style={{height:35,width:213,borderWidth:1,marginLeft:5,borderColor:themeStyle.GREY,marginLeft:'auto',paddingBottom:7,paddingLeft:10}}/>

</TouchableOpacity>
</View>


<View style={{flexDirection:"row",alignItems:'center',marginTop:"5%",marginHorizontal:"5%"}}>
<CustomTextSemiBold fontSize={11} style={{color:themeStyle.BLACK}}>
EMAIL:
</CustomTextSemiBold>
<TextInput placeholder='CLICK TO UPDATE' style={{height:35,width:213,borderWidth:1,marginLeft:5,borderColor:themeStyle.GREY,marginLeft:'auto',marginRight:"5%",paddingBottom:7,paddingLeft:10}}/>
</View>


<CustomTextSemiBold fontSize={14} style={{color:themeStyle.BLACK,marginLeft:'5%',marginTop:'10%'}}>
SECURITY CHECK
</CustomTextSemiBold>

 <View style={{flexDirection:"row",alignItems:'center',marginTop:"10%",marginHorizontal:"5%"}}>
<CustomTextSemiBold fontSize={11} style={{color:themeStyle.BLACK}}>
LAST LOGIN: 
</CustomTextSemiBold>
<TouchableOpacity style={{marginLeft:'auto',marginRight:'5%'}} onPress={()=>navigation.navigate(ROUTES.Securitychangelastlogin)}>
<TextInput editable={false} placeholder='CLICK TO UPDATE' style={{height:35,width:213,borderWidth:1,marginLeft:5,borderColor:themeStyle.GREY,paddingBottom:7,paddingLeft:10}}/>


</TouchableOpacity>
</View>












<View style={{width:'100%',marginTop:'10%'}}>
       <GlobalButton title={'SAVE CHANGES'}/>
       <GlobalButton title={'CANCEL CHANGES'}/>

       </View>






<View style={{height:20}}/>



       
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
  