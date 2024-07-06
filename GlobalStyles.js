import * as StyleSheet from './utils/StyleSheet';

import Breakpoints from './utils/Breakpoints';

export const LinearGradientStyles = theme =>
  StyleSheet.create({ 'Linear Gradient': { style: { flex: 1 }, props: {} } });

export const ImageStyles = theme =>
  StyleSheet.create({
    Image: { style: { height: 100, width: 100 }, props: {} },
  });

export const CircleStyles = theme =>
  StyleSheet.create({
    Circle: {
      style: {
        alignItems: 'center',
        backgroundColor: theme.colors.primary,
        justifyContent: 'center',
      },
      props: {},
    },
  });

export const ImageBackgroundStyles = theme =>
  StyleSheet.create({ 'Image Background': { style: { flex: 1 }, props: {} } });

export const TextStyles = theme =>
  StyleSheet.create({
    Text: { style: { color: theme.colors.strong }, props: {} },
  });

export const ButtonStyles = theme =>
  StyleSheet.create({
    Button: {
      style: {
        backgroundColor: theme.colors.primary,
        borderRadius: 8,
        fontFamily: 'System',
        fontWeight: '700',
        textAlign: 'center',
      },
      props: {},
    },
  });
