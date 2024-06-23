import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

// Dummy data
const commentsData = [
  { id: '1', user: 'Jenny Wilson', text: 'GOOD MORNING!!!!!', time: '3 HOUR', replies: [] ,image:require('../../assets/images/Live/1small.png')},
  { id: '2', user: 'Jenny Wilson', text: 'GOOD MORNING!!!!!', time: '3 HOUR', replies: [
    { id: '3', user: 'Herry Will', text: '@Jenny Wilson GOOD MORNING!!!!!', time: '3 HOUR' },
  ]},
  { id: '4', user: 'Jenny Wilson', text: 'GOOD MORNING!!!!!', time: '3 HOUR', replies: [] },
  { id: '5', user: 'Jenny Wilson', text: 'GOOD MORNING!!!!!', time: '3 HOUR', replies: [
    { id: '6', user: 'Herry Will', text: '@Jenny Wilson GOOD MORNING!!!!!', time: '3 HOUR' },
  ]},
  { id: '7', user: 'Jenny Wilson', text: 'GOOD MORNING!!!!!', time: '3 HOUR', replies: [] },
  { id: '8', user: 'Jenny Wilson', text: 'GOOD MORNING!!!!!', time: '3 HOUR', replies: [] },
];

const Comment = ({ comment }) => (
  <View style={styles.commentContainer}>
    <Text style={styles.user}>{comment.user}</Text>
    <Text style={styles.text}>{comment.text}</Text>
    <View style={styles.commentFooter}>
      <Text style={styles.time}>{comment.time}</Text>
      <Text style={styles.footerText}> | REPLY | 6 VIEWS | 8 LIKES |</Text>
      <TouchableOpacity style={styles.replyButton}>
        <Text style={styles.replyText}>REPLY TO COMMENT</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const CommentWithReplies = ({ item }) => (
  <View>
    <Comment comment={item} />
    {item.replies.length > 0 && (
      <FlatList
        data={item.replies}
        renderItem={({ item }) => <Comment comment={item} />}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
      />
    )}
  </View>
);

export default function Comments() {
  return (
    <View style={styles.container}>
      <FlatList
        data={commentsData}
        renderItem={({ item }) => <CommentWithReplies item={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f2f2f2',
  },
  commentContainer: {
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  user: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  text: {
    marginBottom: 5,
  },
  commentFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  time: {
    color: '#888',
  },
  footerText: {
    color: '#888',
    marginHorizontal: 5,
  },
  replyButton: {
    backgroundColor: '#007bff',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  replyText: {
    color: '#fff',
  },
});
