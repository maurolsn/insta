import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  
} from 'react-native';
import options from '../../../assets/options.png';
import like from '../../../assets/like.png';
import comment from '../../../assets/comment.png';
import send from '../../../assets/send.png';
import save from '../../../assets/save.png';

function Feed() {
  const post = [
    {
      id: '1',
      author: 'leo.aline',
      pincture_url:
        'https://criticalhits.com.br/wp-content/uploads/2018/08/kakashi-sharingan-01.jpg',
      likes: '5555',
      description: 'sabemos que tudo na vida depende do quando vc se dedica!',
      hashtags: '#naruto #vemtranquilo',
      place: 'Vida Feliz',
    },
    {
      id: '2',
      author: 'leo.aline',
      pincture_url: 'https://i.ytimg.com/vi/3GGzUZwkJJg/maxresdefault.jpg',
      likes: '55',
      description: 'sabemos que tudo na vida depende do quando vc se dedica!',
      hashtags: '#naruto #vemtranquilo',
      place: 'Vida Feliz',
    },
    {
      id: '3',
      author: 'leo.aline',
      pincture_url: 'https://i.ytimg.com/vi/8n9b8IiaCCQ/hqdefault.jpg',
      likes: '555',
      description: 'sabemos que tudo na vida depende do quando vc se dedica!',
      hashtags: '#naruto #vemtranquilo',
      place: 'Vida Feliz',
    },
  ];

  function renderItem({item: post}) {
    return (
      <View style={styles.post}>
        <View style={styles.postHeader}>
          <View>
            <Text style={styles.uathor}>{post.author}</Text>
            <Text style={styles.place}>{post.place}</Text>
          </View>
          <View style={styles.postOptions}>
            <TouchableOpacity>
              <Image source={options} />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Image
            style={styles.imagePincture}
            source={{uri: post.pincture_url}}
          />
        </View>
        <View style={styles.footer}>
          <View style={styles.actions}>
            <View style={styles.leftActions}>
              <TouchableOpacity style={styles.action}>
                <Image source={like} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.action}>
                <Image source={comment} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={send} />
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity>
                <Image source={save} />
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <Text style={styles.likes}>{post.likes} likes</Text>
            <Text style={styles.hashtags}>{post.hashtags}</Text>
            <Text style={styles.comment}>{post.description}</Text>
          </View>
        </View>
      </View>
    );
  }
  return (
    <SafeAreaView>
      <FlatList
        data={post}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  post: {
    marginVertical: 10,
  },
  postHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    alignItems: 'center',
    marginBottom: 15,
  },
  postOptions: {},
  author: {
    fontSize: 14,
    color: '#000',
    fontWeight: 'bold',
  },
  place: {
    fontSize: 12,
    color: '#666',
  },
  imagePincture: {
    width: '100%',
    height: 400,
  },
  footer: {
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
  },
  action: {
    marginRight: 8,
  },
  leftActions: {
    flexDirection: 'row',
  },
  likes: {
    color: '#666',
    fontWeight: 'bold',
    fontSize: 12,
  },
  comment: {
    color: '#000',
    lineHeight: 15,
  },
  hashtags: {
    color: '#1565c0',
  },
});
export default Feed;
