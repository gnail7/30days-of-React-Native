import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Appbar, useTheme } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useGlobalStyle } from "../context/styleContext.js";

const BOTTOM_APPBAR_HEIGHT = 80;

const MyComponent = () => {
  const { bottom } = useSafeAreaInsets();
  const theme = useTheme();
  const globalStyles = useGlobalStyle()
  return (
    <Appbar
      style={[
        styles.bottom,
        {
          height: BOTTOM_APPBAR_HEIGHT + bottom,
          backgroundColor: theme.colors.bottomBarBackground,
        },
        globalStyles.flexSpaceAround
      ]}
      safeAreaInsets={{ bottom }}
    >
      <Appbar.Action icon="archive" color={theme.colors.iconColor} onPress={() => {}} />
      <Appbar.Action icon="email" color={theme.colors.iconColor} onPress={() => {}} />
      <Appbar.Action icon="label" color={theme.colors.iconColor} onPress={() => {}} />
      <Appbar.Action icon="delete" color={theme.colors.iconColor} onPress={() => {}} />
    </Appbar>
  );
};

const styles = StyleSheet.create({
  bottom: {
    backgroundColor: 'aquamarine',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  fab: {
    position: 'absolute',
    right: 16,
  },
});

export default MyComponent;