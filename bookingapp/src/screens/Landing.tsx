import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import thImage from '../assets/Landing/thailand.png';
// import titleImage from './assets/Landing/title.png';
import paloLogo from '../assets/PALOLogo.png';
import AppButton from '../components/basic/AppButton';
import BottomContainer from '../components/composite/BottomContainer';
import PublicLayout from '../components/composite/PublicLayout';
import TopContainer from '../components/composite/TopContainer';
import 'react-native-gesture-handler';
import {StackNavigationProp} from '@react-navigation/stack';
import {NavigatorParamsList, Routes} from '../routes/Routes';

type Props = {
  navigation: StackNavigationProp<NavigatorParamsList, Routes.Landing>;
};

const Landing: React.FC<Props> = ({navigation}) => {
  return (
    <PublicLayout testID="landing-page">
      <TopContainer>
        <View style={styles.titleContainer}>
          <Image style={styles.paloLogo} source={paloLogo} />
          <Image style={styles.thImage} source={thImage} />
          <Text
            style={{fontSize: 40, color: 'white'}}
            testID="landing-page-title">
            Meeting Room Booking
          </Text>
        </View>
      </TopContainer>
      <BottomContainer>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            Let’s make a meeting room booking easier.
          </Text>
          <Text style={styles.text}>
            Meeting Room Booking will help you to ensure you will have a room
            for your meeting. Manage reservation, cancellation. ongoing or
            finished booking.
          </Text>
        </View>
        <View style={styles.buttonsContainer}>
          <AppButton
            testID="login-button"
            variant="primary"
            text="Login"
            onPress={() => {
              navigation.navigate(Routes.Login);
            }}
          />
          <AppButton
            testID="signUp-button"
            text="Sign Up"
            onPress={() => {
              navigation.navigate(Routes.SignUp);
            }}
          />
        </View>
      </BottomContainer>
    </PublicLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 25,
  },
  paloLogo: {
    width: 125,
    height: 30,
    marginBottom: 12,
    resizeMode: 'contain',
  },
  thImage: {
    width: 69,
    height: 9,
    marginBottom: 30,
    resizeMode: 'contain',
  },
  titleImage: {
    width: 221,
    height: 74,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 16,
    // fontFamily: 'open sans',
    marginBottom: 20,
  },
  textContainer: {
    height: 164,
  },
  buttonsContainer: {},
});

export default Landing;
