import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useAllUsersFirebase} from '../context/FirebaseContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Swipeable} from 'react-native-gesture-handler';
// import AntDesign from 'react-native-vector-icons/AntDesign';
import themeStyle from '../styles/themeStyle';

const Users = () => {
  const usersData = useAllUsersFirebase();
  console.log(usersData,'--------------')
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [readMessages, setReadMessages] = useState({});

  useEffect(() => {
    const fetchReadMessages = async () => {
      try {
        const readMessagesData = await AsyncStorage.getItem('readMessages');
        if (readMessagesData) {
          setReadMessages(JSON.parse(readMessagesData));
        }
      } catch (error) {
        console.error('Error fetching read messages from AsyncStorage:', error);
      }
    };

    fetchReadMessages();
  }, []);

  useEffect(() => {
    if (searchQuery) {
      handleSearch();
    }
  }, [usersData]);

  useEffect(() => {
    const newReadMessages = {...readMessages};
    usersData.forEach(user => {
      if (user.lastMsg !== readMessages[user.id]?.lastMsg) {
        newReadMessages[user.id] = {lastMsg: user.lastMsg, read: false};
      }
    });
    setReadMessages(newReadMessages);
    AsyncStorage.setItem('readMessages', JSON.stringify(newReadMessages));
  }, [usersData]);

  const navigateToChat = async item => {
    try {
      const userId = await AsyncStorage.getItem('userID');
      navigation.navigate('ChatScreen', {data: item, id: userId});

      // Mark the message as read
      const updatedReadMessages = {
        ...readMessages,
        [item.id]: {lastMsg: item.lastMsg, read: true},
      };
      setReadMessages(updatedReadMessages);
      await AsyncStorage.setItem(
        'readMessages',
        JSON.stringify(updatedReadMessages),
      );
    } catch (error) {
      console.error('Error updating read messages in AsyncStorage:', error);
    }
  };

  const handleSearch = () => {
    const filtered = usersData.filter(user =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );
    setFilteredUsers(filtered);
  };

  const handleDeleteChat = item => {
    // Implement chat deletion logic here
  };

  const RightSwipe = item => {
    return (
      <View
        style={{
          height: 85,
          width: '25%',
          backgroundthemeStyle: themeStyle.red1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={() => handleDeleteChat(item)}>
          {/* <AntDesign name="delete" size={30} themeStyle={themeStyle.white} /> */}
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* <CustomHeader1 title={'Chat'} /> */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search users..."
          placeholderTextthemeStyle={themeStyle.black}
          value={searchQuery}
          onChangeText={text => setSearchQuery(text)}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={searchQuery ? filteredUsers : usersData}
        renderItem={({item}) => (
          <Swipeable renderRightActions={() => <RightSwipe item={item} />}>
            <TouchableOpacity
              style={[
                styles.userItem,
                {backgroundthemeStyle: 'white', marginVertical: 1},
              ]}
              onPress={() => navigateToChat(item)}>
              <View>
                <Image
                  source={
                    item.imageUrl
                      ? {uri: item.imageUrl}
                      : require('../../assets/images/Splash/logo.png')
                  }
                  style={styles.userIcon}
                />
                <View
                  style={[
                    styles.statusDot,
                    {
                      backgroundthemeStyle:
                        item.status === 'online' ? 'green' : 'gray',
                    },
                  ]}
                />
              </View>
              <View
                style={{
                  width: '50%',
                  justifyContent: 'space-around',
                }}>
                <Text style={styles.name}>{item.name}</Text>
                {item.lastMsg && !readMessages[item.id]?.read ? (
                  <Text style={styles.online}>{item.lastMsg}</Text>
                ) : (
                  <Text
                    style={
                      item.status === 'online' ? styles.online : styles.offline
                    }>
                    {item.status === 'online' ? 'Online' : 'Offline'}
                  </Text>
                )}
              </View>
              <View
                style={{
                  width: '50%',
                }}>
                <Text style={{fontSize: 11, bottom: 5,themeStyle:themeStyle.black}}>
                  {item.lastSeen && item.lastSeen.toDate().toLocaleString()}
                </Text>
              </View>
            </TouchableOpacity>
          </Swipeable>
        )}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

export default Users;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    marginBottom: 10,
    marginVertical: 15,
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderthemeStyle: 'gray',
    borderRadius: 75,
    padding: 10,
    themeStyle: themeStyle.black,
  },
  searchButton: {
    backgroundthemeStyle: themeStyle.red1,
    padding: 10,
    marginLeft: 10,
    borderRadius: 5,
  },
  buttonText: {
    themeStyle: 'white',
    fontWeight: 'bold',
  },
  userItem: {
    width: '100%',
    alignSelf: 'center',
    flexDirection: 'row',
    height: 70,
    paddingLeft: 20,
    alignItems: 'center',
  },
  statusDot: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: 12,
    height: 12,
    borderRadius: 6,
    borderWidth: 2,
    borderthemeStyle: themeStyle.white,
  },
  userIcon: {
    width: 40,
    height: 40,
    borderRadius: 75,
  },
  name: {
    themeStyle: 'black',
    marginLeft: 20,
    fontSize: 16,
  },
  online: {
    themeStyle: themeStyle.green, // themeStyle for online status
    marginLeft: 20,
    fontSize: 12,
  },
  offline: {
    themeStyle: themeStyle.darkgrey, // themeStyle for offline status
    marginLeft: 20,
    fontSize: 12,
  },
  readMessage: {
    fontSize: 12,
    themeStyle: themeStyle.gray,
    marginLeft: 20,
  },
  listContainer: {
    flex: 1,
    backgroundthemeStyle: themeStyle.white,
  },
});
