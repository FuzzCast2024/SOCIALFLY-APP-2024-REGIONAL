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








export default function Securitychangepassword() {
  

  const [selectedButton, setSelectedButton] = useState('Gallery');




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
 CHANGE PASSWORD
</CustomTextSemiBold>

<CustomTextRegular fontSize={10} style={{color:themeStyle.BLACK,marginLeft:'5%',marginTop:'2%',width:300}}>
Your password must ne at least 6 characters and should 
include a combination of numbers, letters and special 
characters (!@#%&) And your new password should not been
use in last 6 months.
</CustomTextRegular>

 <View style={{flexDirection:"row",alignItems:'center',marginTop:"10%",marginHorizontal:"5%"}}>
<CustomTextSemiBold fontSize={11} style={{color:themeStyle.BLACK}}>
CURRENT PASSWORD:
</CustomTextSemiBold>
<TextInput placeholder='ENTER IN HERE' style={{height:35,width:159,borderWidth:1,marginLeft:5,borderColor:themeStyle.GREY,marginLeft:'auto',marginRight:"5%",paddingBottom:7,paddingLeft:10}}/>
</View>


<View style={{flexDirection:"row",alignItems:'center',marginTop:"5%",marginHorizontal:"5%"}}>
<CustomTextSemiBold fontSize={11} style={{color:themeStyle.BLACK}}>
NEW PASSWORD:
</CustomTextSemiBold>
<TextInput placeholder='ENTER IN HERE' style={{height:35,width:159,borderWidth:1,marginLeft:5,borderColor:themeStyle.GREY,marginLeft:'auto',marginRight:"5%",paddingBottom:7,paddingLeft:10}}/>
</View>




 <View style={{flexDirection:"row",alignItems:'center',marginTop:"5%",marginHorizontal:"5%"}}>
<CustomTextSemiBold fontSize={11} style={{color:themeStyle.BLACK}}>
CONFIRM PASSWORD:
</CustomTextSemiBold>
<TextInput placeholder='ENTER IN HERE' style={{height:35,width:159,borderWidth:1,marginLeft:5,borderColor:themeStyle.GREY,marginLeft:'auto',marginRight:"5%",paddingBottom:7,paddingLeft:10}}/>
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
  