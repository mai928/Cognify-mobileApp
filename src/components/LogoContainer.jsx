import React from 'react'
import { StyleSheet, View } from 'react-native'
import { LOGO, Num1 } from '../common/image'

const LogoContainer = () => {
    return (
        <View style={styles.logo}>
            <LOGO />
            <Num1 style={{ marginStart: 60 }} />
        </View>
    )
}

const styles = StyleSheet.create({

    logo: {
        position: 'absolute',
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-',
        marginStart: 17,

    },

})
export default LogoContainer