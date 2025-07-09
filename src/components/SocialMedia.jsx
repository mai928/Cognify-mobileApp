import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Apple, Facebook, Google, RoundedArrow, Twitter, UnderScore } from '../common/image'
import { COLORS } from '../common/color'

const SocialMedia = () => {
  return (

    <View>
          <View style={styles.roundedAroww}>
          <RoundedArrow/>
        </View>
        <View style={styles.underScore}>
          <UnderScore/>
        </View>
        <View style={styles.continue}>
          <TouchableOpacity>
            <Text style={styles.textContinue}>
              Or Continue with Social Accounts
            </Text>
          </TouchableOpacity>
          <View style={{ flexDirection: 'row', gap: 10, marginTop: 20 }}>
            <View style={styles.socialContainer}>
              <Google/>
            </View>
            <View style={styles.socialContainer}>
              <Facebook/>
            </View>
            <View style={styles.socialContainer}>
              <Apple/>
            </View>
            <View style={styles.socialContainer}>
              <Twitter/>
            </View>
          </View>
        </View>
    </View>
  )
}


const styles =StyleSheet.create({

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
})

export default SocialMedia