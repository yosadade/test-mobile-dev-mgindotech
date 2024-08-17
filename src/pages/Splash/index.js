import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
        navigation.replace('Home');
    }, 2000)
  }, []);
  return (
    <View style={styles.page}>
      <Text style={styles.title}>The Cat App</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'tomato',
  },
  title: {
    fontSize: 38,
    fontWeight: '700',
    color: '#FFFFFF'
  }
});
