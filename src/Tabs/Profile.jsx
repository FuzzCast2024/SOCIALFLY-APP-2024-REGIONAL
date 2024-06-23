import { View, Text, TouchableOpacity, ImageBackground, FlatList, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Image } from 'react-native-animatable'
import LinearGradient from 'react-native-linear-gradient'
import { CustomTextRegular, CustomTextSemiBold } from '../components/CustomText'
import themeStyle, { FONT } from '../styles/themeStyle'
import MapView, { Marker } from 'react-native-maps'
import { useNavigation } from '@react-navigation/native'
import { ROUTES } from '../routes/RoutesConstants'
import Timeline from '../components/Timeline'
import PhotoLibrary from '../components/PhotoLibrary'
import MoreInfo from '../components/MoreInfo'







export default function Profile() {


  const [selectedButton, setSelectedButton] = useState('TIMELINE');

  const buttons = [
    { label: 'TIMELINE' },
    { label: 'PHOTOS LIBRARY' },
    { label: 'MORE INFO' },
    { label: 'REELS/VIDEOS' },
  ];

  const renderSelectedComponent = () => {
    switch (selectedButton) {
      case 'TIMELINE':
        return <Timeline/>;
      case 'PHOTOS LIBRARY':
        return <PhotoLibrary/>;
      case 'MORE INFO':
        return <MoreInfo/>;
      case 'REELS/VIDEOS':
        return <PhotoLibrary/>;
      default:
        return null;
    }
  };

  const navigation = useNavigation()



  return (
    <View style={{flex:1}}>
        <ScrollView>

    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:'5%',marginHorizontal:'5%'}}>
<Image resizeMode='contain' style={{height:24,width:84}} source={require('../../assets/images/home/Sociafly.png')}/>
<View style={{flexDirection:'row',alignItems:'center'}}>
<Image resizeMode='contain' style={{height:21,width:25,right:10}} source={require('../../assets/images/home/bars.png')}/>
<Image resizeMode='contain' style={{height:21,width:25}} source={require('../../assets/images/home/settings.png')}/>
</View>
    </View>

<ImageBackground style={{height:196,width:'100%',alignSelf:'center',marginTop:'5%'}} source={require('../../assets/images/userProfie/bac.png')}>
<Image style={{height:92,width:92,position:'absolute',bottom:-30,left:9}} source={require('../../assets/images/userProfie/dp.png')}/>
<View style={{flexDirection:'row',alignItems:'center',position:"absolute",right:10,bottom:10}}>
<TouchableOpacity style={{height:33,width:90,}}>
<LinearGradient style={{height:33,width:90,borderRadius:5,alignItems:'center',justifyContent:'center',flexDirection:'row'}} colors={[
  '#49C0D8','#2F5CA4'
]}>
<Image resizeMode='contain' style={{width:25,width:25}} source={require('../../assets/images/userProfie/star.png')}/>
<CustomTextSemiBold style={{width:50,left:5}} fontSize={8}>
ADD TO FAVORITE
</CustomTextSemiBold>
</LinearGradient>
</TouchableOpacity>


<TouchableOpacity style={{height:33,width:90,marginLeft:8}}>
<LinearGradient style={{height:33,width:90,borderRadius:5,alignItems:'center',justifyContent:'center',flexDirection:'row'}} colors={[
  '#49C0D8','#2F5CA4'
]}>
<Image resizeMode='contain' style={{width:25,width:24}} source={require('../../assets/images/userProfie/add.png')}/>
<CustomTextSemiBold style={{width:50,left:5}} fontSize={8}>
ADD AS FRIENDS
</CustomTextSemiBold>
</LinearGradient>
</TouchableOpacity>
</View>
</ImageBackground>

<View style={{height:175,borderWidth:2,borderTopWidth:0,width:'98%',alignSelf:'center',borderColor:themeStyle.PRIMARY_LIGHT}}>
<View style={{flexDirection:'row',alignItems:'center',marginTop:"12%",justifyContent:"space-evenly",width:'80%'}}>
<CustomTextSemiBold style={{color:themeStyle.BLACK}} fontSize={10}>
Jenny Wilson    
</CustomTextSemiBold>
<Image tintColor={themeStyle.BLACK} style={{height:10,width:1}} source={require('../../assets/images/userProfie/line.png')}/>


<CustomTextSemiBold style={{color:themeStyle.BLACK}} fontSize={10}>
LOCATION   
</CustomTextSemiBold>
<Image tintColor={themeStyle.BLACK} style={{height:10,width:1}} source={require('../../assets/images/userProfie/line.png')}/>


<CustomTextSemiBold style={{color:themeStyle.BLACK}} fontSize={10}>
AGE 
</CustomTextSemiBold>
<Image tintColor={themeStyle.BLACK} style={{height:10,width:1}} source={require('../../assets/images/userProfie/line.png')}/>

<CustomTextSemiBold style={{color:themeStyle.BLACK}} fontSize={10}>
GENDER
</CustomTextSemiBold>
</View>


