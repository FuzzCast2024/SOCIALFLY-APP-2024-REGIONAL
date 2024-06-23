import React, { useState, useEffect } from 'react';
import { Modal, Text, View, StyleSheet } from 'react-native';
import themeStyle, { FONT } from '../styles/themeStyle';

const CustomToast = ({ visible, message, onHide }) => {
  const [modalVisible, setModalVisible] = useState(visible);

  useEffect(() => {
    setModalVisible(visible); // Set modal visibility when it changes
    if (visible) {
      // If the modal is visible, hide it after 2 seconds
      const timer = setTimeout(() => {
        onHide();
      }, 4000);

      // Clear the timer when component unmounts or when visibility changes
      return () => clearTimeout(timer);
    }
  }, [visible, onHide]);

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={onHide}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>{message}</Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)', // semi-transparent background

  },
  modalView: {
    height: 50,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: themeStyle.PRIMARY_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '3%',
  },
  modalText: {
    textAlign: 'center',
    fontSize: 12,
    color: themeStyle.WHITE,
    fontFamily: FONT.Montserrat_Medium,
  },
});

export default CustomToast;
