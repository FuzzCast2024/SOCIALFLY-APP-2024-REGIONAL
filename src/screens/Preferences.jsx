import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import themeStyle, { FONT } from '../styles/themeStyle'
import { CustomTextRegular, CustomTextSemiBold } from '../components/CustomText';
import Sound from 'react-native-sound';
import LinearGradient from 'react-native-linear-gradient';
import FeelingGallery from '../components/FeelingGallery';
import PhotoLibrary from '../components/PhotoLibrary';
import FeelingActivity from '../components/FeelingActivity';
import GlobalButton from '../components/GlobalButton';








export default function Preferences() {

  const [privateAccountButton, setPrivateAccountButton] = useState('ON');
  const [activeStatusButton, setActiveStatusButton] = useState('ON');
  const [photosLibraryButton, setPhotosLibraryButton] = useState('ON');
  const [receiveCallsButton, setReceiveCallsButton] = useState('ON');
  const [friendrequest, setfriendrequest] = useState('ON');
  const [events, setevents] = useState('ON');
  const [calls, setcalls] = useState('ON');
  const [livestream, setlivestream] = useState('ON');





  const buttons = [
    { label: 'ON' },
    { label: 'OFF' },
  ];








  return (
    <View style={{flex:1,backgroundColor:themeStyle.WHITE}}>
      <ScrollView>

 <View style={{height:48,width:'90%',alignSelf:'center',borderWidth:0,borderColor:themeStyle.PRIMARY_LIGHT,borderRadius:5,marginTop:'8%'}}>
 <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:'2%',marginHorizontal:'1%'}}>
<Image resizeMode='contain' style={{height:31,width:31}} source={require('../../assets/images/Promote/left.png')}/>
<Image resizeMode='contain' style={{height:15,width:89,left:7}} source={require('../../assets/images/Security/PREFERENCES.png')}/>
<View style={{height:45,width:171,alignSelf:'center',borderWidth:1,flexDirection:'row',alignItems:'center',borderRadius:5,marginLeft:5}}>
<Image resizeMode='contain' style={{height:16,width:16,marginLeft:'5%'}} source={require('../../assets/images/Music/search.png')}/>
<TextInput style={{fontSize:14,fontFamily:FONT.Montserrat_Regular,width:120,paddingLeft:20,color:themeStyle.BLACK}} placeholderTextColor={themeStyle.GREY} placeholder='Search'/>
 </View>
    </View>


 </View>

 <View>
      <View style={{marginTop: "10%", marginHorizontal: "5%"}}>
        <View style={{flexDirection:'row'}}>
          <CustomTextSemiBold fontSize={11} style={{color: themeStyle.BLACK}}>
          USERS CAN SHARE YOUR POSTS
          </CustomTextSemiBold>
          <View style={{height: 22, width: 114, alignSelf: 'center', borderWidth: 1, flexDirection: 'row', alignItems: 'center', borderRadius: 5, marginLeft: "auto"}}>
          {buttons.map((button, index) => (
            <TouchableOpacity key={index} onPress={() => setPrivateAccountButton(button.label)} style={{width: '50%'}}>
              <LinearGradient
                style={{height: 20, width: 56, borderRadius: 3, alignItems: 'center', justifyContent: "center"}}
                colors={privateAccountButton === button.label ? ['#49C0D8', '#2F5CA4'] : ['white', 'white']}
              >
                <CustomTextRegular style={{color: privateAccountButton === button.label ? themeStyle.WHITE : themeStyle.GREY}}>
                  {button.label}
                </CustomTextRegular>
              </LinearGradient>
            </TouchableOpacity>
          ))}
        </View>
        </View>
        <CustomTextRegular fontSize={9} style={{color: themeStyle.BLACK, width: 220, marginTop: '2%'}}>
          If this is on anyone can share your posts. 
          if this is off only your friends can share your posts
          </CustomTextRegular>
      </View>


      <View style={{marginTop: "10%", marginHorizontal: "5%"}}>
        <View style={{flexDirection:'row'}}>
          <CustomTextSemiBold fontSize={11} style={{color: themeStyle.BLACK}}>
          USERS TAG STATUS
          </CustomTextSemiBold>
          <View style={{height: 22, width: 114, alignSelf: 'center', borderWidth: 1, flexDirection: 'row', alignItems: 'center', borderRadius: 5, marginLeft: "auto"}}>
          {buttons.map((button, index) => (
            <TouchableOpacity key={index} onPress={() => setActiveStatusButton(button.label)} style={{width: '50%'}}>
              <LinearGradient
                style={{height: 20, width: 56, borderRadius: 3, alignItems: 'center', justifyContent: "center"}}
                colors={activeStatusButton === button.label ? ['#49C0D8', '#2F5CA4'] : ['white', 'white']}
              >
                <CustomTextRegular style={{color: activeStatusButton === button.label ? themeStyle.WHITE : themeStyle.GREY}}>
                  {button.label}
                </CustomTextRegular>
              </LinearGradient>
            </TouchableOpacity>
          ))}
        </View>
        </View>
        <CustomTextRegular fontSize={9} style={{color: themeStyle.BLACK, width: 220, marginTop: '2%'}}>
        If you user tag status on anyone can tag 
