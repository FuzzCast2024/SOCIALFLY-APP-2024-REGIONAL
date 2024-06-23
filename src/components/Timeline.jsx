import { View, Text, TouchableOpacity, ImageBackground, FlatList, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { Image } from 'react-native-animatable'
import LinearGradient from 'react-native-linear-gradient'
import { CustomTextRegular, CustomTextSemiBold } from '../components/CustomText'
import MapView, { Marker } from 'react-native-maps'
import { useNavigation } from '@react-navigation/native'
import themeStyle, { FONT } from '../styles/themeStyle'
import { ROUTES } from '../routes/RoutesConstants'
export default function Timeline() {
const navigation = useNavigation()
    const Posts = [
        { id: '1', image: require('../../assets/images/home/man1.png'),
        name: 'Jenny Wilson',
        postImage:null,
    with:"JOY BIDEN",
    posttext:'HELLO EVERYONE, HOW IS EVERYONE DOING TODAY? I HOPE EVERYONE IS HAVE A GOOD DAY! GOD BLESS EVERYONE! VISIT MY WEBSITE AT: WWW.SOCIALFLY.LIVE',
    tags :'#GOODVIBES #STRONGPEOPLE #BLESSGOD',
    like:0,
    comments:0,
    views:10,
    shares:10,
    time:'1 hour ago',
    gift:10,
    latitude:null,
    longitude:null
    },
    { id: '1', image: require('../../assets/images/home/man1.png'),
        name: 'Jenny Wilson',
        postImage:require('../../assets/images/home/co.png'),
    with:"JOY BIDEN",
    posttext:'HELLO EVERYONE, HOW IS EVERYONE DOING TODAY? I HOPE EVERYONE IS HAVE A GOOD DAY! GOD BLESS EVERYONE! VISIT MY WEBSITE AT: WWW.SOCIALFLY.LIVE',
    tags :'#GOODVIBES #STRONGPEOPLE #BLESSGOD',
    like:0,
    comments:0,
    views:10,
    shares:10,
    time:'1 hour ago',
    gift:1,
    latitude:null,
    longitude:null
    },
    { id: '1', image: require('../../assets/images/home/man4.png'),
        name: 'Jenny Wilson',
        postImage:null,
    with:"JOY BIDEN",
    posttext:null,
    tags :null,
    like:0,
    comments:0,
    views:10,
    shares:10,
    time:'1 hour ago',
    gift:1,
    latitude:37.0902,
    longitude:95.7129
    },
    
    
    { id: '1', image: require('../../assets/images/home/man3.png'),
      name: 'Jenny Wilson',
      postImage:null,
    with:"JOY BIDEN",
    posttext:'HELLO EVERYONE, HOW IS EVERYONE DOING TODAY? I HOPE EVERYONE IS HAVE A GOOD DAY! GOD BLESS EVERYONE! VISIT MY WEBSITE AT: WWW.SOCIALFLY.LIVE',
    tags :'#GOODVIBES #STRONGPEOPLE #BLESSGOD',
    like:0,
    comments:0,
    views:10,
    shares:10,
    time:'1 hour ago',
    gift:10,
    latitude:null,
    longitude:null
    },
    { id: '1', image: require('../../assets/images/home/man2.png'),
      name: 'Jenny Wilson',
      postImage:require('../../assets/images/home/unnamed.png'),
    with:"JOY BIDEN",
    posttext:'HELLO EVERYONE, HOW IS EVERYONE DOING TODAY? I HOPE EVERYONE IS HAVE A GOOD DAY! GOD BLESS EVERYONE! VISIT MY WEBSITE AT: WWW.SOCIALFLY.LIVE',
    tags :'#GOODVIBES #STRONGPEOPLE #BLESSGOD',
    like:0,
    comments:0,
    views:10,
    shares:10,
    time:'1 hour ago',
    gift:1,
    latitude:null,
    longitude:null
    },
    { id: '1', image: require('../../assets/images/home/man2.png'),
      name: 'Jenny Wilson',
      postImage:null,
    with:"JOY BIDEN",
    posttext:null,
    tags :null,
    like:0,
    comments:0,
    views:10,
    shares:10,
    time:'1 hour ago',
    gift:1,
    latitude:37.0902,
    longitude:95.7129
    },
      ];
    
    
      const renderPostItem = ({ item }) => (
        <View style={{padding:10,marginHorizontal:'5%',marginTop:'5%'}}>
       <View style={{flexDirection:'row',alignItems:'center'}}>
    <Image style={{height:33,width:35}} source={item.image}/>
    
    <View>
        <View style={{flexDirection:'row',alignItems:'center',marginLeft:'5%'}}>
    <Text style={{fontSize:11,color:themeStyle.BLACK,fontFamily:FONT.Montserrat_SemiBold}}>{item.name}  </Text>
    <Image  style={{height:8,width:8}} source={require('../../assets/images/home/dotcolor.png')}/>
    <Text style={{fontSize:11,color:themeStyle.BLACK,fontFamily:FONT.Montserrat_SemiBold}}>  with {item.with}</Text>
    
        </View>
    
        <View style={{flexDirection:'row',alignItems:'center',marginLeft:'5%',marginTop:'2%'}}>
    <Image  style={{height:8,width:8}} source={require('../../assets/images/home/watch.png')}/>
    <Text style={{fontSize:8,color:themeStyle.PRIMARY_LIGHT,fontFamily:FONT.Montserrat_Regular}}>  {item.time}</Text>
        </View>
    
     
    </View>
    
    
    
    
    <TouchableOpacity style={{marginLeft:'auto',marginRight:"5%"}}>
            <Image style={{height:11,width:2}} source={require('../../assets/images/home/dots.png')}/>
        </TouchableOpacity>
       </View>
       {
        item?.postImage && (
            <Image style={{height:168,width:311,marginTop:"5%"}} source={item?.postImage}/>
        )
       }
    
     {
        item.posttext && (
            <View style={{width:'100%',borderWidth:0.4,alignSelf:'center',marginTop:'5%',borderRadius:5,padding:10}}>
            <Text style={{fontSize:10,color:themeStyle.BLACK,fontFamily:FONT.Montserrat_Regular,marginLeft:'2%',marginTop:'5%'}} >{item.posttext}</Text>
            
            <Text style={{fontSize:10,color:themeStyle.PRIMARY_LIGHT,fontFamily:FONT.Montserrat_Regular,marginLeft:'2%',marginTop:'10%'}} >{item.tags}</Text>
            
               </View>
        )
     }
    
     {
        item.latitude && (
            <View style={{width:'100%',borderWidth:0.4,alignSelf:'center',marginTop:'5%',borderRadius:5,height:150}}>
    <MapView
     initialRegion={{
        latitude: item.latitude,
        longitude: item.longitude,
        latitudeDelta: 10,
        longitudeDelta: 10,
      }}
    
    style={{height:100,width:'100%'}}>
        <Marker coordinate={{ latitude: item.latitude, longitude: item.longitude }}>
    <Image style={{height:50,width:50}} source={require('../../assets/images/home/mapmarker.png')}/>
        </Marker>
    </MapView>
    <LinearGradient style={{height:50,flexDirection:'row',alignItems:'center'}} colors={['#49C0D8','#2F5CA4']}>
    <Image style={{height:32,width:32,marginLeft:'3%'}} source={require('../../assets/images/home/maploc.png')} />
    <View style={{marginLeft:'3%'}}>
        <Text  style={{fontSize:10,color:themeStyle.WHITE,fontFamily:FONT.Montserrat_SemiBold}}>LOCAL BUSINESS</Text>
        <Text  style={{fontSize:8,color:themeStyle.WHITE,fontFamily:FONT.Montserrat_SemiBold}}>MCDONALDS,</Text>
    </View>
    <Text  style={{fontSize:8,color:themeStyle.WHITE,fontFamily:FONT.Montserrat_Regulars,top:15}}>1657 MAIN ST, OSHKOSH, WI, 54902, USA</Text>
    
    </LinearGradient>
            </View>
        )
     }
    
     <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-evenly',marginTop:'5%'}}>
    <Text style={{fontSize:10,color:themeStyle.BLACK,fontFamily:FONT.Montserrat_Regular}}>{item.like} likes</Text>
    <Image style={{height:11,width:1}} source={require('../../assets/images/home/blackline.png')}/>
    <Text style={{fontSize:10,color:themeStyle.BLACK,fontFamily:FONT.Montserrat_Regular}}>{item.comments} Comments</Text>
    <Image style={{height:11,width:1}} source={require('../../assets/images/home/blackline.png')}/>
    <Text style={{fontSize:10,color:themeStyle.BLACK,fontFamily:FONT.Montserrat_Regular}}>{item.views} views</Text>
    <Image style={{height:11,width:1}} source={require('../../assets/images/home/blackline.png')}/>
    <Text style={{fontSize:10,color:themeStyle.BLACK,fontFamily:FONT.Montserrat_Regular}}>{item.shares} Shares</Text>
    <Image resizeMode='contain' style={{height:18,width:14}} source={require('../../assets/images/home/save.png')}/>
     </View>
    
    
     <LinearGradient
    style={{height:30,width:'100%',borderRadius:5,alignItems:'center',justifyContent:'center',alignSelf:'center',marginTop:'6%',flexDirection:'row',justifyContent:'space-evenly'}}
    colors={['#49C0D8','#2F5CA4']}
    >
    <View style={{flexDirection:'row',alignItems:'center'}}>
        <Image resizeMode='contain' style={{height:9,width:10}} source={require('../../assets/images/home/heart.png')}/>
        <Text style={{fontSize:10,color:themeStyle.WHITE,fontFamily:FONT.Montserrat_SemiBold}} >  {item.like} likes</Text>
    </View>
    <Image style={{height:11,width:1}} source={require('../../assets/images/home/whiteline.png')}/>
    
    
    <View style={{flexDirection:'row',alignItems:'center'}}>
        <Image resizeMode='contain' style={{height:9,width:10}} source={require('../../assets/images/home/comment.png')}/>
        <Text style={{fontSize:10,color:themeStyle.WHITE,fontFamily:FONT.Montserrat_SemiBold}} >  {item.comments} Comments</Text>
    </View>
    <Image style={{height:11,width:1}} source={require('../../assets/images/home/whiteline.png')}/>
    
    
    <View style={{flexDirection:'row',alignItems:'center'}}>
        <Image resizeMode='contain' style={{height:9,width:10}} source={require('../../assets/images/home/gift.png')}/>
        <Text style={{fontSize:10,color:themeStyle.WHITE,fontFamily:FONT.Montserrat_SemiBold}} >  {item.gift} Gift</Text>
    </View>
    <Image style={{height:11,width:1}} source={require('../../assets/images/home/whiteline.png')}/>
    
    
    <View style={{flexDirection:'row',alignItems:'center'}}>
        <Image resizeMode='contain' style={{height:9,width:10}} source={require('../../assets/images/home/share.png')}/>
        <Text style={{fontSize:10,color:themeStyle.WHITE,fontFamily:FONT.Montserrat_SemiBold}} >  {item.shares}  Shares</Text>
    </View>
    
    </LinearGradient>
       
        </View>
      );
    
  return (
    <View>
        
<View style={{height:48,width:'90%',alignSelf:'center',borderWidth:0.5,borderColor:themeStyle.PRIMARY_LIGHT,alignSelf:'center',alignItems:'center',flexDirection:'row',marginTop:'5%',borderRadius:5}}>
<Image style={{height:32,width:32,marginLeft:'3%'}} source={require('../../assets/images/home/me.png')}/>

<TouchableOpacity onPress={()=>navigation.navigate(ROUTES.Createpost)} >
<LinearGradient
style={{height:29,width:186,borderRadius:5,alignItems:'center',justifyContent:'center',marginLeft:'5%'}}
colors={['#49C0D8','#2F5CA4']}
>
<CustomTextSemiBold fontSize={10}>
Whats on your mind?
</CustomTextSemiBold>
</LinearGradient>
</TouchableOpacity>

<TouchableOpacity onPress={()=>navigation.navigate(ROUTES.Gallery)}  style={{marginLeft:'3%'}}>
    <Image style={{height:19,width:22}} source={require('../../assets/images/home/gallery.png')}/>
</TouchableOpacity>
<TouchableOpacity style={{marginLeft:'3%'}}>
    <Image style={{height:19,width:22}} source={require('../../assets/images/home/camera.png')}/>
</TouchableOpacity>
</View>
  <FlatList
        data={Posts}
        renderItem={renderPostItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}