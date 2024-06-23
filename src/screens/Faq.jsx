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








export default function Faq() {

const [competitors, setcompetitors] = useState(false)
const [username, setusername] = useState(false)
const [signup, setsignup] = useState(false)
const [events, setevents] = useState(false)
const [password, setpassword] = useState(false)
const [run, setrun] = useState(false)




const togglerun =()=>{
  setrun(!run)
}

const togglecompetitors =()=>{
  setcompetitors(!competitors)
}
const toggleusername =()=>{
  setusername(!username)
}

const togglesignup =()=>{
  setsignup(!signup)
}

const toggleevents =()=>{
  setevents(!events)
}

const togglepassword =()=>{
  setpassword(!password)
}
  const buttons = [
    { label: 'ON' },
    { label: 'OFF' },
  ];








  return (
    <View style={{flex:1,backgroundColor:themeStyle.WHITE}}>
      <ScrollView>

 <View style={{height:48,width:'90%',alignSelf:'center',borderWidth:0,borderColor:themeStyle.PRIMARY_LIGHT,borderRadius:5,marginTop:'8%'}}>
 <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:'2%',marginHorizontal:'1%'}}>
<Image resizeMode='contain' style={{height:31,width:31}} source={require('../../assets/images/Promote/left.png')}/>
<Image resizeMode='contain' style={{height:15,width:89,left:7}} source={require('../../assets/images/Faq/FAQ.png')}/>
<View style={{height:45,width:171,alignSelf:'center',borderWidth:1,flexDirection:'row',alignItems:'center',borderRadius:5,marginLeft:5}}>
<Image resizeMode='contain' style={{height:16,width:16,marginLeft:'5%'}} source={require('../../assets/images/Music/search.png')}/>
<TextInput style={{fontSize:14,fontFamily:FONT.Montserrat_Regular,width:120,paddingLeft:20,color:themeStyle.BLACK}} placeholderTextColor={themeStyle.GREY} placeholder='Search'/>
 </View>
    </View>


 </View>

<TouchableOpacity onPress={togglecompetitors} style={{height:competitors ? 34 :110,width:'90%',alignSelf:'center',borderWidth:1,marginTop:"10%",borderColor:competitors ? themeStyle.BLACK : themeStyle.PRIMARY_LIGHT}}>
<View style={{flexDirection:'row',alignItems:"center",marginTop:'3%'}}>
<CustomTextRegular style={{color:themeStyle.BLACK,marginLeft:"5%"}} fontSize={10}>
HOW LONG DOES THE COMPETITIONS RUN?
</CustomTextRegular>
<Image style={{height:5,width:10,marginLeft:'auto',marginRight:'5%'}} source={competitors ? require('../../assets/images/Faq/black.png') : require('../../assets/images/Faq/primary.png')}/>
</View>
{
  !competitors && (
    <CustomTextRegular style={{color:themeStyle.BLACK,marginLeft:"5%",marginTop:"5%",marginHorizontal:'8%'}} fontSize={10}>
he COMPETITION IS OPEN TO USERS OF ALL AGES AND TYPES OF 
USERS WHO HAVE A PASSION FOR EARNING BY HOBBIES 
COMPETITIONS AND MAY LAST 4 TO 60 DAYS! ANYONE CAN 
SIGN UP TO WIN!
</CustomTextRegular>
  )
}
</TouchableOpacity>


<TouchableOpacity onPress={toggleusername} style={{height:username ? 34 :110,width:'90%',alignSelf:'center',borderWidth:1,marginTop:"5%",borderColor:username ? themeStyle.BLACK : themeStyle.PRIMARY_LIGHT}}>
<View style={{flexDirection:'row',alignItems:"center",marginTop:'3%'}}>
<CustomTextRegular style={{color:themeStyle.BLACK,marginLeft:"5%"}} fontSize={10}>
HOW TO UPDATE MY USERNAME?
</CustomTextRegular>
<Image style={{height:5,width:10,marginLeft:'auto',marginRight:'5%'}} source={username ? require('../../assets/images/Faq/black.png') : require('../../assets/images/Faq/primary.png')}/>
</View>
{
  !username && (
    <CustomTextRegular style={{color:themeStyle.BLACK,marginLeft:"5%",marginTop:"5%",marginHorizontal:'8%'}} fontSize={10}>
he COMPETITION IS OPEN TO USERS OF ALL AGES AND TYPES OF 
USERS WHO HAVE A PASSION FOR EARNING BY HOBBIES 
COMPETITIONS AND MAY LAST 4 TO 60 DAYS! ANYONE CAN 
SIGN UP TO WIN!
</CustomTextRegular>
  )
}
</TouchableOpacity>