you in posts and comments. If you have Tag Status off only 
your friends can tag your in the posts.
          </CustomTextRegular>
      </View>

      <CustomTextSemiBold style={{color:themeStyle.PRIMARY_COLOR,marginLeft:"5%",marginTop:'5%'}}>
      NOTIFICATION SETTINGS:
      </CustomTextSemiBold>


      <View style={{marginTop: "10%", marginHorizontal: "5%"}}>
        <View style={{flexDirection:'row'}}>
          <CustomTextSemiBold fontSize={11} style={{color: themeStyle.BLACK}}>
          COMMENTS & SHARES & TAGS
          </CustomTextSemiBold>
          <View style={{height: 22, width: 114, alignSelf: 'center', borderWidth: 1, flexDirection: 'row', alignItems: 'center', borderRadius: 5, marginLeft: "auto"}}>
          {buttons.map((button, index) => (
            <TouchableOpacity key={index} onPress={() => setPhotosLibraryButton(button.label)} style={{width: '50%'}}>
              <LinearGradient
                style={{height: 20, width: 56, borderRadius: 3, alignItems: 'center', justifyContent: "center"}}
                colors={photosLibraryButton === button.label ? ['#49C0D8', '#2F5CA4'] : ['white', 'white']}
              >
                <CustomTextRegular style={{color: photosLibraryButton === button.label ? themeStyle.WHITE : themeStyle.GREY}}>
                  {button.label}
                </CustomTextRegular>
              </LinearGradient>
            </TouchableOpacity>
          ))}
        </View>
        </View>
        <CustomTextRegular fontSize={9} style={{color: themeStyle.BLACK, width: 220, marginTop: '2%'}}>
        If you have comments and shares or Tags 
