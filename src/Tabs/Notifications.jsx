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








export default function Notifications({navigation}) {
  

  const [selectedButton, setSelectedButton] = useState('Gallery');

const data =[
  {
    image : require('../../assets/images/userProfie/dp.png'),
    notify :'HELLO I AM LIVE COME AND JOIN ME!!!',
    time:'5 HOURS AGO',
    name:'Jenny Wilson    '
  },
  {
    image : require('../../assets/images/userProfie/dp.png'),
    notify :'HELLO I AM LIVE COME AND JOIN ME!!!',
    time:'5 HOURS AGO',
    name:'Jenny Wilson    '
  },  {
    image : require('../../assets/images/userProfie/dp.png'),
    notify :'HELLO I AM LIVE COME AND JOIN ME!!!',
    time:'5 HOURS AGO',
    name:'Jenny Wilson    '
  },  {
    image : require('../../assets/images/userProfie/dp.png'),
    notify :'HELLO I AM LIVE COME AND JOIN ME!!!',
    time:'5 HOURS AGO',
    name:'Jenny Wilson    '
  },  {
    image : require('../../assets/images/userProfie/dp.png'),
    notify :'HELLO I AM LIVE COME AND JOIN ME!!!',
    time:'5 HOURS AGO',
    name:'Jenny Wilson    '
  },  {
    image : require('../../assets/images/userProfie/dp.png'),
    notify :'HELLO I AM LIVE COME AND JOIN ME!!!',
    time:'5 HOURS AGO',
    name:'Jenny Wilson    '
  },
  {
    image : require('../../assets/images/userProfie/dp.png'),
    notify :'HELLO I AM LIVE COME AND JOIN ME!!!',
    time:'5 HOURS AGO',
    name:'Jenny Wilson    '
  },  {
    image : require('../../assets/images/userProfie/dp.png'),
    notify :'HELLO I AM LIVE COME AND JOIN ME!!!',
    time:'5 HOURS AGO',
    name:'Jenny Wilson    '
  },  {
    image : require('../../assets/images/userProfie/dp.png'),
    notify :'HELLO I AM LIVE COME AND JOIN ME!!!',
    time:'5 HOURS AGO',
    name:'Jenny Wilson    '
  },
]

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

  const renderItem = ({item})=>{
    return(
      <View style={{flexDirection:"row",alignItems:"center",borderWidth:1,padding:8,marginHorizontal:"3%",marginTop:"5%"}}>
<Image style={{height:40,width:40,marginLeft:'5%'}} source={item.image}/>
<View style={{marginLeft:"5%"}}>
  <CustomTextSemiBold fontSize={12} style={{color:themeStyle.BLACK}}>
    {item.name}
  </CustomTextSemiBold>

  <CustomTextSemiBold fontSize={10} style={{color:themeStyle.BLACK}}>
    {item.notify}
  </CustomTextSemiBold>

  <CustomTextSemiBold fontSize={10} style={{color:themeStyle.GREY}}>
    {item.time}
  </CustomTextSemiBold>
</View>
      </View>
    )
  }


  return (
    <View style={{flex:1,backgroundColor:themeStyle.WHITE}}>
      <ScrollView>

 <View style={{height:48,width:'90%',alignSelf:'center',borderRadius:5,marginTop:'8%'}}>
 <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:'2%',marginHorizontal:'2%'}}>
<Image resizeMode='contain' style={{height:31,width:31}} source={require('../../assets/images/Promote/left.png')}/>
<Image resizeMode='contain' style={{height:22,width:260,left:2}} source={require('../../assets/images/Notifications/Notify.png')}/>

    </View>


 </View>

<FlatList
data={data}
renderItem={renderItem}
keyExtractor={(item)=>item.name}


/>


 <View style={{height:100}}/>
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
  