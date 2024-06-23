import { View, Text, FlatList, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import themeStyle, { FONT } from '../styles/themeStyle'
import LinearGradient from 'react-native-linear-gradient'
import { CustomTextRegular } from './CustomText'

const data =[

    {
        name :'HAPPY'
    },
    {
        name :'BLESSED'
    },   {
        name :'LOVED'
    },   {
        name :'SAD'
    },   {
        name :'LOVELY'
    },   {
        name :'THANKFUL'
    },   {
        name :'EXCITED'
    },


    {
        name :'IN LOVE'
    },
    {
        name :'CRAZY'
    },   {
        name :'GRATEFUL'
    },   {
        name :'BLISSFUL'
    },   {
        name :'FANTASTIC'
    },   {
        name :'SILLY'
    },   {
        name :'FESTIVE'
    },



    {
        name :'WONDERFUL'
    },
    {
        name :'COOL'
    },   {
        name :'AMUSED'
    },   {
        name :'RELAXED'
    },   {
        name :'POSITIVE'
    },   {
        name :'CHILL'
    },   {
        name :'HOPEFUL'
    },



    
    {
        name :'JOYFUL'
    },
    {
        name :'TIRED'
    },   {
        name :'MOTIVATED'
    },   {
        name :'PROUD'
    },   {
        name :'ALONE'
    },   {
        name :'THOUGHTFUL'
    },   {
        name :'OK'
    },



    
    {
        name :'NOSTALGIC'
    },
    {
        name :'ANGRY'
    },   {
        name :'SICK'
    },   {
        name :'DELIGHTED'
    },   {
        name :'DRAINED'
    },   {
        name :'EMOTIONAL'
    },   {
        name :'CONFIDENT'
    },

    {
        name :'AWESOME'
    },
    {
        name :'FRESH'
    },   {
        name :'DETERMINED'
    },   {
        name :'EXHAUSTED'
    },   {
        name :'ANNOYED'
    },   {
        name :'GLAD'
    },   {
        name :'LUCKY'
    },    {
        name :'HEARTBROKEN'
    },
    {
        name :'BORED'
    },   {
        name :'SLEEPY'
    },   {
        name :'ENERGIZED'
    },   {
        name :'HUNGRY'
    },   {
        name :'PEACEFUL'
    },   {
        name :'PAINED'
    },    {
        name :'DISAPPOINTED'
    },
    {
        name :'COLD'
    },   {
        name :'PISSED OFF'
    },   {
        name :'WORRIED'
    },   {
        name :'CURIOUS'
    },   {
        name :'STRESSED'
    },   {
        name :'IRRITATED'
    },
   {
        name :'FED UP'
    },   {
        name :'GUILTY'
    },
]

const renderItem = ({ item }) => {

    return(
      <View style={{alignItems:'center'}}>
   <TouchableOpacity>
    <LinearGradient style={{height:36,width:148,alignSelf:'center',alignItems:'center',justifyContent:'center',marginRight:10,marginTop:5}} colors={[
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
export default function FeelingGallery() {
  return (
    <View>
    
 <View style={{height:45,width:'90%',alignSelf:'center',borderWidth:1,marginTop:'5%',flexDirection:'row',alignItems:'center',borderRadius:5}}>
<Image resizeMode='contain' style={{height:16,width:16,marginLeft:'5%'}} source={require('../../assets/images/Music/search.png')}/>
<TextInput style={{fontSize:14,fontFamily:FONT.Montserrat_Regular,width:'90%',paddingLeft:20,color:themeStyle.BLACK}} placeholderTextColor={themeStyle.GREY} placeholder='Search Feelings'/>
 </View>

<View style={{alignSelf:'center',marginTop:'5%'}}>
<FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.name}
    //   contentContainerStyle={styles.container}
      numColumns={2}
    />
</View>
    </View>
  )
}