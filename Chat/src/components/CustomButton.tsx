import React from 'react';
import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import {colors} from '../theme/colors';

interface Props {
  btnStyle?: ViewStyle;
  btnName: string;
  btnNameStyle?: TextStyle;
  onPress?: () => void;
}
export const CustomButton: React.FC<Props> = ({
  btnName,
  btnNameStyle,
  btnStyle,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.buttonStyle, btnStyle]}>
      <Text style={[styles.textStyle, btnNameStyle]}>{btnName}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    width: '100%',
    height: 70,
    backgroundColor: colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 80,
  },
  textStyle: {
    color: colors.primary,
    fontWeight: '600',
    fontSize: 18,
  },
});
