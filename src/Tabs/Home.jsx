import { View, Text, TouchableOpacity, ImageBackground, FlatList, StyleSheet, ScrollView, TextInput } from 'react-native'
import React, { useRef, useState } from 'react'
import { Image } from 'react-native-animatable'
import LinearGradient from 'react-native-linear-gradient'
import { CustomTextRegular, CustomTextSemiBold } from '../components/CustomText'
import themeStyle, { FONT } from '../styles/themeStyle'
import MapView, { Marker } from 'react-native-maps'
import { useNavigation } from '@react-navigation/native'
import { ROUTES } from '../routes/RoutesConstants'
import RBSheet from 'react-native-raw-bottom-sheet';
import Timeline from '../components/Timeline'
import PhotoLibrary from '../components/PhotoLibrary'
import MoreInfo from '../components/MoreInfo'
import Giftsection from '../components/Giftsection'
import Comment from '../components/Comments'
const data = [
    { id: '1', image: require('../../assets/images/home/man1.png'), text: 'Robertson' },
    { id: '1', image: require('../../assets/images/home/man2.png'), text: 'Kathryn' },
    { id: '1', image: require('../../assets/images/home/man3.png'), text: 'Andy salo' },
    { id: '1', image: require('../../assets/images/home/man4.png'), text: 'Jenny Wilson' },
  ];


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

  const Comments = [
    { id: '1', image: require('../../assets/images/home/man1.png'),
    name: 'Jenny Wilson',
    postImage:null,
posttext:'GOOD MORNING!!!!!',
tags :'#GOODVIBES #STRONGPEOPLE #BLESSGOD',
like:0,
reply:0,
views:10,
time:'1 hour ago',

},

  ];




export default function Home() {

  const [selectedButton, setSelectedButton] = useState('POPULAR');

  const buttons = [
    { label: 'POPULAR' },
    { label: 'EXCLUSIVE' },
    { label: 'SPECIAL' },
    { label: 'BONUS GIFTS' },
  ];


  const renderSelectedComponent = () => {
    switch (selectedButton) {
      case 'POPULAR':
        return <Giftsection/>;
      case 'EXCLUSIVE':
        return <Giftsection/>;
      case 'SPECIAL':
        return <Giftsection/>;
      case 'BONUS GIFTS':
        return <Giftsection/>;
      default:
        return null;
    }
  };


  const navigation = useNavigation()
  const refRBSheet = useRef();
  const refRBSheet2 = useRef();
  const refRBSheet3 = useRef();


    const renderItem = ({ item }) => (
        <View style={styles.box}>
          <Image source={item.image} style={styles.image} />
          <Text style={styles.text}>{item.text}</Text>
        </View>
      );

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
    
    
    <TouchableOpacity onPress={() => refRBSheet3.current.open()} style={{flexDirection:'row',alignItems:'center'}}>
        <Image resizeMode='contain' style={{height:9,width:10}} source={require('../../assets/images/home/comment.png')}/>
        <Text style={{fontSize:10,color:themeStyle.WHITE,fontFamily:FONT.Montserrat_SemiBold}} >  {item.comments} Comments</Text>
    </TouchableOpacity>
    <Image style={{height:11,width:1}} source={require('../../assets/images/home/whiteline.png')}/>
    
    
    <TouchableOpacity onPress={() => refRBSheet.current.open()}  style={{flexDirection:'row',alignItems:'center'}}>
        <Image resizeMode='contain' style={{height:9,width:10}} source={require('../../assets/images/home/gift.png')}/>
        <Text style={{fontSize:10,color:themeStyle.WHITE,fontFamily:FONT.Montserrat_SemiBold}} >  {item.gift} Gift</Text>
    </TouchableOpacity>
    <Image style={{height:11,width:1}} source={require('../../assets/images/home/whiteline.png')}/>
    
    
    <TouchableOpacity onPress={() => refRBSheet2.current.open()} style={{flexDirection:'row',alignItems:'center'}}>
        <Image resizeMode='contain' style={{height:9,width:10}} source={require('../../assets/images/home/share.png')}/>
        <Text style={{fontSize:10,color:themeStyle.WHITE,fontFamily:FONT.Montserrat_SemiBold}} >  {item.shares}  Shares</Text>
    </TouchableOpacity>
    
    </LinearGradient>
       
        </View>
      );
  return (
    <View style={{flex:1}}>
        <ScrollView>

    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:'5%',marginHorizontal:'5%'}}>
