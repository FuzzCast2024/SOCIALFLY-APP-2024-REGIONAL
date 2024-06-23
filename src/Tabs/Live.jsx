import { View, Text, TouchableOpacity, ImageBackground, FlatList, StyleSheet, ScrollView, TextInput } from 'react-native'
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
import Foryoulive from '../Livecomponents/Foryoulive'
import TrendingLive from '../Livecomponents/TrendingLive'
import NearbyLive from '../Livecomponents/NearbyLive'
import VsLive from '../Livecomponents/VsLive'



export default function Live() {
  const navigation = useNavigation()

  const [selectedButton, setSelectedButton] = useState('For You');

  const buttons = [
    { label: 'For You' },
    { label: 'Trending' },
    { label: 'Nearby' },
    { label: 'Favorites' },
    { label: 'VS PK' },
    { label: 'Royal PK' },
    { label: 'Events' },
    { label: 'Leader Board' },
  ];

  const renderSelectedComponent = () => {
    switch (selectedButton) {
      case 'For You':
        return <Foryoulive/>;
      case 'Trending':
        return <TrendingLive/>;
      case 'Nearby':
        return <NearbyLive/>;
      case 'VS PK':
        return <VsLive/>;
      default:
        return null;
    }
  };
  return (
    <View style={{flex:1}}>
        <ScrollView>

    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:'5%',marginHorizontal:'5%'}}>
<Image resizeMode='contain' style={{height:24,width:84}} source={require('../../assets/images/Live/lives.png')}/>
<View style={{height:30,width:160,borderWidth:1,borderColor:themeStyle.PRIMARY_COLOR,borderRadius:2,flexDirection:'row',alignItems:'center'}}>
<Image style={{height:10,width:10,marginLeft:10}} source={require('../../assets/images/Live/search.png')}/>
<TextInput style={{width:'80%',marginLeft:10,fontSize:7}}/>
</View>
<View style={{flexDirection:'row',alignItems:'center'}}>
<Image resizeMode='contain' style={{height:21,width:25,right:10}} source={require('../../assets/images/Live/calendar.png')}/>
<Image resizeMode='contain' style={{height:21,width:25}} source={require('../../assets/images/Live/1small.png')}/>
</View>
    </View>

    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: "2%", marginTop: '5%' }}>
   <ScrollView horizontal showsHorizontalScrollIndicator={false}>
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
        <View style={{width:30}}/>
   </ScrollView>
      </View>
      <View style={{ marginTop: 20,}}>
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