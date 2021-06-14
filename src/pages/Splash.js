import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../styles/SplashStyle';

const Splash = props => {
  // Kullanıcının oturumu olup-olmadığını kontrol ediyoruz -> Bunun için useEffect kullanıyoruz
  useEffect(() => {
    AsyncStorage.getItem('@USER_ID').then(res => {
      // res -> bellekte kaydolan verinin kendisi
      if (res == null) props.navigation.navigate('SignUp');
      else props.navigation.navigate('Tab');
    });
  }, []);

  return (
    <View
      style={[styles.container, {justifyContent: 'center'}]}>
      <Text
        style={{
          fontSize: 50,
          fontWeight: 'bold',
          alignSelf: 'center',
          justifyContent: 'center',
        }}>
        Splash
      </Text>
    </View>
  );
};

export {Splash};