<View style={{flexDirection:'row',marginTop:"5%"}}>
<TouchableOpacity style={{height:33,width:90,marginLeft:20}}>
<LinearGradient style={{height:33,width:97,borderRadius:5,alignItems:'center',justifyContent:'center',}} colors={[
  '#49C0D8','#2F5CA4'
]}>
<CustomTextSemiBold style={{}} fontSize={8}>
FRIENDS
</CustomTextSemiBold>
<CustomTextSemiBold style={{}} fontSize={8}>
1000
</CustomTextSemiBold>
</LinearGradient>
</TouchableOpacity>

<TouchableOpacity style={{height:33,width:90,marginLeft:15}}>
<LinearGradient style={{height:33,width:97,borderRadius:5,alignItems:'center',justifyContent:'center',}} colors={[
  '#49C0D8','#2F5CA4'
]}>
<CustomTextSemiBold style={{}} fontSize={8}>
FOLLOWERS
</CustomTextSemiBold>
<CustomTextSemiBold style={{}} fontSize={8}>
1000
</CustomTextSemiBold>
</LinearGradient>
</TouchableOpacity>

<TouchableOpacity style={{height:33,width:90,marginLeft:15}}>
<LinearGradient style={{height:33,width:97,borderRadius:5,alignItems:'center',justifyContent:'center',}} colors={[
  '#49C0D8','#2F5CA4'
]}>
<CustomTextSemiBold style={{}} fontSize={8}>
FAVORITES
</CustomTextSemiBold>
<CustomTextSemiBold style={{}} fontSize={8}>
1000
</CustomTextSemiBold>
</LinearGradient>
</TouchableOpacity>
</View>


<View style={{flexDirection:'row',marginTop:"2%"}}>
<TouchableOpacity style={{height:33,width:90,marginLeft:20}}>
<LinearGradient style={{height:33,width:97,borderRadius:5,alignItems:'center',justifyContent:'center',}} colors={[
  '#49C0D8','#2F5CA4'
]}>
<CustomTextSemiBold style={{}} fontSize={8}>
SP LEVEL
</CustomTextSemiBold>
<CustomTextSemiBold style={{}} fontSize={8}>
1000
</CustomTextSemiBold>
</LinearGradient>
</TouchableOpacity>

<TouchableOpacity style={{height:33,width:90,marginLeft:15}}>
<LinearGradient style={{height:33,width:97,borderRadius:5,alignItems:'center',justifyContent:'center',}} colors={[
  '#49C0D8','#2F5CA4'
]}>
<CustomTextSemiBold style={{}} fontSize={8}>
FOLLOWERS
</CustomTextSemiBold>
<CustomTextSemiBold style={{}} fontSize={8}>
1000
</CustomTextSemiBold>
</LinearGradient>
</TouchableOpacity>

<TouchableOpacity style={{height:33,width:90,marginLeft:15}}>
<LinearGradient style={{height:33,width:97,borderRadius:5,alignItems:'center',justifyContent:'center',}} colors={[
  '#49C0D8','#2F5CA4'
]}>
<CustomTextSemiBold style={{}} fontSize={8}>
DIAMONDS
</CustomTextSemiBold>
<CustomTextSemiBold style={{}} fontSize={8}>
1000
</CustomTextSemiBold>
</LinearGradient>
</TouchableOpacity>
</View>
<CustomTextSemiBold style={{alignSelf:'center',color:themeStyle.PRIMARY_COLOR,marginTop:5}} fontSize={12}>
Jenny Wilson BIO   
</CustomTextSemiBold>
</View>


<View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: "2%", marginTop: '5%' }}>
        {buttons.map((button, index) => (
          <TouchableOpacity key={index} style={{ height: 33, width: 73, marginLeft: 8 }} onPress={() => setSelectedButton(button.label)}>
            <LinearGradient
              style={{ height: 33, width: 73, borderRadius: 5, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}
              colors={selectedButton === button.label ? ['#49C0D8', '#2F5CA4'] : ['#B5B5B5', '#B5B5B5']}
            >
              <Text style={{ fontSize: 8 ,color: themeStyle.WHITE}}>
                {button.label}
              </Text>
            </LinearGradient>
            {
              selectedButton ===  button.label &&(
                <Image resizeMode='contain' style={{height:7,width:66,alignSelf:'center',marginTop:5}} source={require('../../assets/images/userProfie/myline.png')}/>
              )
            }
          </TouchableOpacity>
        ))}
      </View>
      <View style={{ marginTop: 20, marginLeft: "2%" }}>
        {renderSelectedComponent()}
      </View>


<View style={{height:100}}/>
</ScrollView>

    </View>
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    box: {
      height: 74,
      width: 63,
      borderWidth: 1,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius:5,
      borderColor:'#49C0D8',
      marginLeft:10
    },
    image: {
      height: 35,
      width: 35,
      marginBottom: 5,
    },
    text: {
      textAlign: 'center',
      fontSize:8,
      fontFamily:FONT.Montserrat_Regular,
      color:themeStyle.BLACK
    },
  });