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
import { colors } from 'react-native-swiper-flatlist/src/themes';


const data =[
  {
    devicename :'SAMSUNG GALAXY A03’S',
    devicelocation:'FOND DU LAC, WI, USA',
    logintime:"LOGIN AT 10:00 AM CST"
  },
  {
    devicename :'SAMSUNG GALAXY A03’S',
    devicelocation:'FOND DU LAC, WI, USA',
    logintime:"LOGIN AT 10:00 AM CST"
  },  {
    devicename :'SAMSUNG GALAXY A03’S',
    devicelocation:'FOND DU LAC, WI, USA',
    logintime:"LOGIN AT 10:00 AM CST"
  },  {
    devicename :'SAMSUNG GALAXY A03’S',
    devicelocation:'FOND DU LAC, WI, USA',
    logintime:"LOGIN AT 10:00 AM CST"
  },  {
    devicename :'SAMSUNG GALAXY A03’S',
    devicelocation:'FOND DU LAC, WI, USA',
    logintime:"LOGIN AT 10:00 AM CST"
  },  {
    devicename :'SAMSUNG GALAXY A03’S',
    devicelocation:'FOND DU LAC, WI, USA',
    logintime:"LOGIN AT 10:00 AM CST"
  },  {
    devicename :'SAMSUNG GALAXY A03’S',
    devicelocation:'FOND DU LAC, WI, USA',
    logintime:"LOGIN AT 10:00 AM CST"
  },
]





export default function Securitychangelastlogin() {
  

const renderItem =({item})=>{
  return(
<View style={{height:64,width:'90%',alignSelf:'center',borderWidth:1,borderColor:themeStyle.PRIMARY_COLOR,marginTop:"5%",flexDirection:"row",alignItems:'center'}}>
<View style={{marginLeft:"5%"}}>
<CustomTextSemiBold fontSize={11} style={{color:themeStyle.PRIMARY_COLOR}}>
  {item.devicename}
</CustomTextSemiBold>
<CustomTextRegular style={{marginTop:'5%'}} fontSize={10}>
  {item.devicelocation}
</CustomTextRegular>
<CustomTextRegular fontSize={10}>
  {item.logintime}
</CustomTextRegular>
</View>


<TouchableOpacity style={{marginLeft:"auto",marginRight:"5%"}}>
  <LinearGradient 
  style={{height:32,width:92,borderRadius:5,alignItems:'center',justifyContent:'center'}}
  colors={['#49C0D8','#2F5CA4']}
  >
    <CustomTextRegular style={{color:themeStyle.WHITE}} fontSize={8}>
    LOGOUT DEVICE
    </CustomTextRegular>

  </LinearGradient>
</TouchableOpacity>

</View>
  )
}




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
 LAST LOGIN:
</CustomTextSemiBold>

<CustomTextRegular fontSize={10} style={{color:themeStyle.BLACK,marginLeft:'5%',marginTop:'2%',width:300}}>
Here is a list of devices that been login in to your account. 
If you don’t recognized the device please sign them out and reset your password for your account safety.
</CustomTextRegular>

<FlatList

data={data}
renderItem={renderItem}



/>












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
  