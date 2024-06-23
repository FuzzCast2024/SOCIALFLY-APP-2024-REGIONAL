import { View, Text, Image, TextInput, StyleSheet } from 'react-native';
import React from 'react';
import themeStyle, { FONT } from '../styles/themeStyle';

export default function AuthInput({placeholder,source,marginTop,editable,fontsize,onChangeText,secureTextEntry}) {
  return (
    <View>
      <View style={[styles.inputContainer,{marginTop:marginTop}]}>
        <Image resizeMode='contain' style={styles.emailIcon} source={source}/>
        <TextInput
        onChangeText={onChangeText} 
        editable={editable}
        secureTextEntry={secureTextEntry}
          style={[styles.textInput,{fontSize:fontsize}]} 
          placeholderTextColor='rgba(9, 18, 33, 0.5)' 
          placeholder={placeholder}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    height: 54,
    width: '90%',
    backgroundColor: themeStyle.WHITE,
    alignSelf: 'center',
    marginTop: '10%',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 5,
  },
  emailIcon: {
    height: 19,
    width: 24,
    marginLeft: '5%',
  },
  textInput: {
    color: 'rgba(9, 18, 33, 0.5)',
    fontSize: 13,
    fontFamily: FONT.Montserrat_Regular,
    width: '80%',
    marginLeft: '5%',
  },
});
