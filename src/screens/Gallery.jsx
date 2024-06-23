import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import themeStyle from '../styles/themeStyle'
import { ROUTES } from '../routes/RoutesConstants';







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

export default function Gallery({navigation}) {
    const renderItem = ({ item }) => (
        <View style={styles.imageContainer}>
          <Image source={item.src } style={styles.image} />
        </View>
      );
  return (
    <View style={{flex:1}}>
 <View style={{height:75,width:'90%',alignSelf:'center',borderWidth:0.5,borderColor:themeStyle.PRIMARY_LIGHT,borderRadius:5,marginTop:'8%'}}>
 <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:'2%',marginHorizontal:'5%'}}>
<Image resizeMode='contain' style={{height:29,width:19}} source={require('../../assets/images/Gallery/cross.png')}/>

<Image resizeMode='contain' style={{height:30,width:90,right:50}} source={require('../../assets/images/Gallery/upload.png')}/>
<View style={{flexDirection:'row',alignItems:'center'}}>
<Image resizeMode='contain' style={{height:21,width:25,right:10}} source={require('../../assets/images/home/settings.png')}/>
<Image resizeMode='contain' style={{height:21,width:25}} source={require('../../assets/images/Gallery/camera.png')}/>
</View>
    </View>

    <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:"5%",marginTop:'4%'}}>
<Image resizeMode='contain' style={{height:19,width:61}} source={require('../../assets/images/Gallery/gallery.png')}/>
<TouchableOpacity onPress={()=>navigation.navigate(ROUTES.Album)}>
<Image  resizeMode='contain' style={{height:22,width:108}} source={require('../../assets/images/Gallery/multiple.png')}/>

</TouchableOpacity>

    </View>
 </View>


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
  