import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import HeadingMainProfile from '../../components/HeadingMainProfile'
import HeadingSigninUp from '../../components/HeadingSigninUp'
import Input from '../../components/Input';
import { COLORS } from '../../common/color';
import Button from '../../components/Button';
import SocialMedia from '../../components/SocialMedia';
import { Plan } from '../../common/image';

const ForgetPassword = () => {

    return (

        <View>
            <HeadingSigninUp heading={'Forget'} />
            <View style={styles.inptContainer}>
                <Input autoComplete={'email-address'} type={'email-address'} style={{ marginBottom: 10 }} lable={'E-mail / Mobile Number'} textPlaceHolder={'Example:E-mail'} />
                <Button style={{ marginTop: 20 }} btnText={'Send Link'} />
                <Button style={{ marginTop: 15 }} btnText={'Back to Log in'} />
                <SocialMedia />
                <Plan style={{ top: '-15%', start: -40 }} />

            </View>




        </View>
    );


}


const styles = StyleSheet.create({

    inptContainer: {
        position: 'absolute',
        top: '60%',
        start: '11%'
    },

})

export default ForgetPassword