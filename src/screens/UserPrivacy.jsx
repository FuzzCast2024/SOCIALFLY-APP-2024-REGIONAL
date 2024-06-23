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








export default function UserPrivacy() {

  const [privateAccountButton, setPrivateAccountButton] = useState('ON');
  const [activeStatusButton, setActiveStatusButton] = useState('ON');
  const [photosLibraryButton, setPhotosLibraryButton] = useState('ON');
  const [receiveCallsButton, setReceiveCallsButton] = useState('ON');

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
<Image resizeMode='contain' style={{height:15,width:89,left:10}} source={require('../../assets/images/UserPrivacy/user.png')}/>
<View style={{height:45,width:171,alignSelf:'center',borderWidth:1,flexDirection:'row',alignItems:'center',borderRadius:5,marginLeft:5}}>
<Image resizeMode='contain' style={{height:16,width:16,marginLeft:'5%'}} source={require('../../assets/images/Music/search.png')}/>
<TextInput style={{fontSize:14,fontFamily:FONT.Montserrat_Regular,width:120,paddingLeft:20,color:themeStyle.BLACK}} placeholderTextColor={themeStyle.GREY} placeholder='Search'/>
 </View>
    </View>


 </View>

 <View>
      <View style={{flexDirection: "row", alignItems: 'center', marginTop: "10%", marginHorizontal: "5%"}}>
        <View>
          <CustomTextSemiBold fontSize={11} style={{color: themeStyle.BLACK}}>
            PRIVATE ACCOUNT
          </CustomTextSemiBold>
          <CustomTextRegular fontSize={9} style={{color: themeStyle.BLACK, width: 200, marginTop: '2%'}}>
            When your account is private, only people 
            you're friends with can see your posts.
          </CustomTextRegular>
        </View>
        <View style={{height: 22, width: 114, alignSelf: 'center', borderWidth: 1, marginTop: '5%', flexDirection: 'row', alignItems: 'center', borderRadius: 5, marginLeft: "auto"}}>
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

      <View style={{flexDirection: "row", alignItems: 'center', marginTop: "10%", marginHorizontal: "5%"}}>
        <View>
          <CustomTextSemiBold fontSize={11} style={{color: themeStyle.BLACK}}>
            ACTIVE STATUS
          </CustomTextSemiBold>
          <CustomTextRegular fontSize={9} style={{color: themeStyle.BLACK, width: 200, marginTop: '2%'}}>
            If you turn Active Status off, you don’t 
            want to share your active status or last seen status.
            And you won’t be able to see your Friends or Favorites' active status
            or last seen status.
          </CustomTextRegular>
        </View>
        <View style={{height: 22, width: 114, alignSelf: 'center', borderWidth: 1, marginTop: '5%', flexDirection: 'row', alignItems: 'center', borderRadius: 5, marginLeft: "auto"}}>
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

      <View style={{flexDirection: "row", alignItems: 'center', marginTop: "10%", marginHorizontal: "5%"}}>
        <View>
          <CustomTextSemiBold fontSize={11} style={{color: themeStyle.BLACK}}>
            PHOTOS LIBRARY PUBLIC
          </CustomTextSemiBold>
          <CustomTextRegular fontSize={9} style={{color: themeStyle.BLACK, width: 200, marginTop: '2%'}}>
            If you turn this off, only your Friends and 
            your Favorites will be able to see your photo library.
          </CustomTextRegular>
        </View>
        <View style={{height: 22, width: 114, alignSelf: 'center', borderWidth: 1, marginTop: '5%', flexDirection: 'row', alignItems: 'center', borderRadius: 5, marginLeft: "auto"}}>
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

      <View style={{flexDirection: "row", alignItems: 'center', marginTop: "10%", marginHorizontal: "5%"}}>
        <View>
          <CustomTextSemiBold fontSize={11} style={{color: themeStyle.BLACK}}>
            RECEIVE CALLS FRIENDS ONLY
          </CustomTextSemiBold>
          <CustomTextRegular fontSize={9} style={{color: themeStyle.BLACK, width: 200, marginTop: '2%'}}>
            When this is on, you will only receive calls 
            from friends that you have accepted as a friend.
          </CustomTextRegular>
        </View>
        <View style={{height: 22, width: 114, alignSelf: 'center', borderWidth: 1, marginTop: '5%', flexDirection: 'row', alignItems: 'center', borderRadius: 5, marginLeft: "auto"}}>
          {buttons.map((button, index) => (
            <TouchableOpacity key={index} onPress={() => setReceiveCallsButton(button.label)} style={{width: '50%'}}>
              <LinearGradient
                style={{height: 20, width: 56, borderRadius: 3, alignItems: 'center', justifyContent: "center"}}
                colors={receiveCallsButton === button.label ? ['#49C0D8', '#2F5CA4'] : ['white', 'white']}
              >
                <CustomTextRegular style={{color: receiveCallsButton === button.label ? themeStyle.WHITE : themeStyle.GREY}}>
                  {button.label}
                </CustomTextRegular>
              </LinearGradient>
            </TouchableOpacity>
          ))}
        </View>
      </View>
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
  