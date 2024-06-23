import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { CustomTextSemiBold } from './CustomText'

export default function PostButton({title,source,onPress}) {
  return (
    <TouchableOpacity onPress={onPress} style={{}}>
    <LinearGradient colors={['#49C0D8','#2F5CA4']} style={{height:36,width:'90%',flexDirection:'row',alignItems:'center',alignSelf:'center',marginTop:'5%'}}>
        <Image resizeMode='contain' style={{height:26,width:26,marginLeft:10}} source={source}/>
    <CustomTextSemiBold style={{marginLeft:'5%'}} fontSize={12}>
    {title}
    </CustomTextSemiBold>
        </LinearGradient>
    </TouchableOpacity>
  )
}