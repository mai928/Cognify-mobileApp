import React, { useRef, useState } from 'react'
import { Keyboard, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import HeadingMainProfile from '../../components/HeadingMainProfile'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { Calender, Plan } from '../../common/image'
import { COLORS } from '../../common/color'
import DateTimePicker from '@react-native-community/datetimepicker'
import { TextInput } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';



const Profile = () => {
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };





    return (
        <View style={{}}>
            <HeadingMainProfile />

            <View style={styles.innerContainer}>

                <View style={styles.formContainer}>
                    <Input autoComplete={'email-address'} type={'email-address'} style={{ marginBottom: 3 }} lable={'First Name'} textPlaceHolder='Dina' />
                    <Input autoComplete={'Password'} type={'Password'} style={{ marginBottom: 3 }} lable={'Last Name'} textPlaceHolder='Example:123' />



                    <Text style={styles.label}>Date Of Birth</Text>

                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}
                        accessible={false}>
                        <View style={styles.inputContainer} >

                            <TextInput
                                placeholder='jun 9 2024'
                                style={styles.datePicker}
                                value={date.toDateString()}
                                onFocus={showDatepicker} // Show date picker when the input is focused
                                showSoftInputOnFocus={false} // Prevent keyboard from showing
                            />


                            <Calender style={styles.calender} onPress={showDatepicker} />

                        </View>
                    </TouchableWithoutFeedback>

                    <View >
                        <View>
                            {show && (
                                <DateTimePicker
                                    testID="dateTimePicker"
                                    value={date}
                                    mode={mode}
                                    is24Hour={false}
                                    display="default"
                                    onChange={onChange}
                                />
                            )}

                        </View>
                    </View>

                    <Input autoComplete={'default'} style={{ marginBottom: 3 }} lable={'Region/Area'} textPlaceHolder='Example:cairo' />
                    <Input autoComplete={'numeric'} type={'numeric'} style={{ marginBottom: 3 }} lable={'Mobile Number'} textPlaceHolder='Example:012342666' />
                    <Input autoComplete={'numeric'} type={'numeric'} style={{ marginBottom: 2 }} lable={'Email'} textPlaceHolder='Example:012345666' />


                    <Plan style={{ top: -57, start: -40 }} />
                    <View style={{ marginHorizontal: 100, bottom: 63, end: 30 }}>
                        <Button style={{ paddingHorizontal: 40 }} btnText={'Save'} />
                    </View>
                </View>


            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    innerContainer: {
        position: 'absolute',
    },
    formContainer: {
        top: hp('30%'),
        start: 40
    },
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
    datePicker: {
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
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    calender: {
        position: 'absolute',
        top: 7,
        bottom: 0,
        end: wp('25%')
    }
})

export default Profile