import React, {useState} from 'react';
import {StyleSheet, Text} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface Props {}

const BackButton: React.FC<Props> = () => {
  const navigation = useNavigation();
  const [canGoBack, setCanGoBack] = useState(false);
  useEffect(() => {
    setCanGoBack(navigation.canGoBack());
  }, []);

  const goBack = () => {
    navigation.goBack();
  };

  return canGoBack ? (
    <TouchableOpacity
      testID="back-button"
      style={styles.backButton}
      onPress={() => {
        goBack();
      }}>
      <Text>Back</Text>
    </TouchableOpacity>
  ) : null;
};

const styles = StyleSheet.create({
  backButton: {
    marginBottom: 20,
  },
});

export default BackButton;
