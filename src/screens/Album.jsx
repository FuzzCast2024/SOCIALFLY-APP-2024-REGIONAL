import { View, Text, Image, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import themeStyle from '../styles/themeStyle'
import { CustomTextRegular } from '../components/CustomText';







const data = [
    { id: '1', 
      text:'Recents',
      number:1539,
      src: require('../../assets/images/Gallery/1.png')},
    { id: '2', 
      text:'videos',
      number:1539,
      src: require('../../assets/images/Gallery/2.png')},
    { id: '4',
      text:'Whatapp i..',
      number:1539,
      src: require('../../assets/images/Gallery/4.png')},
    { id: '3',
      text:'Photos',
      number:1539,
      src: require('../../assets/images/Gallery/5.png')},
    { id: '5',
      text:'Instagram',
      number:1539,
      src: require('../../assets/images/Gallery/6.png')},
    { id: '7', 
      text:'Screenshots',
      number:1539,
      src: require('../../assets/images/Gallery/7.png')},    


    // Add more items as needed
  ];

export default function Album() {
    const renderItem = ({ item }) => (
        <View style={styles.imageContainer}>
          <Image source={item.src } style={styles.image} />
          <CustomTextRegular style={{color:themeStyle.PRIMARY_LIGHT}}>{item.text}</CustomTextRegular>
          <CustomTextRegular style={{color:themeStyle.BLACK}}>{item.number}</CustomTextRegular>

        </View>
      );
  return (
    <View style={{flex:1}}>
 <View style={{height:48,width:'90%',alignSelf:'center',borderWidth:0.5,borderColor:themeStyle.PRIMARY_LIGHT,borderRadius:5,marginTop:'8%'}}>
 <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:'2%',marginHorizontal:'5%'}}>
<Image resizeMode='contain' style={{height:29,width:19}} source={require('../../assets/images/Gallery/cross.png')}/>
<Image resizeMode='contain' style={{height:30,width:90,right:160}} source={require('../../assets/images/Albums/album.png')}/>
    </View>


 </View>

<View style={{flexDirection:'row',alignItems:'center',marginLeft:"5%",marginTop:"5%"}}>
<View style={{alignItems:'center'}}> 
  <Image resizeMode='contain' style={{height:43,width:43}} source={require('../../assets/images/Albums/play.png')}/>
 <CustomTextRegular fontSize={10}>
 Recent
 </CustomTextRegular>
</View>

<View style={{alignItems:'center',marginLeft:10}}> 
  <Image resizeMode='contain' style={{height:43,width:43}} source={require('../../assets/images/Albums/gallery.png')}/>
 <CustomTextRegular fontSize={10}>
 Photos
 </CustomTextRegular>
</View>

<View style={{alignItems:'center',marginLeft:10}}> 
  <Image resizeMode='contain' style={{height:43,width:43,}} source={require('../../assets/images/Albums/gallery.png')}/>
 <CustomTextRegular fontSize={10}>
 Videos
 </CustomTextRegular>
</View>
</View>

<View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:"5%",marginTop:"5%"}}>
<CustomTextRegular>
Albums
</CustomTextRegular>
<CustomTextRegular style={{color:themeStyle.PRIMARY_COLOR}}>
See all
</CustomTextRegular>
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
  