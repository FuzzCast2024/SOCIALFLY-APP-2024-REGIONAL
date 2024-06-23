import { View, Text } from 'react-native'
import React from 'react'
import { CustomTextRegular, CustomTextSemiBold } from './CustomText'
import themeStyle from '../styles/themeStyle'
import { Image } from 'react-native-animatable'

export default function MoreInfo() {
  return (
    <View style={{marginTop:"2%",marginLeft:'5%'}}>
<CustomTextSemiBold style={{color:themeStyle.PRIMARY_COLOR}} fontSize={14}>
Details:
</CustomTextSemiBold>
<View style={{flexDirection:'row',alignItems:'center',marginTop:'5%'}}>
<Image style={{height:18,width:18}} source={require('../../assets/images/MoreInfo/home.png')}/>
<CustomTextRegular fontSize={9} style={{color:themeStyle.BLACK,marginLeft:"5%"}}>
Lives in United State
</CustomTextRegular>
</View>


<View style={{flexDirection:'row',alignItems:'center',marginTop:'2%'}}>
<Image style={{height:18,width:18}} source={require('../../assets/images/MoreInfo/loc.png')}/>
<CustomTextRegular fontSize={9} style={{color:themeStyle.BLACK,marginLeft:"5%"}}>
FROM WEST PALM, BEACH FL, USA
</CustomTextRegular>
</View>

<View style={{flexDirection:'row',alignItems:'center',marginTop:'2%'}}>
<Image style={{height:18,width:18}} source={require('../../assets/images/MoreInfo/heart.png')}/>
<CustomTextRegular fontSize={9} style={{color:themeStyle.BLACK,marginLeft:"5%"}}>
Single
</CustomTextRegular>
</View>


<View style={{flexDirection:'row',alignItems:'center',marginTop:'2%'}}>
<Image style={{height:18,width:18}} source={require('../../assets/images/MoreInfo/friends.png')}/>
<CustomTextRegular fontSize={9} style={{color:themeStyle.BLACK,marginLeft:"5%"}}>
Friends by 3,980 people
</CustomTextRegular>
</View>
    </View>
  )
}