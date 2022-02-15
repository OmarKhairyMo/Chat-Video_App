import React from 'react';
import {
  ImageBackground,
  Platform,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import {CustomButton} from '../components/CustomButton';
import {ONBOARDING_DATA} from '../constants/onBoardingDummy';
import {colors} from '../theme/colors';
import {SPACING} from '../theme/spacing';

export const OnBoarding = () => {
  const {height, width} = useWindowDimensions();
  const {image, mainMessage, subMessage} = ONBOARDING_DATA;
  return (
    <ImageBackground
      style={styles(height, width).contianer}
      source={{uri: image}}>
      <View style={styles(height, width).messageContianer}>
        <Text style={styles(width, height).messageStyle}>{mainMessage}</Text>
        <Text style={styles(width, height).subMessageStyle}>{subMessage}</Text>
      </View>
      <View style={styles(width, height).buttonContainer}>
        <CustomButton btnName="Get Started" />
      </View>
    </ImageBackground>
  );
};

const styles = (height: number, width: number) =>
  StyleSheet.create({
    contianer: {
      width: width,
      height: height,
    },
    messageContianer: {
      width: '80%',
      height: height * 0.85,
      justifyContent: 'flex-end',
      paddingHorizontal: SPACING,
    },
    messageStyle: {
      color: colors.white,
      fontSize: 36,
      fontWeight: '600',
    },
    subMessageStyle: {
      color: colors.gray,
      fontSize: 18,
      fontWeight: '300',
      marginTop: 10,
    },
    buttonContainer: {
      flex: 1,
      width: '100%',
      paddingHorizontal: SPACING,
      justifyContent: 'flex-end',
      marginBottom: Platform.OS === 'ios' ? 10 : 0,
    },
  });
