import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import HeadingSigninUp from '../../components/HeadingSigninUp';
import Input from '../../components/Input';
import { COLORS } from '../../common/color';
import Button from '../../components/Button';
import {
  Apple,
  Facebook,
  Google,
  Plan,
  RoundedArrow,
  Twitter,
  UnderScore,
} from '../../common/image';
import SocialMedia from '../../components/SocialMedia';

const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <HeadingSigninUp heading={'Log in'} />

      <View style={[styles.formContainer, { marginTop: 30 }]}>
        <Input
          margin={25}
          lable={'E-mail / Mobile Number'}
          textPlaceHolder='Example:Mai'
        />
        <Input lable={'Password'} textPlaceHolder='Example:123' />

        <TouchableOpacity onPress={()=>navigation.navigate('ForgetPassword')} style={styles.forgetContainer}>
          <Text  style={styles.textPassword}>Forget Password ?</Text>
        </TouchableOpacity>
        <Button routeName={'Tabs'} btnText={'Log in'} />

        <SocialMedia/>
      </View>
      <View style={{ marginTop: '25%' }}>
        <Plan />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  formContainer: {
    position: 'absolute',
    top: '26%',
    right: '10%',
  },
  forgetContainer: {
    marginTop: 20,
    marginBottom: 25,
    alignItems: 'flex-end',
  },
  textPassword: {
    fontFamily: 'Montserrat-Regular',
    color: COLORS.thirdColor,
    fontSize: 11,
    opacity: 0.8,
  },
  roundedAroww:{
    position:'absolute',
    bottom:100,
    end:-20
  },
  underScore: {
    margin: 'auto',
    marginVertical: 40,
  },
  continue: {
    margin: 'auto',
  },
  textContinue: {
    color: COLORS.lightRadiel,
    fontSize: 13,
    opacity: 0.8,
  },
  socialContainer: {
    paddingVertical: 7,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    borderRadius: 50,
  },
});

export default LoginScreen;
