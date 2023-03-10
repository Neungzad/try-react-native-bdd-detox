import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {KeyboardAvoidingView, ScrollView, StyleSheet, View} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import titleImage from '../assets/SignUp/title.png';
import BackButton from '../components/basic/BackButton';
import AppButton from '../components/basic/AppButton';
import {Input} from '../components/basic/input';
import BottomContainer from '../components/composite/BottomContainer';
import PublicLayout from '../components/composite/PublicLayout';
import TopContainer from '../components/composite/TopContainer';
import {NavigatorParamsList, Routes} from '../routes/Routes';
import UserService from '../services/UserService';

type NavigationProp = StackNavigationProp<NavigatorParamsList, Routes.SignUp>;

type Props = {
  navigation: NavigationProp;
};

const SignUp: React.FC<Props> = ({navigation}) => {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const onPressSignUpButton = async () => {
    await UserService.signUp(firstName, lastName, email, password);
    navigation.navigate(Routes.Login);
  };

  return (
    <PublicLayout testID="signUp-screen">
      <TopContainer>
        <BackButton />
        <AutoHeightImage source={titleImage} width={270} />
      </TopContainer>

      <BottomContainer>
        <KeyboardAvoidingView>
          <Input
            testID="firstName-input"
            label="First Name"
            value={firstName}
            onChangeText={setFirstName}
          />
          <Input
            testID="lastName-input"
            label="Last Name"
            value={lastName}
            onChangeText={setLastName}
          />
          <Input
            testID="email-input"
            label="Email"
            value={email}
            onChangeText={setEmail}
          />
          <Input
            testID="password-input"
            label="Password"
            value={password}
            onChangeText={setPassword}
          />

          <AppButton
            testID="signUp-button"
            variant="primary"
            text="Create Account"
            onPress={() => onPressSignUpButton()}
          />
        </KeyboardAvoidingView>
      </BottomContainer>
    </PublicLayout>
  );
};

export default SignUp;
