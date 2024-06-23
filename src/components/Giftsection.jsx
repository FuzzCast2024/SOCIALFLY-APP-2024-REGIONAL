import { View, Text, FlatList, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import themeStyle from '../styles/themeStyle';
import { CustomTextRegular } from './CustomText';

const data = [
    { id: '1', src: require('../../assets/images/Gifts/1.png'),

    price:100

    },
    { id: '1', src: require('../../assets/images/Gifts/2.png') , price:100},
    { id: '2', src: require('../../assets/images/Gifts/4.png'), price:100},
    { id: '3', src: require('../../assets/images/Gifts/5.png'), price:100},
    { id: '4', src: require('../../assets/images/Gifts/6.png'), price:100},
    { id: '5', src: require('../../assets/images/Gifts/7.png'), price:100},    
    { id: '6', src: require('../../assets/images/Gifts/8.png'), price:100},
    { id: '7', src: require('../../assets/images/Gifts/9.png'), price:100},
    { id: '8', src: require('../../assets/images/Gifts/11.png'), price:100},
    { id: '9', src: require('../../assets/images/Gifts/12.png'), price:100},
    { id: '10', src: require('../../assets/images/Gifts/1.png'), price:100},
    { id: '11', src: require('../../assets/images/Gifts/11.png'), price:100},
    { id: '12', src: require('../../assets/images/Gifts/12.png'), price:100},
    { id: '13', src: require('../../assets/images/Gifts/13.png'), price:100},
    { id: '14', src: require('../../assets/images/Gifts/14.png'), price:100},
    { id: '15', src: require('../../assets/images/Gifts/15.png'), price:100},
    { id: '16', src: require('../../assets/images/Gifts/16.png'), price:100},
    { id: '17', src: require('../../assets/images/Gifts/17.png'), price:100},
    { id: '18', src: require('../../assets/images/Gifts/18.png'), price:100},
    { id: '19', src: require('../../assets/images/Gifts/10.png'), price:100},
  ];

export default function Giftsection() {
  const [selected, setSelected] = useState(1);
    const renderItem = ({ item ,index}) => (
      <TouchableOpacity
      style={[styles.imageContainer, { borderWidth: selected === index ? 2 : 0,borderColor:themeStyle.PRIMARY_COLOR }]}
      onPress={() => setSelected(index)}
    >
          <Image resizeMode='contain' source={item.src } style={styles.image} />
          <View style={{flexDirection:'row',alignItems:'center',marginTop:'5%'}}>
<Image resizeMode='contain' style={{height:18,width:18}} source={require('../../assets/images/Gifts/coin.png')}/>
<CustomTextRegular marginLeft={'5%'} fontSize={10}>
100
</CustomTextRegular>
          </View>
        </TouchableOpacity>
      );
  return (
    <View>
      <ScrollView>

  <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      numColumns={5}
      contentContainerStyle={styles.container}
    />
    <View style={{height:150}}/>
    </ScrollView>

    </View>
  )
}


const styles = StyleSheet.create({
    container: {
      padding: 10,
    },
    imageContainer: {
height:80,width:62,
backgroundColor:themeStyle.WHITE,
marginLeft:'1%',
marginTop:10,
alignItems:'center',justifyContent:"center",
borderRadius:5
    },
    image: {
      width: 39,
      height: 39,
    },
  });
  