import { View, Text, FlatList, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import themeStyle, { FONT } from '../styles/themeStyle'
import LinearGradient from 'react-native-linear-gradient'
import { CustomTextRegular } from './CustomText'

const data =[

    {
        name :'CELEBRATING'
    },
    {
        name :'WATCHING'
    },   {
        name :'EATING'
    },   {
        name :'ATTENDING'
    },   {
        name :'DRINKING'
    },   {
        name :'TRAVELING'
    },   {
        name :'LISTENING TO'
    },


    {
        name :'LOOKING FOR'
    },
    {
        name :'THINKING ABOUT'
    },   {
        name :'READING'
    },   {
        name :'PLAYING'
    },   {
        name :'SUPPORTING'
    }, 
]

const renderItem = ({ item }) => {

    return(
      <View style={{}}>
   <TouchableOpacity>
    <LinearGradient style={{height:36,width:'90%',alignSelf:'center',alignItems:'center',justifyContent:'center',marginTop:5}} colors={[
        '#49C0D8','#2F5CA4'
    ]}>
<CustomTextRegular style={{color:themeStyle.WHITE}}>
    {item.name}
</CustomTextRegular>
    </LinearGradient>
   </TouchableOpacity>
    </View>
    )
  }
export default function FeelingActivity() {
  return (
    <View>
    
 <View style={{height:45,width:'90%',alignSelf:'center',borderWidth:1,marginTop:'5%',flexDirection:'row',alignItems:'center',borderRadius:5}}>
<Image resizeMode='contain' style={{height:16,width:16,marginLeft:'5%'}} source={require('../../assets/images/Music/search.png')}/>
<TextInput style={{fontSize:14,fontFamily:FONT.Montserrat_Regular,width:'90%',paddingLeft:20,color:themeStyle.BLACK}} placeholderTextColor={themeStyle.GREY} placeholder='Search Activity'/>
 </View>

<View style={{marginTop:'5%'}}>
<FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.name}
    //   contentContainerStyle={styles.container}
    //   numColumns={2}
    />
</View>
    </View>
  )
}