<Image resizeMode='contain' style={{height:24,width:84}} source={require('../../assets/images/home/Sociafly.png')}/>
<View style={{flexDirection:'row',alignItems:'center'}}>
<Image resizeMode='contain' style={{height:21,width:25,right:10}} source={require('../../assets/images/home/bars.png')}/>
<TouchableOpacity onPress={()=>navigation.navigate(ROUTES.Setting)}>
<Image resizeMode='contain' style={{height:21,width:25}} source={require('../../assets/images/home/settings.png')}/>

</TouchableOpacity>
</View>
    </View>


<View>
<ScrollView showsHorizontalScrollIndicator={false} contentContainerStyle={{flexDirection:'row',alignItems:'center',marginLeft:'5%',marginTop:'8%',height:100}}  horizontal style={{}}>
<TouchableOpacity >
<View style={{}}>
<LinearGradient
style={{height:74,width:63,borderRadius:5,alignItems:'center',justifyContent:'center'}}
colors={['#49C0D8','#2F5CA4']}
>
<ImageBackground imageStyle={{borderRadius:100}} style={{height:35,width:35}} source={require('../../assets/images/home/me.png')}>
<Image style={{height:14,width:14,position:'absolute',bottom:0,right:0}} source={require('../../assets/images/home/plus.png')}/>
</ImageBackground>
<CustomTextRegular style={{marginTop:'5%',color:themeStyle.WHITE}} fontSize={10}>
Your story
</CustomTextRegular>
</LinearGradient>


</View>
    </TouchableOpacity>

    <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      <View style={{width:50}}/>
</ScrollView>

</View>

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

<View>

<FlatList
        data={Posts}
        renderItem={renderPostItem}
        keyExtractor={(item) => item.id}
      />
</View>
<View style={{height:100}}/>
</ScrollView>
<RBSheet
height={400}
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        customStyles={{
          wrapper: {
            backgroundColor: "rgba(0,0,0,0.5)"
          },
          draggableIcon: {
            backgroundColor: "#000"
          }
        }}
      >
   <LinearGradient
   style={{height:'100%'}}
   colors={['#49C0D8','#2F5CA4']}
   >

<LinearGradient
   style={{height:35,marginTop:'5%',flexDirection:'row',alignItems:'center'}}
   colors={['#56A8B8','#2F5CA4']}
   >
<CustomTextRegular marginLeft={'5%'}  color={themeStyle.WHITE} fontSize={10}>
AVAILABLE CREDITS :
</CustomTextRegular>
<Image resizeMode='contain' style={{height:14,width:16,marginLeft:'2%'}} source={require('../../assets/images/Gifts/dollar.png')}/>

<CustomTextRegular marginLeft={'2%'}  color={themeStyle.WHITE} fontSize={10}>
5000
</CustomTextRegular>

<TouchableOpacity style={{height:25,width:72,backgroundColor:themeStyle.WHITE,alignItems:'center',justifyContent:'center',borderWidth:1,borderColor:themeStyle.PRIMARY_COLOR,borderRadius:2,marginLeft:"5%"}}>
<CustomTextRegular marginLeft={'2%'}  color={themeStyle.PRIMARY_COLOR} fontSize={8}>
EARN CREDITS
</CustomTextRegular>
</TouchableOpacity>


