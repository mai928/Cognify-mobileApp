import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Bg, EditIcon, Ellipse, LOGO, LogoProfile, Menu, Notification, Person, Plan, Rectangle } from '../common/image'
import Input from './Input'
import Button from './Button'
import { useNavigation } from '@react-navigation/native'

const HeadingMainProfile = () => {
   const navigation= useNavigation()
    return (
        <View >
            <Bg />
            <View style={styles.innerContainer}>
                <Rectangle />
                <View style={[styles.innerContainer, styles.headingContainer]}>

                    <Menu style={{ marginEnd: 60 }} />
                    <LogoProfile style={{ marginEnd: 30 }} />
                    <Notification style={{ marginEnd: 5 }} />
                    <Ellipse />
                </View>
                <View style={[styles.innerContainer, styles.personContainer]}>
                    <Person />
                    <EditIcon onPress={()=>navigation.navigate('EditProfile')} style={{ start: 80, top: -37 }} />
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
    }, headingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        top: 30,
        start: 20
    },
    personContainer: {
        top: 105,
        start: 120

    },
 
})
export default HeadingMainProfile