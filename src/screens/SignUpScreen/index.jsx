import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { UnderScore } from '../../common/image';
import Button from '../../components/Button';
import Input from '../../components/Input';
import HeadingSigninUp from '../../components/HeadingSigninUp';
import DropDownPicker from 'react-native-dropdown-picker';
import { useState } from 'react';
import { COLORS } from '../../common/color';
import { Dropdown } from 'react-native-element-dropdown';

const SignUpScreen = () => {
  const [value, setValue] = useState(null);
  const data = [
    {
      value: 'parent',
      label: 'Parent',


    },
    {
      value: 'teacher',
      label: 'Teacher',



    }
  ];

  const renderItem = item => {
    return (
      <TouchableOpacity style={styles.item} activeOpacity={1}
      >
        <Text style={styles.textItem}>{item.label}</Text>
      </TouchableOpacity>
    );
  };


  return (
    <View style={styles.container}>
      <HeadingSigninUp heading={'Sign Up'} />

      <View style={styles.formContainer}>
        <Input autoComplete={'email-address'} type={'email-address'} style={{ marginBottom: 10 }} lable={'Email'} textPlaceHolder='Example:E-mail' />
        {/* new-password */}
        <Input autoComplete={'Password'} type={'Password'} style={{ marginBottom: 10 }} lable={'Password'} textPlaceHolder='Example:123' />
        <Input autoComplete={'default'} style={{ marginBottom: 10 }} lable={'Address'} textPlaceHolder='Example:cairo' />
        <Input autoComplete={'numeric'} type={'numeric'} style={{ marginBottom: 10 }} lable={'Phone Number'} textPlaceHolder='Example:012345666' />
        <Text style={[styles.label, { marginBottom: 2 }]}>User Type</Text>

        <Dropdown
          style={styles.selet}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          data={data}
          itemContainerStyle={styles.itemcontainer}
          containerStyle={styles.contain}
          activeColor=''
          itemTextStyle={styles.itemText}
          keyboardAvoiding
          maxHeight={200}
          labelField="label"
          valueField="value"
          placeholder="Select item"
          searchPlaceholder="Search..."
          value={value}
          onChange={(item)=>setValue(item.value)
          }
        />

        <View style={styles.underScore}>
          <UnderScore />
        </View>
        <Button  btnText={'Create account'} />
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

  underScore: {
    margin: 'auto',
    marginVertical: 15,
  },
  label: {
    fontFamily: 'Lato-ExtraBold',
    fontWeight: 'bold',
    color: COLORS.Black,
    fontSize: 16,
    marginStart: 20,
    marginBottom: 2,
    textShadowColor: 'rgba(0, 0, 0, 0.25)', 
    textShadowOffset: { width: 0, height:1 },
    textShadowRadius: 1 ,
  },
  selet: {
    borderColor: COLORS.lightRadiel,
    borderWidth: 1,
    fontSize: 13,
    width: 280,
    paddingHorizontal: 30,
    borderRadius: 50,
    backgroundColor: 'white',
    shadowColor: '#1E1E1E',
    shadowOffset: { width: 0, height: 11.68 },
    shadowOpacity: 0.2,
    shadowRadius: 56.47 /2 , 
    elevation: 3,
  },

  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
    marginLeft: 8,
  },

  item: {
    // padding: 10,
    // width:30,
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'center',
    // borderRadius: 50,
  },
  textItem: {
    fontSize: 14,
  },
  contain: {
    marginTop: -20,
    marginStart: 150,
    backgroundColor: 'white',
    width: 150,
    borderRadius: 20,
    borderColor: COLORS.lightRadiel,
    borderWidth: 1,
    // bottom:'32%',
    // end:'10%'
  },
  itemcontainer: {
    // backgroundColor:'black',

  }
  , itemText: {
    fontSize: 14
  }


});

export default SignUpScreen;
