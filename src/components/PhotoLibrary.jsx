import { View, Text, FlatList, StyleSheet, Image } from 'react-native'
import React from 'react'

const data = [
    { id: '1', src: require('../../assets/images/Gallery/1.png')},
    { id: '1', src: require('../../assets/images/Gallery/2.png')},
    { id: '1', src: require('../../assets/images/Gallery/4.png')},
    { id: '1', src: require('../../assets/images/Gallery/5.png')},
    { id: '1', src: require('../../assets/images/Gallery/6.png')},
    { id: '1', src: require('../../assets/images/Gallery/7.png')},    { id: '1', src: require('../../assets/images/Gallery/10.png')},
    { id: '1', src: require('../../assets/images/Gallery/8.png')},
    { id: '1', src: require('../../assets/images/Gallery/9.png')},
    { id: '1', src: require('../../assets/images/Gallery/11.png')},
    { id: '1', src: require('../../assets/images/Gallery/12.png')},
    { id: '1', src: require('../../assets/images/Gallery/1.png')},
    { id: '1', src: require('../../assets/images/Gallery/11.png')},
    { id: '1', src: require('../../assets/images/Gallery/12.png')},
    { id: '1', src: require('../../assets/images/Gallery/1.png')},

    { id: '1', src: require('../../assets/images/Gallery/1.png')},
    { id: '1', src: require('../../assets/images/Gallery/2.png')},
    { id: '1', src: require('../../assets/images/Gallery/4.png')},
    { id: '1', src: require('../../assets/images/Gallery/8.png')},
    { id: '1', src: require('../../assets/images/Gallery/9.png')},
    { id: '1', src: require('../../assets/images/Gallery/11.png')},
    // Add more items as needed
  ];

export default function PhotoLibrary() {

    const renderItem = ({ item }) => (
        <View style={styles.imageContainer}>
          <Image source={item.src } style={styles.image} />
        </View>
      );
  return (
    <View>
  <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      numColumns={3}
      contentContainerStyle={styles.container}
    />
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
      padding: 10,
    },
    imageContainer: {
      flex: 1,
      margin: 5,
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      width: 100,
      height: 86,
    },
  });
  