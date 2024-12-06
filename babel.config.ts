import { ConfigAPI } from '@babel/core';
import path from 'path';

export default function (api: ConfigAPI) {
  api.cache.forever();
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        '@tamagui/babel-plugin',
        {
          components: ['tamagui'],
          config: path.resolve(__dirname, './tamagui.config.ts'),
          logTimings: true,
          disableExtraction: process.env.NODE_ENV === 'development',
        },
      ],
      // NOTE: this is only necessary if you are using reanimated for animations
      'react-native-reanimated/plugin',
    ],
  };
}