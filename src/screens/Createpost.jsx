import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React from 'react'
import themeStyle, { FONT } from '../styles/themeStyle'
import { Image } from 'react-native-animatable'
import { CustomTextRegular, CustomTextSemiBold } from '../components/CustomText'
import LinearGradient from 'react-native-linear-gradient'
import PostButton from '../components/PostButton'
import { ROUTES } from '../routes/RoutesConstants'

export default function Createpost({navigation}) {
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

<TextInput style={{fontFamily:FONT.Montserrat_Regular,color:themeStyle.BLACK}} placeholderTextColor={themeStyle.BLACK} placeholder='WHATS ON YOUR MIND?' multiline numberOfLines={6} textAlignVertical='top' style={{height:114,width:'90%',alignSelf:'center',borderWidth:0.5,borderRadius:5,marginTop:'5%'}}/>

<PostButton  title={'PHOTO UPLOAD'} source={require('../../assets/images/Mind/gallery.png')}/>
<PostButton  title={'VIDEO UPLOAD'} source={require('../../assets/images/Mind/gallery.png')}/>
<PostButton onPress={()=>navigation.navigate(ROUTES.Feeling)}  title={'FEELINGS / ACTIVITIES'} source={require('../../assets/images/Mind/feel.png')}/>
<PostButton onPress={()=>navigation.navigate(ROUTES.SelectLocation)}  title={'CHECK-IN / SHARE LOCATION'} source={require('../../assets/images/Mind/location.png')}/>
<PostButton  title={'VIDEO CREATOR'} source={require('../../assets/images/Mind/videocreator.png')}/>
<PostButton  title={'PICTURE EDITOR'} source={require('../../assets/images/Mind/picture.png')}/>
<PostButton onPress={()=>navigation.navigate(ROUTES.BackgroundFilter)}  title={'BACKGROUND FILTER'} source={require('../../assets/images/Mind/filter.png')}/>
<PostButton onPress={()=>navigation.navigate(ROUTES.Gif)}  title={'GIF '} source={require('../../assets/images/Mind/gif.png')}/>
<PostButton onPress={()=>navigation.navigate(ROUTES.Event)}  title={'TAG A EVENT'} source={require('../../assets/images/Mind/event.png')}/>
<PostButton  onPress={()=>navigation.navigate(ROUTES.Fundraiser)}  title={'TAG FUNDRAISER'} source={require('../../assets/images/Mind/funraiser.png')}/>
<PostButton onPress={()=>navigation.navigate(ROUTES.Family)}   title={'TAG A FAMILY GROUP'} source={require('../../assets/images/Mind/family.png')}/>
<PostButton  title={'TAG FUNDRAISER'} source={require('../../assets/images/Mind/funraiser.png')}/>
<PostButton onPress={()=>navigation.navigate(ROUTES.PromotePostfirst)}   title={'PROMOTE THIS POST'} source={require('../../assets/images/Mind/filter.png')}/>

<View style={{height:30}}/>
</ScrollView>

    </View>
  )
}