import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Heading, LOGO, Plan, Bg, Heart, Num1 } from '../../common/image';
import LogoContainer from '../../components/LogoContainer';


const Splash = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Register');
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigation]);
  return (
    <View style={styles.container}>
      <Bg />
      <LogoContainer />
      <View style={styles.heart}>
        <Heart />
      </View>
      <View style={styles.plan}>
        <Plan />
      </View>
      <View style={styles.content}>
        <Heading />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1

  },
  content: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },

  heart: {
    ...StyleSheet.absoluteFillObject,
    marginTop: 130,
    marginStart: 50,
  },
  plan: {
    marginTop: 50,
  },
});

export default Splash;
