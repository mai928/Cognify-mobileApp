import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { COLORS } from '../common/color';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const Button = ({ btnText, style, routeName }) => {
  const navigation = useNavigation()

  return (

    <TouchableOpacity onPress={() => navigation.navigate(routeName)} style={[styles.btnContainer, style]}>
      {/* <LinearGradient
        colors={['#2990B1',  '#1985AC','#FFFFFF']}
        style={styles.gradient}
        start={{ x: 1, y: 1 }}
        end={{ x: 1, y: 1 }}
      > */}
        <Text style={styles.btnText}>{btnText}</Text>
        <View style={styles.iconContainer}>
          <Icon name="chevron-right" size={20} color="white" />
        </View>
      {/* </LinearGradient> */}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  gradient:{
    backgroundColor: COLORS.secondaryColor,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderRadius: 20,
    paddingHorizontal: 60,
  },
  btnContainer: {
    backgroundColor: COLORS.secondaryColor,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderRadius: 20,
    paddingHorizontal: 60,
  },
  btnText: {
    backgroundColor: COLORS.secondaryColor,
    padding: 10,
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'Montserrat-ExtraBold',
    fontSize: 16
  },
  iconContainer: {
    backgroundColor: COLORS.primaryColor,
    borderRadius: 50,
    marginStart: 25,
  },

});

export default Button;
