import React, { useRef } from 'react';
import { Keyboard, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import { COLORS } from '../common/color';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Input = ({ lable, textPlaceHolder, margin, style, type, autoComplete }) => {



  return (

    <TouchableWithoutFeedback onPress={Keyboard.dismiss}  
    accessible={false}> 
    <View style={style}>
      <Text style={styles.label}>{lable}</Text>
      <TextInput
        returnKeyType='done' keyboardType={type}
        autoCapitalize="none"        // no uppercase please
        autoComplete={autoComplete}         // for android
        autoCorrect={false}
        style={[styles.inpt, { marginBottom: margin }]}
        placeholder={textPlaceHolder}
      />
    </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  label: {
    fontFamily: 'Lato-ExtraBold',
    fontWeight: 'bold',
    color: COLORS.Black,
    fontSize: 16,
    marginStart: 20,
    marginBottom: 2,
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  inpt: {
    borderColor: COLORS.lightRadiel,
    borderWidth: 1,
    fontSize: 13,
    width:wp('80%') ,
        height:hp('6%'),
    paddingHorizontal: 30,
    borderRadius: 50,
    backgroundColor: 'white',
    shadowColor: '#1E1E1E',
    shadowOffset: { width: 0, height: 11.68 },
    shadowOpacity: 0.2,
    shadowRadius: 56.47 / 2,
    elevation: 3,
  },

});

export default Input;
