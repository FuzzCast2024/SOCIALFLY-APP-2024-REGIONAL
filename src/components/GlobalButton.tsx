import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import themeStyle, { FONT } from '../styles/themeStyle'

export default function GlobalButton({title,onPress,marginTop,loading}) {
  return (
  
<TouchableOpacity onPress={onPress} style={{marginTop:marginTop}}>
<LinearGradient
        colors={['#56A8B8', '#2F5CA4']}
        style={{height:52,width:'90%',alignSelf:"center",marginTop:"8%",alignItems:"center",justifyContent:"center",borderRadius:5}}
      >
        {
          loading ? (
            <ActivityIndicator color={themeStyle.WHITE}/>
          ):(
        <Text style={{fontSize:14,fontFamily:FONT.Montserrat_SemiBold,color:themeStyle.WHITE}}>{title}</Text>

          )
        }
      </LinearGradient>
</TouchableOpacity>
  )
}