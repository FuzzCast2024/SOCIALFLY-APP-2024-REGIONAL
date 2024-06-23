import { StyleSheet } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { ROUTES } from '../routes/RoutesConstants';
import SplashScreen from '../screens/SplashScreen';
import OnBoarding from '../screens/OnBoarding';
import Signin from '../screens/Signin';
import Register from '../screens/Register';
import Verification from '../screens/Verification';
import SignupOnboarding from '../screens/SignupOnboarding';
import Profile from '../screens/Profile';
import Forgotpassword from '../screens/Forgotpassword';
import Otp from '../screens/Otp';
import Newpassword from '../screens/Newpassword';
import BottomNavigation from './BottomNavigation';
import Createpost from '../screens/Createpost';
import Gallery from '../screens/Gallery';
import Album from '../screens/Album';
import Music from '../screens/Music';
import Feeling from '../screens/Feeling';
import PostAudience from '../screens/PostAudience';
import SelectLocation from '../screens/SelectLocation';
import Event from '../screens/Event';
import Fundraiser from '../screens/Fundraiser';
import Family from '../screens/Family';
import Gif from '../screens/Gif';
import BackgroundFilter from '../screens/BackgroundFilter';
import PromotePostfirst from '../screens/PromotePostfirst';
import PromotePostsecond from '../screens/PromotePostsecond';
import PromotePostthird from '../screens/PromotePostthird';
import Setting from '../screens/Setting';
import EditProfile from '../screens/EditProfile';
import UserPrivacy from '../screens/UserPrivacy';
import Security from '../screens/Security';
import Securitychangepassword from '../screens/Securitychangepassword';
import Securitychangelastlogin from '../screens/Securitychangelastlogin';
import BlockUsers from '../screens/BlockUsers';
import Preferences from '../screens/Preferences';
import Faq from '../screens/Faq';

const AppNavigator = () => {

  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={ROUTES.screenSplash} component={SplashScreen} />
        <Stack.Screen name={ROUTES.OnBoarding} component={OnBoarding} />
        <Stack.Screen name={ROUTES.Signin} component={Signin} />
        <Stack.Screen name={ROUTES.Register} component={Register} />
        <Stack.Screen name={ROUTES.Verification} component={Verification} />
        <Stack.Screen name={ROUTES.SignupOnboarding} component={SignupOnboarding} />
        <Stack.Screen name={ROUTES.Profile} component={Profile} />
        <Stack.Screen name={ROUTES.Forgotpassword} component={Forgotpassword} />
        <Stack.Screen name={ROUTES.Otp} component={Otp} />
        <Stack.Screen name={ROUTES.Newpassword} component={Newpassword} />
        <Stack.Screen name={ROUTES.BottomNavigation} component={BottomNavigation} />
        <Stack.Screen name={ROUTES.Createpost} component={Createpost} />
        <Stack.Screen name={ROUTES.Gallery} component={Gallery} />
        <Stack.Screen name={ROUTES.Album} component={Album} />
        <Stack.Screen name={ROUTES.Music} component={Music} />
        <Stack.Screen name={ROUTES.Feeling} component={Feeling} />
        <Stack.Screen name={ROUTES.PostAudience} component={PostAudience} />
        <Stack.Screen name={ROUTES.SelectLocation} component={SelectLocation} />
        <Stack.Screen name={ROUTES.Event} component={Event} />
        <Stack.Screen name={ROUTES.Fundraiser} component={Fundraiser} />
        <Stack.Screen name={ROUTES.Family} component={Family} />
        <Stack.Screen name={ROUTES.Gif} component={Gif} />
        <Stack.Screen name={ROUTES.BackgroundFilter} component={BackgroundFilter} />
        <Stack.Screen name={ROUTES.PromotePostfirst} component={PromotePostfirst} />
        <Stack.Screen name={ROUTES.PromotePostsecond} component={PromotePostsecond} />
        <Stack.Screen name={ROUTES.PromotePostthird} component={PromotePostthird} />
        <Stack.Screen name={ROUTES.Setting} component={Setting} />
        <Stack.Screen name={ROUTES.EditProfile} component={EditProfile} />
        <Stack.Screen name={ROUTES.UserPrivacy} component={UserPrivacy} />
        <Stack.Screen name={ROUTES.Security} component={Security} />
        <Stack.Screen name={ROUTES.Securitychangepassword} component={Securitychangepassword} />
        <Stack.Screen name={ROUTES.Securitychangelastlogin} component={Securitychangelastlogin} />
        <Stack.Screen name={ROUTES.BlockUsers} component={BlockUsers} />
        <Stack.Screen name={ROUTES.Preferences} component={Preferences} />
        <Stack.Screen name={ROUTES.Faq} component={Faq} />














      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator

const styles = StyleSheet.create({})
