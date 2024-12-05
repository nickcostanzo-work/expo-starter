// FILE: metro.config.ts
import { getDefaultConfig } from 'expo/metro-config';

const defaultConfig = getDefaultConfig(__dirname);

export default {
  ...defaultConfig,
  transformer: {
    babelTransformerPath: require.resolve('react-native-typescript-transformer'),
  },
  resolver: {
    sourceExts: ['ts', 'tsx', 'js', 'jsx', 'json'],
  },
};