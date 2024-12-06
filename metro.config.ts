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
  }
  
};



// Tamagui configuration
// https://tamagui.dev/docs/getting-started
// add nice web support with optimizing compiler + CSS extraction
const { withTamagui } = require('@tamagui/metro-plugin')
module.exports = withTamagui(defaultConfig, {
  components: ['tamagui'],
  config: './tamagui.config.ts',
  outputCSS: './tamagui-web.css',
})

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname, {
  // [Web-only]: Enables CSS support in Metro.
  isCSSEnabled: true,
})