notifications on you will receive notifications on someone comment on your posts or who share your posts, or Tags
you in a post..
          </CustomTextRegular>
      </View>



      <View style={{marginTop: "10%", marginHorizontal: "5%"}}>
        <View style={{flexDirection:'row'}}>
          <CustomTextSemiBold fontSize={11} style={{color: themeStyle.BLACK}}>
          FRIENDS REQUEST 
          </CustomTextSemiBold>
          <View style={{height: 22, width: 114, alignSelf: 'center', borderWidth: 1, flexDirection: 'row', alignItems: 'center', borderRadius: 5, marginLeft: "auto"}}>
          {buttons.map((button, index) => (
            <TouchableOpacity key={index} onPress={() => setfriendrequest(button.label)} style={{width: '50%'}}>
              <LinearGradient
                style={{height: 20, width: 56, borderRadius: 3, alignItems: 'center', justifyContent: "center"}}
                colors={friendrequest === button.label ? ['#49C0D8', '#2F5CA4'] : ['white', 'white']}
              >
                <CustomTextRegular style={{color: friendrequest === button.label ? themeStyle.WHITE : themeStyle.GREY}}>
                  {button.label}
                </CustomTextRegular>
              </LinearGradient>
            </TouchableOpacity>
          ))}
        </View>
        </View>

      </View>

      <View style={{marginTop: "5%", marginHorizontal: "5%"}}>
        <View style={{flexDirection:'row'}}>
          <CustomTextSemiBold fontSize={11} style={{color: themeStyle.BLACK}}>
          EVENTS ALERTS & REMINDERS
          </CustomTextSemiBold>
          <View style={{height: 22, width: 114, alignSelf: 'center', borderWidth: 1, flexDirection: 'row', alignItems: 'center', borderRadius: 5, marginLeft: "auto"}}>
          {buttons.map((button, index) => (
            <TouchableOpacity key={index} onPress={() => setevents(button.label)} style={{width: '50%'}}>
              <LinearGradient
                style={{height: 20, width: 56, borderRadius: 3, alignItems: 'center', justifyContent: "center"}}
                colors={events === button.label ? ['#49C0D8', '#2F5CA4'] : ['white', 'white']}
              >
                <CustomTextRegular style={{color: events === button.label ? themeStyle.WHITE : themeStyle.GREY}}>
                  {button.label}
                </CustomTextRegular>
              </LinearGradient>
            </TouchableOpacity>
          ))}
        </View>
        </View>

      </View>


      <View style={{marginTop: "5%", marginHorizontal: "5%"}}>
        <View style={{flexDirection:'row'}}>
          <CustomTextSemiBold fontSize={11} style={{color: themeStyle.BLACK}}>
          CALLS & MESSAGES
          </CustomTextSemiBold>
          <View style={{height: 22, width: 114, alignSelf: 'center', borderWidth: 1, flexDirection: 'row', alignItems: 'center', borderRadius: 5, marginLeft: "auto"}}>
          {buttons.map((button, index) => (
            <TouchableOpacity key={index} onPress={() => setcalls(button.label)} style={{width: '50%'}}>
              <LinearGradient
                style={{height: 20, width: 56, borderRadius: 3, alignItems: 'center', justifyContent: "center"}}
                colors={calls === button.label ? ['#49C0D8', '#2F5CA4'] : ['white', 'white']}
              >
                <CustomTextRegular style={{color: calls === button.label ? themeStyle.WHITE : themeStyle.GREY}}>
                  {button.label}
                </CustomTextRegular>
              </LinearGradient>
            </TouchableOpacity>
          ))}
        </View>
        </View>

      </View>


      <View style={{marginTop: "5%", marginHorizontal: "5%"}}>
        <View style={{flexDirection:'row'}}>
          <CustomTextSemiBold fontSize={11} style={{color: themeStyle.BLACK}}>
          LIVE STREAMS ALERTS
          </CustomTextSemiBold>
          <View style={{height: 22, width: 114, alignSelf: 'center', borderWidth: 1, flexDirection: 'row', alignItems: 'center', borderRadius: 5, marginLeft: "auto"}}>
          {buttons.map((button, index) => (
            <TouchableOpacity key={index} onPress={() => setlivestream(button.label)} style={{width: '50%'}}>
              <LinearGradient
                style={{height: 20, width: 56, borderRadius: 3, alignItems: 'center', justifyContent: "center"}}
                colors={livestream === button.label ? ['#49C0D8', '#2F5CA4'] : ['white', 'white']}
              >
                <CustomTextRegular style={{color: livestream === button.label ? themeStyle.WHITE : themeStyle.GREY}}>
                  {button.label}
                </CustomTextRegular>
              </LinearGradient>
            </TouchableOpacity>
          ))}
        </View>
        </View>

      </View>




<Text style={{fontSize:10,fontFamily:FONT.Montserrat_Regular,color:themeStyle.BLACK,width:'90%',alignSelf:'center',marginTop:'5%'}}>
This Live Stream Notification alerts you when you favorite 
<Text style={{color:themeStyle.PRIMARY_COLOR}}> streamer</Text> go live stream or sent out a Live Blast.
</Text>


    </View>




<View style={{width:'100%',marginTop:'10%'}}>
       <GlobalButton title={'SAVE CHANGES'}/>
       <GlobalButton title={'CANCEL CHANGES'}/>

       </View>






<View style={{height:20}}/>



       
 <View style={{height:40}}/>
 </ScrollView>

    </View>
  )
}


const styles = StyleSheet.create({
    container: {
      padding: 10,
    },
    imageContainer: {
height:44,
width:'90%',
alignSelf:'center',
borderWidth:0.5,
borderColor:themeStyle.PRIMARY_LIGHT,
marginTop:'5%',
borderRadius:5,
justifyContent:"center"
    },
    image: {
      width: 100,
      height: 86,
    },
  });
  