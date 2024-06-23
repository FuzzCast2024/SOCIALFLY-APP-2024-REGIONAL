import React, { useRef } from 'react';
import { View, Image, TouchableOpacity, StyleSheet, FlatList, Text, ImageBackground } from 'react-native';
import SwiperFlatList from 'react-native-swiper-flatlist';
import { CustomTextRegular, CustomTextSemiBold } from '../components/CustomText';
import themeStyle from '../styles/themeStyle';
import LinearGradient from 'react-native-linear-gradient';

const data = [
    { id: '1', image: require('../../assets/images/Live/s1.png'), text: 'Robertson' ,views:100,nearby:'143mi'},
    { id: '2', image: require('../../assets/images/Live/s2.png'), text: 'Kathryn',views:100 ,nearby:'143mi'},
    { id: '3', image: require('../../assets/images/Live/s3.png'), text: 'Andy salo',views:100,nearby:'143mi' },
    { id: '4', image: require('../../assets/images/Live/s4.png'), text: 'Jenny Wilson' ,views:100,nearby:'143mi'},
    { id: '1', image: require('../../assets/images/Live/s1.png'), text: 'Robertson' ,views:100,nearby:'143mi'},
    { id: '2', image: require('../../assets/images/Live/s2.png'), text: 'Kathryn',views:100 ,nearby:'143mi'},
    { id: '3', image: require('../../assets/images/Live/s3.png'), text: 'Andy salo',views:100,nearby:'143mi' },
    { id: '4', image: require('../../assets/images/Live/s4.png'), text: 'Jenny Wilson' ,views:100,nearby:'143mi'},
    { id: '1', image: require('../../assets/images/Live/s1.png'), text: 'Robertson' ,views:100,nearby:'143mi'},
    { id: '2', image: require('../../assets/images/Live/s2.png'), text: 'Kathryn',views:100 ,nearby:'143mi'},
    { id: '3', image: require('../../assets/images/Live/s3.png'), text: 'Andy salo',views:100,nearby:'143mi' },
    { id: '4', image: require('../../assets/images/Live/s4.png'), text: 'Jenny Wilson' ,views:100,nearby:'143mi'},
  ];


const NearbyLive = () => {
  const swiperRef = useRef(null);


  const images = [
    { id: 1, src: require('../../assets/images/Live/banner.png') },
    { id: 1, src: require('../../assets/images/Live/banner.png') },
    { id: 1, src: require('../../assets/images/Live/banner.png') },
    { id: 1, src: require('../../assets/images/Live/banner.png') },


  ];

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.scrollToIndex({
        index: Math.max(swiperRef.current.getCurrentIndex() - 1, 0),
        animated: true,
      });
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.scrollToIndex({
        index: Math.min(swiperRef.current.getCurrentIndex() + 1, images.length - 1),
        animated: true,
      });
    }
  };

  const renderItem = ({ item }) => (
 <TouchableOpacity>
 <ImageBackground
 imageStyle={{borderRadius:10}}
 source={item.image}
    style={{height:135,width:165,marginRight:5,marginTop:5}}
    >
<View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginHorizontal:'5%'}}>
<View style={{height:12,width:40,flexDirection:"row",borderWidth:1,borderColor:themeStyle.WHITE,borderRadius:2,marginTop:5,alignItems:"center"}}>
<Image resizeMode='contain' style={{height:7,width:10,marginLeft:2}} source={require('../../assets/images/Live/eye.png')}/>
<CustomTextRegular style={{color:themeStyle.WHITE,marginLeft:5}} fontSize={7}>
    {item.views}
</CustomTextRegular>
</View>
<View style={{height:12,width:40,flexDirection:"row",borderWidth:1,borderColor:themeStyle.WHITE,borderRadius:2,marginTop:5,alignItems:"center"}}>
<Image resizeMode='contain' style={{height:7,width:10,marginLeft:2}} source={require('../../assets/images/Live/nearby.png')}/>
<CustomTextRegular style={{color:themeStyle.WHITE,marginLeft:1}} fontSize={7}>
    {item.nearby}
</CustomTextRegular>
</View>
</View>

<CustomTextRegular style={{color:themeStyle.WHITE,alignSelf:"center",marginTop:"55%"}} fontSize={12}>
    {item.text}
</CustomTextRegular>
    </ImageBackground>
 </TouchableOpacity>
  );


  return (
 <View style={{flex:1}}>
       <View style={styles.container}>
      <TouchableOpacity style={styles.arrowLeft} onPress={handlePrev}>
        <Image source={require('../../assets/images/Live/arrowleft.png')} style={styles.arrow} />
      </TouchableOpacity>

      <SwiperFlatList
        ref={swiperRef}
        data={images}
        renderItem={({ item }) => (
          <View style={styles.child}>
            <Image source={item.src } style={styles.image} />
          </View>
        )}
        showPagination={false}
      />

      <TouchableOpacity style={styles.arrowRight} onPress={handleNext}>
        <Image source={require('../../assets/images/Live/arrowright.png')} style={styles.arrow} />
      </TouchableOpacity>
    </View>

  

    <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={{alignSelf:'center',marginTop:'5%'}}
      />







 </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  child: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 361,
    height: 106,
  },
  image: {
    width: 361,
    height: 106,
  },
  arrow: {
    width: 32,
    height: 32,
  },
  arrowLeft: {
    position: 'absolute',
    left: 10,
    zIndex: 1,
  },
  arrowRight: {
    position: 'absolute',
    right: 10,
    zIndex: 1,
  },
});

export default NearbyLive;
