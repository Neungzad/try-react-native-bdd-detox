import {StackNavigationProp} from '@react-navigation/stack';
import React, {useContext, useState} from 'react';
// import {StyleSheet} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import BackButton from '../components/basic/BackButton';
import AppButton from '../components/basic/AppButton';
import AppTextInput from '../components/basic/AppTextInput';
import {UserContext} from '../context/UserContext';
import {NavigatorParamsList, Routes} from '../routes/Routes';
import UserService from '../services/UserService';
import welcomebackText from './../assets/Login/welcomeback.png';
import PublicLayout from '../components/composite/PublicLayout';
import TopContainer from '../components/composite/TopContainer';
import BottomContainer from '../components/composite/BottomContainer';

type NavigationProp = StackNavigationProp<NavigatorParamsList, Routes.SignUp>;

type Props = {
  navigation: NavigationProp;
};

const Login: React.FC<Props> = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {setLoggedUser} = useContext(UserContext);

  const onPressLoginButton = async () => {
    const res: any = await UserService.login(email, password);
    console.log(
      '🚀 ~ file: Login.tsx:29 ~ onPressLoginButton ~ res:',
      res.data.token,
    );
    await setLoggedUser(email, res.data.token);
    navigation.navigate(Routes.FindRoom);
  };
  return (
    <PublicLayout testID="login-screen">
      <TopContainer>
        <BackButton />
        <AutoHeightImage source={welcomebackText} width={270} />
      </TopContainer>
      <BottomContainer>
        <AppTextInput
          testID="email-input"
          title="Email"
          value={email}
          onChangeText={setEmail}
        />
        <AppTextInput
          testID="password-input"
          title="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <AppButton
          testID="login-button"
          variant="primary"
          text="Login"
          onPress={() => onPressLoginButton()}
        />
      </BottomContainer>
    </PublicLayout>
  );
};
// const styles = StyleSheet.create({});
export default Login;