<TouchableOpacity style={{height:25,width:72,backgroundColor:themeStyle.WHITE,alignItems:'center',justifyContent:'center',borderWidth:1,borderColor:themeStyle.PRIMARY_COLOR,borderRadius:2,marginLeft:"2%"}}>
<CustomTextRegular marginLeft={'2%'}  color={themeStyle.PRIMARY_COLOR} fontSize={8}>
BUY CREDITS
</CustomTextRegular>
</TouchableOpacity>
   </LinearGradient>

   <View style={{ flexDirection: 'row', alignItems: 'center',marginTop: '5%',alignSelf:"center" }}>
        {buttons.map((button, index) => (
          <TouchableOpacity key={index} style={{ height: 33, width: 73, marginLeft: 8 }} onPress={() => setSelectedButton(button.label)}>
            <LinearGradient
              style={{ height: 33, width: 73, borderRadius: 5, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}
              colors={selectedButton === button.label ? ['#ffff', '#ffff'] : ['#49C0D8', '#2F5CA4'] }
            >
              <Text style={{ fontSize: 8 ,color: selectedButton === button.label ? themeStyle.PRIMARY_COLOR : themeStyle.WHITE,fontFamily:FONT.Montserrat_SemiBold}}>
                {button.label}
              </Text>
            </LinearGradient>
            {
              selectedButton ===  button.label &&(
                <Image resizeMode='contain' style={{height:7,width:66,alignSelf:'center',marginTop:5}} source={require('../../assets/images/Gifts/whiteline.png')}/>
              )
            }
          </TouchableOpacity>
        ))}
      </View>
      <View style={{ marginTop: 20, marginLeft: "2%" }}>
        {renderSelectedComponent()}
      </View>

   </LinearGradient>
      </RBSheet>


      <RBSheet
height={500}
        ref={refRBSheet2}
        closeOnDragDown={true}
        closeOnPressMask={true}
        customStyles={{
          wrapper: {
            backgroundColor: "rgba(0,0,0,0.5)"
          },
          draggableIcon: {
            backgroundColor: "#000"
          }
        }}
      >
   <LinearGradient
   style={{height:'100%'}}
   colors={['#49C0D8','#2F5CA4']}
   >

<View style={{height:142,width:342,backgroundColor:themeStyle.WHITE,alignSelf:'center',marginTop:'8%'}}>
<View style={{flexDirection:'row',alignItems:'center',marginLeft:"2%"}}>
<Image style={{height:45,width:45,top:15}} source={require('../../assets/images/userProfie/dp.png')}/>
<CustomTextSemiBold style={{color:themeStyle.PRIMARY_COLOR,marginLeft:'3%'}} fontSize={14}>
Jenny Wilson
</CustomTextSemiBold>

</View>
<View style={{flexDirection:'row',alignItems:"center",justifyContent:'space-between',marginHorizontal:'15%',left:10,bottom:5}}>
<LinearGradient style={{height:26,width:112,alignItems:'center',justifyContent:'center',flexDirection:"row"}} colors={['#49C0D8','#2F5CA4']}>
  <Image style={{height:22,width:12}} source={require('../../assets/images/comments/privacy.png')}/>
<CustomTextRegular style={{color:themeStyle.WHITE,marginLeft:'5%',borderRadius:5}} fontSize={8}>
CHOOSE PRIVACY
</CustomTextRegular>
</LinearGradient>

<LinearGradient style={{height:26,width:112,alignItems:'center',justifyContent:'center',flexDirection:"row"}} colors={['#49C0D8','#2F5CA4']}>
<CustomTextRegular style={{color:themeStyle.WHITE,marginLeft:'5%',borderRadius:5}} fontSize={8}>
SHARE TO
</CustomTextRegular>
<Image resizeMode='contain' style={{height:22,width:12,marginLeft:'5%'}} source={require('../../assets/images/comments/down.png')}/>

</LinearGradient>

</View>
<TextInput placeholderTextColor={themeStyle.GREY} style={{fontFamily:FONT.Montserrat_Regular,paddingLeft:20,bottom:5}} placeholder='SAY SOMETHING ABOUT THIS'/>

<LinearGradient style={{height:26,width:112,alignItems:'center',justifyContent:'center',flexDirection:"row",bottom:10,marginLeft:'auto',marginRight:"5%",borderRadius:5}} colors={['#49C0D8','#2F5CA4']}>
<CustomTextRegular style={{color:themeStyle.WHITE,marginLeft:'5%',borderRadius:5}} fontSize={8}>
SHARE NOW
</CustomTextRegular>

</LinearGradient>
</View>


<CustomTextRegular marginLeft={'5%'} marginTop={'5%'} color={themeStyle.WHITE}>
SEND TO MESSAGES
</CustomTextRegular>

<View style={{flexDirection:'row',alignItems:"center",justifyContent:'space-evenly',marginTop:"5%",marginHorizontal:'5%'}}>
<View style={{alignItems:"center",width:"20%"}}>
  <Image style={{height:46,width:46}} source={require('../../assets/images/userProfie/dp.png')}/>
  <CustomTextSemiBold fontSize={11}>
  Jenny Wilson
  </CustomTextSemiBold>
</View>

<View style={{alignItems:"center",width:"20%"}}>
  <Image style={{height:46,width:46}} source={require('../../assets/images/userProfie/dp.png')}/>
  <CustomTextSemiBold fontSize={11}>
  Jenny Wilson
  </CustomTextSemiBold>
</View>

<View style={{alignItems:"center",width:"20%"}}>
  <Image style={{height:46,width:46}} source={require('../../assets/images/userProfie/dp.png')}/>
  <CustomTextSemiBold fontSize={11}>
  Jenny Wilson
  </CustomTextSemiBold>
</View>

<View style={{alignItems:"center",width:"20%"}}>
  <Image style={{height:46,width:46}} source={require('../../assets/images/userProfie/dp.png')}/>
  <CustomTextSemiBold fontSize={11}>
  Jenny Wilson
  </CustomTextSemiBold>
</View>

<View style={{alignItems:"center",width:"20%"}}>
  <Image style={{height:46,width:46}} source={require('../../assets/images/userProfie/dp.png')}/>
  <CustomTextSemiBold fontSize={11}>
  Jenny Wilson
  </CustomTextSemiBold>
</View>
</View>


<CustomTextRegular marginLeft={'5%'} marginTop={'5%'} color={themeStyle.WHITE}>
SHARE TO:
</CustomTextRegular>

<View style={{flexDirection:'row',alignItems:"center",justifyContent:'space-evenly',marginTop:"5%",marginHorizontal:'5%'}}>
<View style={{alignItems:"center",width:"20%"}}>
  <Image style={{height:46,width:46}} source={require('../../assets/images/comments/email.png')}/>
  <CustomTextSemiBold fontSize={11}>
  EMAIL
  </CustomTextSemiBold>
</View>

<View style={{alignItems:"center",width:"20%"}}>
  <Image style={{height:46,width:46}} source={require('../../assets/images/comments/fb.png')}/>
  <CustomTextSemiBold fontSize={9}>
  FACEBOOK
  </CustomTextSemiBold>
</View>

<View style={{alignItems:"center",width:"20%"}}>
  <Image style={{height:46,width:46}} source={require('../../assets/images/comments/whatsap.png')}/>
  <CustomTextSemiBold fontSize={9}>
  WHATSAPP
  </CustomTextSemiBold>
</View>

<View style={{alignItems:"center",width:"20%"}}>
  <Image style={{height:46,width:46}} source={require('../../assets/images/comments/message.png')}/>
  <CustomTextSemiBold fontSize={11}>
  SMS
  </CustomTextSemiBold>
</View>

<View style={{alignItems:"center",width:"20%"}}>
  <Image style={{height:46,width:46}} source={require('../../assets/images/comments/link.png')}/>
  <CustomTextSemiBold fontSize={11}>
  OTHER
  </CustomTextSemiBold>
</View>
</View>
   </LinearGradient>
      </RBSheet>




      <RBSheet
height={700}
        ref={refRBSheet3}
        closeOnDragDown={true}
        closeOnPressMask={true}
        customStyles={{
          wrapper: {
            backgroundColor: "rgba(0,0,0,0.5)"
          },
          draggableIcon: {
            backgroundColor: "#000"
          }
        }}
      >
<View style={{flex:1}}>
<View style={{flexDirection:'row',alignItems:'center',margin:'5%'}}>
<TouchableOpacity onPress={() => refRBSheet3.current.close()}>
   <Image style={{height:31,width:31}} source={require('../../assets/images/Mind/back.png')}/>
</TouchableOpacity>
<TouchableOpacity style={{height:21,width:105,borderWidth:1,borderColor:themeStyle.PRIMARY_LIGHT,marginLeft:"5%",alignItems:'center',flexDirection:'row'}}>
<CustomTextRegular style={{marginLeft:'5%'}} fontSize={9}>
ALL COMMENTS
</CustomTextRegular>
<Image style={{height:4,width:8,marginLeft:'5%'}} source={require('../../assets/images/Faq/primary.png')}/>
</TouchableOpacity>
</View>
<Comment/>
</View>
      </RBSheet>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    box: {
      height: 74,
      width: 63,
      borderWidth: 1,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius:5,
      borderColor:'#49C0D8',
      marginLeft:10
    },
    image: {
      height: 35,
      width: 35,
      marginBottom: 5,
    },
    text: {
      textAlign: 'center',
      fontSize:8,
      fontFamily:FONT.Montserrat_Regular,
      color:themeStyle.BLACK
    },
    content: {
      flex: 1,
      alignItems: 'center',
      padding: 20
    },
    text2: {
      fontSize: 18
    }
  });