import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { Bg, Heading, Heart, LOGO, Plan, RightIcon, RoundedArrow } from '../../common/image';
import { COLORS } from '../../common/color';
import Right from '../../assets/login/right.png';
import Icon from 'react-native-vector-icons/Feather';
import IconPlay from 'react-native-vector-icons/Entypo';
import Button from '../../components/Button';
import LogoContainer from '../../components/LogoContainer';
import LinearGradient from 'react-native-linear-gradient';

const Register = () => {
  return (
    <View style={styles.container}>
      <Bg />
      <LogoContainer/>
      <View style={styles.heart}>
        <Heart />
      </View>
      <View style={styles.plan}>
        <Plan />
      </View>
      <View style={styles.content}>
        <View style={{ marginVertical: 50 }}>
          <Heading />
        </View>
        <View>

          <Button routeName={'Login'} btnText={'Log in'} style={{ marginBottom: 30 }} />
          <Button routeName={'SignUp'} btnText={'Sign up'} />

          <View>
            <View style={styles.useContainer}>
              <Text style={styles.useText}>How to use ? </Text>

              <View style={styles.playIconContainer}>
                <IconPlay
                  name="controller-play"
                  size={20}
                  color={COLORS.secondaryColor}
                />
              </View>
            </View>
          </View>

          <View style={styles.roundedArrow}>
            <RoundedArrow />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },

  heart: {
    ...StyleSheet.absoluteFillObject,
    marginTop: 130,
    marginStart: 50,
  },
  plan: {
    marginTop: 50,
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
  },
  iconContainer: {
    backgroundColor: COLORS.primaryColor,
    borderRadius: 50,
    marginStart: 25,
  },
  useContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    gap: 10,
    marginStart: 30
  },
  useText: {
    color: COLORS.secondaryColor,
    fontWeight: 'bold',
  },
  playIconContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 15
  },
  roundedArrow: {
    position: 'absolute',
    bottom: -50,
    end: -25

  }
});

export default Register;