<TouchableOpacity onPress={togglesignup} style={{height:signup ? 34 :110,width:'90%',alignSelf:'center',borderWidth:1,marginTop:"5%",borderColor:signup ? themeStyle.BLACK : themeStyle.PRIMARY_LIGHT}}>
<View style={{flexDirection:'row',alignItems:"center",marginTop:'3%'}}>
<CustomTextRegular style={{color:themeStyle.BLACK,marginLeft:"5%"}} fontSize={10}>
HOW TO SIGN UP FOR OFFICIAL HOST?
</CustomTextRegular>
<Image style={{height:5,width:10,marginLeft:'auto',marginRight:'5%'}} source={signup ? require('../../assets/images/Faq/black.png') : require('../../assets/images/Faq/primary.png')}/>
</View>
{
  !signup && (
    <CustomTextRegular style={{color:themeStyle.BLACK,marginLeft:"5%",marginTop:"5%",marginHorizontal:'8%'}} fontSize={10}>
he COMPETITION IS OPEN TO USERS OF ALL AGES AND TYPES OF 
USERS WHO HAVE A PASSION FOR EARNING BY HOBBIES 
COMPETITIONS AND MAY LAST 4 TO 60 DAYS! ANYONE CAN 
SIGN UP TO WIN!
</CustomTextRegular>
  )
}
</TouchableOpacity>


<TouchableOpacity onPress={toggleevents} style={{height:events ? 34 :110,width:'90%',alignSelf:'center',borderWidth:1,marginTop:"5%",borderColor:events ? themeStyle.BLACK : themeStyle.PRIMARY_LIGHT}}>
<View style={{flexDirection:'row',alignItems:"center",marginTop:'3%'}}>
<CustomTextRegular style={{color:themeStyle.BLACK,marginLeft:"5%"}} fontSize={10}>
HOW TO SIGN UP FOR EVENTS?
</CustomTextRegular>
<Image style={{height:5,width:10,marginLeft:'auto',marginRight:'5%'}} source={events ? require('../../assets/images/Faq/black.png') : require('../../assets/images/Faq/primary.png')}/>
</View>
{
  !events && (
    <CustomTextRegular style={{color:themeStyle.BLACK,marginLeft:"5%",marginTop:"5%",marginHorizontal:'8%'}} fontSize={10}>
he COMPETITION IS OPEN TO USERS OF ALL AGES AND TYPES OF 
USERS WHO HAVE A PASSION FOR EARNING BY HOBBIES 
COMPETITIONS AND MAY LAST 4 TO 60 DAYS! ANYONE CAN 
SIGN UP TO WIN!
</CustomTextRegular>
  )
}
</TouchableOpacity>

<TouchableOpacity onPress={togglepassword} style={{height:password ? 34 :110,width:'90%',alignSelf:'center',borderWidth:1,marginTop:"5%",borderColor:password ? themeStyle.BLACK : themeStyle.PRIMARY_LIGHT}}>
<View style={{flexDirection:'row',alignItems:"center",marginTop:'3%'}}>
<CustomTextRegular style={{color:themeStyle.BLACK,marginLeft:"5%"}} fontSize={10}>
HOW TO CHANGE MY PASSWORD?
</CustomTextRegular>
<Image style={{height:5,width:10,marginLeft:'auto',marginRight:'5%'}} source={password ? require('../../assets/images/Faq/black.png') : require('../../assets/images/Faq/primary.png')}/>
</View>
{
  !password && (
    <CustomTextRegular style={{color:themeStyle.BLACK,marginLeft:"5%",marginTop:"5%",marginHorizontal:'8%'}} fontSize={10}>
he COMPETITION IS OPEN TO USERS OF ALL AGES AND TYPES OF 
USERS WHO HAVE A PASSION FOR EARNING BY HOBBIES 
COMPETITIONS AND MAY LAST 4 TO 60 DAYS! ANYONE CAN 
SIGN UP TO WIN!
</CustomTextRegular>
  )
}
</TouchableOpacity>


<TouchableOpacity onPress={togglerun} style={{height:run ? 34 :110,width:'90%',alignSelf:'center',borderWidth:1,marginTop:"5%",borderColor:run ? themeStyle.BLACK : themeStyle.PRIMARY_LIGHT}}>
<View style={{flexDirection:'row',alignItems:"center",marginTop:'3%'}}>
<CustomTextRegular style={{color:themeStyle.BLACK,marginLeft:"5%"}} fontSize={10}>
HOW LONG DOES THE COMPETITIONS RUN?
</CustomTextRegular>
<Image style={{height:5,width:10,marginLeft:'auto',marginRight:'5%'}} source={run ? require('../../assets/images/Faq/black.png') : require('../../assets/images/Faq/primary.png')}/>
</View>
{
  !run && (
    <CustomTextRegular style={{color:themeStyle.BLACK,marginLeft:"5%",marginTop:"5%",marginHorizontal:'8%'}} fontSize={10}>
he COMPETITION IS OPEN TO USERS OF ALL AGES AND TYPES OF 
USERS WHO HAVE A PASSION FOR EARNING BY HOBBIES 
COMPETITIONS AND MAY LAST 4 TO 60 DAYS! ANYONE CAN 
SIGN UP TO WIN!
</CustomTextRegular>
  )
}
</TouchableOpacity>

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
  