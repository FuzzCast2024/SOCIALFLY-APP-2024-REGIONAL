import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import themeStyle, { FONT } from '../styles/themeStyle'
import { CustomTextRegular, CustomTextSemiBold } from '../components/CustomText';
import Sound from 'react-native-sound';
import LinearGradient from 'react-native-linear-gradient';






const data = [
  { id: '1', 
    name:'MVP',
    artist:'ANTHONY BEASTMODE',
    songtime:"2:54",
    songfile: require('../../assets/songs/Music1.mp3'),
    src: require('../../assets/images/Music/1.png')
  },
  { id: '2', 
    name:'Goin off',
    artist:'ANTHONY BEASTMODE',
    songtime:"2:54",
    songfile: require('../../assets/songs/Music2.mp3'),

    src: require('../../assets/images/Music/2.png')
  },
  { id: '4',
    name:'Rise Up',
    artist:'ANTHONY BEASTMODE',
    songtime:"2:54",
    songfile: require('../../assets/songs/Music3.mp3'),

    src: require('../../assets/images/Music/3.png')
  },
  { id: '3',
    name:'Itachi',
    artist:'ANTHONY BEASTMODE',
    songtime:"2:54",
    songfile: require('../../assets/songs/Music4.mp3'),

    src: require('../../assets/images/Music/4.png')
  },
  { id: '5',
    name:'Lonely',
    artist:'ANTHONY BEASTMODE',
    songtime:"2:54",
    songfile: require('../../assets/songs/Music1.mp3'),

    src: require('../../assets/images/Music/5.png')
  },
  { id: '7', 
    name:'Baby',
    artist:'ANTHONY BEASTMODE',
    songtime:"2:54",
    songfile: require('../../assets/songs/Music1.mp3'),

    src: require('../../assets/images/Music/6.png')
  },
];


export default function Music() {
  

  const [selectedButton, setSelectedButton] = useState('For you');

  const buttons = [
    { label: 'For you' },
    { label: 'Browse' },

  ];

  const renderSelectedComponent = () => {
    switch (selectedButton) {
      case 'For you':
        return <Timeline/>;
      case 'Browse':
        return <PhotoLibrary/>;

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


  const renderItem = ({ item }) => {

    return(
      <View style={styles.imageContainer}>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 5 }}>
        <Image style={{ height: 36, width: 36 }} source={item.src} />
        <View style={{ marginLeft: '5%' }}>
          <CustomTextSemiBold style={{ color: themeStyle.BLACK }} fontSize={12}>
            {item.name}
          </CustomTextSemiBold>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <CustomTextRegular fontSize={10}>
              {item.artist}
            </CustomTextRegular>
            <Image style={{ height: 5, width: 5, marginLeft: 5 }} source={require('../../assets/images/Music/dot.png')} />
            <CustomTextSemiBold style={{ color: themeStyle.BLACK, marginLeft: 5 }} fontSize={9}>
              {duration}
            </CustomTextSemiBold>
          </View>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: "auto", marginRight: 15 }}>
          <TouchableOpacity>
            <Image style={{ height: 19, width: 25 }} source={require('../../assets/images/Music/slide.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            setfile(item.songfile)
            playSong(item.songfile)
          }}>
            <Image style={{ height: 25, width: 25, marginLeft: 5 }} source={require('../../assets/images/Music/play.png')} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
    )
  }
  return (
    <View style={{flex:1,backgroundColor:themeStyle.WHITE}}>
 <View style={{height:48,width:'90%',alignSelf:'center',borderWidth:0.5,borderColor:themeStyle.PRIMARY_LIGHT,borderRadius:5,marginTop:'8%'}}>
 <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:'2%',marginHorizontal:'5%'}}>
<Image resizeMode='contain' style={{height:29,width:19}} source={require('../../assets/images/Gallery/cross.png')}/>
<Image resizeMode='contain' style={{height:40,width:200,right:60}} source={require('../../assets/images/Music/select.png')}/>
    </View>


 </View>

 <View style={{height:45,width:'90%',alignSelf:'center',borderWidth:1,marginTop:'5%',flexDirection:'row',alignItems:'center',borderRadius:5}}>

 {buttons.map((button, index) => (
   <TouchableOpacity onPress={() => setSelectedButton(button.label)} style={{width:'50%'}}>
   <LinearGradient
   style={{height:44,width:'100%',borderRadius:5,alignItems:'center',justifyContent:"center"}}
   colors={selectedButton === button.label ? ['#49C0D8', '#2F5CA4'] : ['white', 'white']}
   >
     <CustomTextRegular style={{color:selectedButton === button.label ? themeStyle.WHITE : themeStyle.GREY}}>
     {button.label}
     </CustomTextRegular>
 
   </LinearGradient>
 </TouchableOpacity>
        ))}





{/* <TouchableOpacity style={{width:'50%'}}>
  <LinearGradient
  style={{height:45,width:'100%',borderRadius:5,alignItems:'center',justifyContent:"center"}}
  colors={[
    '#55A6B7','#3669A7'
  ]}
  >
    <CustomTextRegular style={{color:themeStyle.WHITE}}>
    ACTIVITIES
    </CustomTextRegular>

  </LinearGradient>
</TouchableOpacity> */}
 </View>

 <View style={{height:45,width:'90%',alignSelf:'center',borderWidth:1,marginTop:'5%',flexDirection:'row',alignItems:'center',borderRadius:5}}>
<Image resizeMode='contain' style={{height:16,width:16,marginLeft:'5%'}} source={require('../../assets/images/Music/search.png')}/>
<TextInput style={{fontSize:14,fontFamily:FONT.Montserrat_Regular,width:'90%',paddingLeft:20,color:themeStyle.BLACK}} placeholderTextColor={themeStyle.GREY} placeholder='Search Music'/>
 </View>

 <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.container}
    />
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
  