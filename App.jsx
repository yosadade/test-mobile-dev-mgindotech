import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  FlatList,
  Dimensions,
  StyleSheet,
  Alert,
  ActivityIndicator,
} from 'react-native';

const App = () => {
  const [datas, setDatas] = useState([]);
  const [limit, setLimit] = useState(10)
  const [isLoading, setIsLoading] = useState(false);

  const API_URL = `https://api.thecatapi.com/v1/images/search?limit=${limit}`;

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(API_URL)
      .then(data => {
        const response = data.data;
        setDatas(response);
        setIsLoading(false);
      })
      .catch(error => {
        setIsLoading(false);
        Alert.alert(error);
      });
  }, []);

  const renderItem = ({item}) => (
    <View style={styles.imgWrapper}>
      <Image source={{uri: item.url}} style={styles.image} />
    </View>
  );

  return (
    <>
      {isLoading ? (
        <ActivityIndicator size="large" color="tomato" style={styles.loading}/>
      ) : (
        <FlatList
          data={datas}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
          contentContainerStyle={styles.wrapper}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    paddingHorizontal: 2,
  },
  imgWrapper: {
    flex: 1,
    margin: 2,
  },
  image: {
    width: '100%',
    height: Dimensions.get('window').height / 2,
    resizeMode: 'cover',
  },
});

export default App;
