import {StyleSheet, View, Image, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Tabs/Home';
import themeStyle, { FONT } from '../styles/themeStyle';
import Users from '../screens/Users';
import Profile from '..//Tabs/Profile';
import Live from '../Tabs/Live';
import Notifications from '../Tabs/Notifications';


const Tab = createBottomTabNavigator();
const BottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {display: 'none'},
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          position: 'absolute',
          elevation: 0,
          borderTopColor: 'transparent',
          height: 50,
        },
      }}>
      <Tab.Screen
        name={'Home'}
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.tabBarIconContainer}>
              <Image
              resizeMode='contain'
                source={require('../../assets/images/Tabs/Home.png')}
                style={styles.tabBarIcon}
                tintColor={focused ? themeStyle.PRIMARY_COLOR : themeStyle.GREY}
              />
              <Text
                style={[
                  styles.title,
                  {
                    color: focused ? themeStyle.PRIMARY_COLOR : themeStyle.GREY,
                    fontFamily: focused
                      ? FONT.Montserrat_SemiBold
                      : FONT.Montserrat_Regular,
                      borderBottomWidth:focused?2:0,
                      borderColor:themeStyle.PRIMARY_COLOR
                  },
                ]}>
                Home
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name={'Notifications'}
        component={Notifications}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.tabBarIconContainer}>
              <Image
              resizeMode='contain'

             source={require('../../assets/images/Tabs/Notifications.png')}
                style={styles.tabBarIcon}
                tintColor={focused ? themeStyle.PRIMARY_COLOR : themeStyle.GREY}
              />
              <Text
                style={[
                  styles.title,
                  {
                    color: focused ? themeStyle.PRIMARY_COLOR : themeStyle.GREY,
                    fontFamily: focused
                      ? FONT.Montserrat_SemiBold
                      : FONT.Montserrat_Regular,
                      borderBottomWidth:focused?2:0,
                      borderColor:themeStyle.PRIMARY_COLOR
                  },
                ]}>
           Notification
              </Text>
            </View>
          ),
        }}
      />

<Tab.Screen
        name={'Live'}
        component={Live}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.tabBarIconContainer}>
              <Image
              resizeMode='contain'

             source={require('../../assets/images/Tabs/Live.png')}
                style={styles.tabBarIcon}
                tintColor={focused ? themeStyle.PRIMARY_COLOR : themeStyle.GREY}
              />
              <Text
                style={[
                  styles.title,
                  {
                    color: focused ? themeStyle.PRIMARY_COLOR : themeStyle.GREY,
                    fontFamily: focused
                      ? FONT.Montserrat_SemiBold
                      : FONT.Montserrat_Regular,
                      borderBottomWidth:focused?2:0,
                      borderColor:themeStyle.PRIMARY_COLOR
                  },
                ]}>
          Live
              </Text>
            </View>
          ),
        }}
      />

<Tab.Screen
        name={'Messages'}
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.tabBarIconContainer}>
              <Image
              resizeMode='contain'

               source={require('../../assets/images/Tabs/messages.png')}
                style={{height: 19, width: 19}}
                tintColor={focused ? themeStyle.PRIMARY_COLOR : themeStyle.GREY}
              />
              <Text
                style={[
                  styles.title,
                  {
                    color: focused ? themeStyle.PRIMARY_COLOR : themeStyle.GREY,
                    fontFamily: focused
                      ? FONT.Montserrat_SemiBold
                      : FONT.Montserrat_Regular,
                      borderBottomWidth:focused?2:0,
                      borderColor:themeStyle.PRIMARY_COLOR
                  },
                ]}>
              Messages
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name={'Reels'}
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.tabBarIconContainer}>
              <Image
              resizeMode='contain'
               source={require('../../assets/images/Tabs/reels.png')}
                style={{height: 19, width: 19}}
                tintColor={focused ? themeStyle.PRIMARY_COLOR : themeStyle.GREY}
              />
              <Text
                style={[
                  styles.title,
                  {
                    color: focused ? themeStyle.PRIMARY_COLOR : themeStyle.GREY,
                    fontFamily: focused
                      ? FONT.Montserrat_SemiBold
                      : FONT.Montserrat_Regular,
                      borderBottomWidth:focused?2:0,
                      borderColor:themeStyle.PRIMARY_COLOR
                  },
                ]}>
               Reels
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name={'Profile'}
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.tabBarIconContainer}>
              <Image
              resizeMode='contain'
            source={require('../../assets/images/Tabs/profile.png')}
                style={{height: 19, width: 19}}
                tintColor={focused ? themeStyle.PRIMARY_COLOR : themeStyle.GREY}
              />
              <Text
                style={[
                  styles.title,
                  {
                    color: focused ? themeStyle.PRIMARY_COLOR : themeStyle.GREY,
                    fontFamily: focused
                      ? FONT.Montserrat_SemiBold
                      : FONT.Montserrat_Regular,
                      borderBottomWidth:focused?2:0,
                      borderColor:themeStyle.PRIMARY_COLOR
                  },
                ]}>
                Profile
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({
  tabBarIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabBarIcon: {
    height: 19,
    width: 19,
    resizeMode: 'contain',
  },
  tabBarHomeIcon: {
    height: 23,
    width: 23,
    resizeMode: 'contain',
  },
  activeTabBar: {
    position: 'absolute',
    top: 25,
    left: 0,
    right: 0,
    height: 3,
    backgroundColor: '#014568',
  },
  title: {
    marginTop: '3%',
    fontSize: 9,
    fontFamily: FONT.Poppins_Regular,
  },
});
