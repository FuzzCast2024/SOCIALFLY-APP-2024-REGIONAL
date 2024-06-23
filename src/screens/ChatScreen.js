import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {Bubble, GiftedChat, Send} from 'react-native-gifted-chat';
import {useRoute} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import Icon from 'react-native-vector-icons/Ionicons';
import {COLOR} from '../components/COLOR';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const Chat = ({navigation}) => {
  const route = useRoute();
  const [messageList, setMessageList] = useState([]);

  async function sendNotification(text, data) {
    try {
      if (Platform.OS === 'android') {
        const FIREBASE_API_KEY =
          'AAAAXNvYyoI:APA91bGbsymHhx0XSG13r36KHrts2xMKdqoejxKJwqte0lp4aib321wOv7ZEqQ4rIqBu90eYLOpQYh5_fcDSF4i3bONn6Ni1esN6Mk-K5zbeYypZYnoCzzxK4ifyveQqFPGLgsoqNIC9';
        const message = {
          to: data?.deviceToken,
          notification: {
            title: data?.name,
            body: text,
            priority: 'high',
            sound: 'default',
            channelId: 'default',
            image: data?.imageUrl,
          },
        };

        const response = await fetch('https://fcm.googleapis.com/fcm/send', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `key=${FIREBASE_API_KEY}`,
          },
          body: JSON.stringify(message),
        });

        if (!response.ok) {
          console.error('Failed to send notification:', response.status);
        } else {
          console.log('Notification sent successfully');
        }
      } else if (Platform.OS === 'ios') {
        // Handle iOS push notification logic here
      }
    } catch (error) {
      console.error('Error sending notification:', error);
    }
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      const subscriber = firestore()
        .collection('chats')
        .doc(route.params.id + route.params.data.userID)
        .collection('messages')
        .orderBy('createdAt', 'desc')
        .onSnapshot(async querySnapshot => {
          const allmessages = querySnapshot.docs.map(item => {
            return {...item._data, createdAt: item._data.createdAt};
          });

          setMessageList(allmessages);

          const lastReceiverMessage = allmessages.find(
            message => message.user._id === route.params.data.userID,
          );
          if (lastReceiverMessage) {
            try {
              await firestore()
                .collection('users')
                .doc(route.params.data.userID)
                .update({
                  lastMsg: lastReceiverMessage.text,
                });
            } catch (error) {
              console.error('Error updating last message:', error);
            }
          }
        });

      return () => subscriber();
    });

    return unsubscribe;
  }, [navigation, route]);

  const onSend = useCallback(async (messages = []) => {
    const msg = messages[0];
    const myMsg = {
      ...msg,
      sendBy: route.params.id,
      sendTo: route.params.data.userID,
      createdAt: Date.parse(msg.createdAt),
    };
    setMessageList(previousMessages =>
      GiftedChat.append(previousMessages, myMsg),
    );
    firestore()
      .collection('chats')
      .doc('' + route.params.id + route.params.data.userID)
      .collection('messages')
      .add(myMsg);
    firestore()
      .collection('chats')
      .doc('' + route.params.data.userID + route.params.id)
      .collection('messages')
      .add(myMsg);
    // Send notification with message text
    sendNotification(msg.text, route.params.data);

    // Update the last message
    try {
      await firestore()
        .collection('users')
        .doc(route.params.data.userID)
        .update({
          lastMsg: msg.text,
        });
    } catch (error) {
      console.error('Error updating last message:', error);
    }
  }, []);

  const renderSend = props => {
    return (
      <Send {...props}>
        <View style={{marginRight: 20, marginBottom: 10}}>
          <Icon name="send-sharp" size={25} color={COLOR.red1} />
        </View>
      </Send>
    );
  };

  const goBack = () => {
    navigation.goBack(); // Go back to the previous screen
  };

  const renderAvatar = props => {
    return (
      <View style={{left: 6, bottom: 5}}>
        <Image
          source={{uri: route.params.data.imageUrl}}
          style={styles.avatar}
        />
      </View>
    );
  };

  const ChatBubble = props => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          left: {
            backgroundColor: 'lightblue', // Light Gray for received messages
            borderRadius: 15,
            marginBottom: 5,
          },
          right: {
            backgroundColor: '#C4C4C4aa',
            borderRadius: 15,
            marginBottom: 5,
          },
        }}
        textStyle={{
          left: {
            color: '#000', // Black text color for received messages
          },
          right: {
            color: '#000', // Black text color for sent messages
          },
        }}
      />
    );
  };

  const scrollToBottomComponent = () => {
    return <FontAwesome name="angle-double-down" size={22} color="#333" />;
  };

  const statusColor = route.params.data.status === 'online' ? 'green' : 'grey';
  return (
    <View style={{flex: 1}}>
      <View style={styles.header}>
        <TouchableOpacity onPress={goBack}>
          <Image
            source={require('../images/back.png')}
            style={styles.backButton}
          />
        </TouchableOpacity>
        <Image
          source={{uri: route.params.data.imageUrl}}
          style={styles.profileImage}
        />
        <View>
          <Text style={styles.title}>{route.params.data.name}</Text>
          <Text style={[styles.statusText, {color: statusColor}]}>
            {route.params.data.status}
          </Text>
        </View>
      </View>
      <GiftedChat
        messages={messageList}
        onSend={messages => onSend(messages)}
        user={{
          _id: route.params.id,
        }}
        renderAvatar={renderAvatar}
        alwaysShowSend
        scrollToBottom
        scrollToBottomComponent={scrollToBottomComponent}
        renderSend={renderSend}
        renderBubble={props => <ChatBubble {...props} />}
      />
    </View>
  );
};

export default Chat;
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLOR.white,
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  backButton: {
    width: 25,
    height: 25,
    marginRight: 15,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 75,
    marginRight: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLOR.black,
  },
  sendContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  sendText: {
    color: 'red',
    fontWeight: 'bold',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});
