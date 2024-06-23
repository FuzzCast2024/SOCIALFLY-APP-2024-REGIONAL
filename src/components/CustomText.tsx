// CustomText.js
import React from 'react';
import { Text, StyleSheet } from 'react-native';
import themeStyle, { FONT } from '../styles/themeStyle';

export const CustomTextRegular = ({ children, fontSize,color,marginLeft, marginTop,marginRight,style, ...props }) => {
  return (
    <Text style={[styles.text, { fontSize,color,marginLeft,marginTop,marginRight }, style]} {...props}>
      {children}
    </Text>
  );
};


export const CustomTextSemiBold = ({ children, fontSize, style, ...props }) => {
    return (
      <Text style={[styles.text2, { fontSize }, style]} {...props}>
        {children}
      </Text>
    );
  };
  

const styles = StyleSheet.create({
  text: {
    color: themeStyle.textDark,
    fontFamily:FONT.Montserrat_Regular

  },
  text2: {
    color: themeStyle.WHITE,
    fontFamily:FONT.Montserrat_SemiBold

  },
});

