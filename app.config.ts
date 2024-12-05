import 'dotenv/config';

export default {
  expo: {
    name: "crier",
    slug: "crier",
    version: "1.0.0",
    extra: {
      CRIER_FIREBASE_API_KEY: process.env.CRIER_FIREBASE_API_KEY,
      CRIER_FIREBASE_AUTH_DOMAIN: process.env.CRIER_FIREBASE_AUTH_DOMAIN,
      CRIER_FIREBASE_PROJECT_ID: process.env.CRIER_FIREBASE_PROJECT_ID,
      CRIER_FIREBASE_STORAGE_BUCKET: process.env.CRIER_FIREBASE_STORAGE_BUCKET,
      CRIER_FIREBASE_MESSAGING_SENDER_ID: process.env.CRIER_FIREBASE_MESSAGING_SENDER_ID,
      CRIER_FIREBASE_APP_ID: process.env.CRIER_FIREBASE_APP_ID,
      CRIER_FIREBASE_MEASUREMENT_ID: process.env.CRIER_FIREBASE_MEASUREMENT_ID,
    },
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: "myapp",
    userInterfaceStyle: "automatic",
    newArchEnabled: true,
    screens: {
      "./user-type/*": {
        headerShown: false
      }
    },
    ios: {
      supportsTablet: true
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/images/adaptive-icon.png",
        backgroundColor: "#ffffff"
      }
    },
    web: {
      bundler: "metro",
      output: "static",
      favicon: "./assets/images/favicon.png"
    },
    plugins: [
      "expo-router",
      [
        "expo-splash-screen",
        {
          image: "./assets/images/splash-icon.png",
          imageWidth: 200,
          resizeMode: "contain",
          backgroundColor: "#ffffff"
        }
      ],
      "expo-font"
    ],
    experiments: {
      typedRoutes: true
    }
  }
};