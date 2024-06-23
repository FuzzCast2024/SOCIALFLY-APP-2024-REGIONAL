import { View, Text, TouchableOpacity, TextInput, ScrollView, FlatList, StyleSheet, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import themeStyle, { FONT } from '../styles/themeStyle'
import { Image } from 'react-native-animatable'
import { CustomTextRegular, CustomTextSemiBold } from '../components/CustomText'
import LinearGradient from 'react-native-linear-gradient'
import PostButton from '../components/PostButton'
import { ROUTES } from '../routes/RoutesConstants'


const data = [
    { id: '1', src: require('../../assets/images/Backgrounds/1.png')},
    { id: '1', src: require('../../assets/images/Backgrounds/2.png')},
    { id: '1', src: require('../../assets/images/Backgrounds/4.png')},
    { id: '1', src: require('../../assets/images/Backgrounds/5.png')},
    { id: '1', src: require('../../assets/images/Backgrounds/6.png')},
    { id: '1', src: require('../../assets/images/Backgrounds/7.png')},    { id: '1', src: require('../../assets/images/Backgrounds/10.png')},
    { id: '1', src: require('../../assets/images/Backgrounds/8.png')},
    { id: '1', src: require('../../assets/images/Backgrounds/9.png')},
    { id: '1', src: require('../../assets/images/Backgrounds/11.png')},
    { id: '1', src: require('../../assets/images/Backgrounds/12.png')},
    { id: '1', src: require('../../assets/images/Backgrounds/1.png')},
    { id: '1', src: require('../../assets/images/Backgrounds/11.png')},
    { id: '1', src: require('../../assets/images/Backgrounds/12.png')},
    { id: '1', src: require('../../assets/images/Backgrounds/13.png')},

    { id: '1', src: require('../../assets/images/Backgrounds/14.png')},
    { id: '1', src: require('../../assets/images/Backgrounds/15.png')},
    { id: '1', src: require('../../assets/images/Backgrounds/16.png')},
    { id: '1', src: require('../../assets/images/Backgrounds/17.png')},
    { id: '1', src: require('../../assets/images/Backgrounds/18.png')},
    { id: '1', src: require('../../assets/images/Backgrounds/19.png')},
    { id: '1', src: require('../../assets/images/Backgrounds/20.png')},
    { id: '1', src: require('../../assets/images/Backgrounds/21.png')},
    { id: '1', src: require('../../assets/images/Backgrounds/22.png')},
    { id: '1', src: require('../../assets/images/Backgrounds/23.png')},
    // Add more items as needed
  ];


export default function BackgroundFilter({navigation}) {
    const [selectedBackground, setselectedBackground] = useState(null)
    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={()=>setselectedBackground(item.src)} style={styles.imageContainer}>
          <Image source={item.src } style={styles.image} />
        </TouchableOpacity>
      );
  return (
    <View style={{flex:1}}>
        <ScrollView>

 <View style={{height:48,width:'90%',alignSelf:'center',borderWidth:0.5,borderColor:themeStyle.PRIMARY_LIGHT,flexDirection:'row',borderRadius:5,marginTop:'8%',alignItems:'center'}}>
<Image style={{height:30,width:30,marginLeft:'5%'}} source={require('../../assets/images/Mind/back.png')}/>
<CustomTextSemiBold style={{color:themeStyle.PRIMARY_LIGHT,marginLeft:'5%'}} fontSize={14}>
CREATE A POST
</CustomTextSemiBold>
<TouchableOpacity style={{marginLeft:'auto',marginRight:'5%'}} >
<LinearGradient
style={{height:32,width:82,alignItems:'center',justifyContent:'center',borderRadius:7,}}
colors={['#55A6B7','#3669A7']}

>
<CustomTextRegular fontSize={8} style={{color:themeStyle.WHITE}}>
POST NOW
</CustomTextRegular>
</LinearGradient>
</TouchableOpacity>
 </View>
 <View style={{flexDirection:'row',alignItems:'center',marginLeft:'5%',marginTop:'10%'}}>
<Image style={{height:44,width:44,top:20}} source={require('../../assets/images/home/man1.png')}/>
<View style={{flexDirection:'row',alignItems:'center'}}>
<TouchableOpacity onPress={()=>navigation.navigate(ROUTES.PostAudience)} style={{marginLeft:"5%"}} >
    <LinearGradient colors={['#49C0D8','#2F5CA4']} style={{height:26,width:128,flexDirection:'row',alignItems:'center'}}>
    <Image resizeMode='contain' style={{height:30,width:30}} source={require('../../assets/images/Mind/privacy.png')}/>
<CustomTextSemiBold fontSize={9}>
CHOOSE PRIVACY
</CustomTextSemiBold>
    </LinearGradient>
</TouchableOpacity>
<TouchableOpacity onPress={()=>navigation.navigate(ROUTES.Music)} style={{marginLeft:'2%'}} >
    <LinearGradient colors={['#49C0D8','#2F5CA4']} style={{height:26,width:128,flexDirection:'row',alignItems:'center'}}>
    <Image resizeMode='contain' style={{height:30,width:30}} source={require('../../assets/images/Mind/music.png')}/>
<CustomTextSemiBold fontSize={9}>
ADD MUSIC
</CustomTextSemiBold>
    </LinearGradient>
</TouchableOpacity>
</View>
 </View>
 <View style={{flexDirection:'row',alignItems:'center',marginLeft:'auto',marginRight:'6%'}}>
<TouchableOpacity onPress={()=>navigation.navigate(ROUTES.Feeling)} style={{marginLeft:"5%"}} >
    <LinearGradient colors={['#49C0D8','#2F5CA4']} style={{height:26,width:128,flexDirection:'row',alignItems:'center'}}>
    <Image resizeMode='contain' style={{height:25,width:25,marginLeft:5}} source={require('../../assets/images/Mind/feeling.png')}/>
<CustomTextSemiBold style={{marginLeft:2}} fontSize={9}>
CHOOSE FEELING
</CustomTextSemiBold>
    </LinearGradient>
</TouchableOpacity>
<TouchableOpacity style={{marginLeft:'2%'}} >
    <LinearGradient colors={['#49C0D8','#2F5CA4']} style={{height:26,width:128,flexDirection:'row',alignItems:'center'}}>
    <Image resizeMode='contain' style={{height:26,width:26,marginLeft:5}} source={require('../../assets/images/Mind/friends.png')}/>
<CustomTextSemiBold fontSize={8}>
TAGS FRIEND / USERS
</CustomTextSemiBold>
    </LinearGradient>
</TouchableOpacity>
</View>
<ImageBackground
imageStyle={{borderRadius:5}}
style={{height:114,width:'90%',alignSelf:'center',marginTop:'5%',marginLeft:"10%"}}
source={selectedBackground}
>
<TextInput style={{fontFamily:FONT.Montserrat_Regular,color:themeStyle.BLACK}} placeholderTextColor={selectedBackground ? themeStyle.WHITE : themeStyle.BLACK} placeholder='WHATS ON YOUR MIND?' multiline numberOfLines={6} textAlignVertical='top' style={{height:114,width:'90%',borderWidth:0.5,borderRadius:5,paddingLeft:20,color:selectedBackground ? themeStyle.WHITE : themeStyle.BLACK}}/>

</ImageBackground>


<FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      numColumns={3}
      contentContainerStyle={styles.container}
    />

<View style={{height:30}}/>
</ScrollView>

    </View>
  )
}


const styles = StyleSheet.create({
    container: {
      padding: 10,
    },
    imageContainer: {
      flex: 1,
      margin: 5,
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      width: 100,
      height: 86,
    },
  });
  