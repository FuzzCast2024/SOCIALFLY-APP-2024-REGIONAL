// OTPInput.js
import React, { useState, useRef } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const OTPInput = () => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputs = useRef([]);

  const focusNextInput = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value !== '' && index < 3) {
      inputs.current[index + 1].focus();
    }
  };

  const focusPreviousInput = (index, value) => {
    if (value === '' && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  return (
    <View style={styles.container}>
      {otp.map((digit, index) => (
        <TextInput
          key={index}
          style={styles.input}
          keyboardType="number-pad"
          maxLength={1}
          value={digit}
          onChangeText={(value) => focusNextInput(index, value)}
          onKeyPress={({ nativeEvent }) => {
            if (nativeEvent.key === 'Backspace') {
              focusPreviousInput(index, digit);
            }
          }}
          ref={(input) => inputs.current[index] = input}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal:'5%',
    marginTop:'15%'
  },
  input: {
    height: 81,
    width: 64,
    backgroundColor: '#FFF',
    textAlign: 'center',
    fontSize: 24,
    // borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
  },
});

export default OTPInput;
