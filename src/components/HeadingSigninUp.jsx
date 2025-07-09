import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Bg, LOGO } from '../common/image';
import IcontLeft from 'react-native-vector-icons/Entypo';
import { COLORS } from '../common/color';
import { useNavigation, useRoute } from '@react-navigation/native';
import LogoContainer from './LogoContainer';

const HeadingSigninUp = ({ heading }) => {
  const navigation = useNavigation()
  const route = useRoute()
  return (
    <View>
      <Bg />

      <LogoContainer />
      <View style={styles.wrapperHeading}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconContainer}>
          <IcontLeft name="chevron-left" color="white" size={23} />
        </TouchableOpacity>
        <Text style={styles.headingText}>{heading}</Text>
        {
          route.name === 'ForgetPassword' && <Text style={[styles.password, styles.headingText]}>Password</Text>

        }
      </View>

    </View>
  );
};

const styles = StyleSheet.create({

  wrapperHeading: {
    position: 'absolute',
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    top: 110,
    gap: 70,
  },
  iconContainer: {
    backgroundColor: COLORS.primaryColor,
    padding: 5,
    borderRadius: 50,
    marginStart: 30,
    borderColor: COLORS.primaryColor
  },
  headingText: {
    fontFamily: 'Lato-Bold',
    color: COLORS.Black,
    fontSize: 40,
    fontWeight: 'bold',
  },
  password: {
    position: 'absolute',
     top: '100%',
      start: '40%'
  }
});
export default HeadingSigninUp;
