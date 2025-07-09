import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import HeadingMainProfile from '../../components/HeadingMainProfile'
import { COLORS } from '../../common/color'
import { Logout, NotificationLine, Plan, ProfileLine, Security, Theme, Translate, UserIcon } from '../../common/image'
import Tabs from '../Tabs'

const EditProfile = () => {
  return (
    <View style={{ flex: 1 }}>

      <View >

        <HeadingMainProfile />
        <View style={styles.info}>
          <Text style={styles.nameInfo}>Dina A.Said</Text>
          <Text style={styles.gmail}>dina@gmail | +01 234 567 89</Text>
        </View>
        <Plan style={{ position: 'absolute', top: '110%' }} />

        <View style={styles.settingContainer} >
          <View style={styles.Setting}>

            <View style={{ flexDirection: 'row', marginTop: 7 }}>
              <ProfileLine style={{ marginEnd: 15 }} />
              <Text style={styles.textSetting} >Edit profile information</Text>
            </View>


            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>

              <View style={{ flexDirection: 'row', marginTop: 7 }}>
                <NotificationLine style={{ marginEnd: 15 }} />
                <Text style={styles.textSetting}>Notification</Text>
              </View>

              <Text style={{ color: COLORS.lightRadiel }}>ON</Text>
            </View>


            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>

              <View style={{ flexDirection: 'row', marginTop: 7 }}>
                <Translate style={{ marginEnd: 15 }} />
                <Text style={styles.textSetting}>Language</Text>
              </View>

              <Text style={{ color: COLORS.lightRadiel }}>English</Text>
            </View>
          </View>


          <View style={styles.Setting}>
            <View style={{ flexDirection: 'row', marginTop: 7 }}>
              <Security style={{ marginEnd: 15 }} />
              <Text style={styles.textSetting}>Security</Text>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <View style={{ flexDirection: 'row', marginTop: 7 }}>
                <Theme style={{ marginEnd: 15 }} />
                <Text style={styles.textSetting}>Theme</Text>
              </View>
              <Text style={{ color: COLORS.lightRadiel }}>Ligh mode</Text>

            </View>


          </View>

          <View style={styles.Setting}>
            <View style={{ flexDirection: 'row', marginTop: 7 }}>
              <UserIcon style={{ marginEnd: 15 }} />
              <Text style={styles.textSetting} >Help & Support</Text>
            </View>

            <View style={{ flexDirection: 'row', marginTop: 7 }}>
              <NotificationLine style={{ marginEnd: 15 }} />
              <Text style={styles.textSetting}>Contact us</Text>
            </View>


            <View style={{ flexDirection: 'row', marginTop: 7 }}>
              <Logout style={{ marginEnd: 15 }} />
              <Text style={styles.textSetting}>Lang out</Text>
            </View>
          </View>
        </View>

      </View>
      <View style={styles.tabsContainer}>
        <Tabs />
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  info: {
    position: 'absolute',
    top: '47%',
    start: '25%',
    alignItems: 'center'
  },
  nameInfo: {
    fontSize: 25,
    fontWeight: 'bold',
    color: COLORS.Black,
    fontFamily: 'Lato-Regular'
  },
  gmail: {
    color: COLORS.Black
  },
  settingContainer: {
    ...StyleSheet.absoluteFill,
    top: '60%'
  },
  Setting: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)', 
    marginHorizontal: 20,
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation:1,
    borderWidth:1,
    borderColor:'rgba(255, 255, 255, 0.5)'
    

  }, textSetting: {
    color: COLORS.Black

  },
  scrollContainer: {
    paddingBottom: '100%', 
  }
  , tabsContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0
  }
})
export default EditProfile