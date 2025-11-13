// Import the functions you need from the SDKs you need
import { initializeApp, FirebaseApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Helper function to clean and get environment variables
const getEnvVar = (key: string, fallback: string = ""): string => {
  const value = process.env[key];
  if (!value) return fallback;
  // Remove surrounding quotes (single or double) and trim whitespace
  return value.replace(/^["']|["']$/g, "").trim() || fallback;
};

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: getEnvVar("NEXT_PUBLIC_FIREBASE_API_KEY", "AIzaSyA-hdAHsqHcs2XSr-dtauH_6ZSWQM0U2KM"),
  authDomain: getEnvVar("NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN", "jobcracker-e2f2c.firebaseapp.com"),
  projectId: getEnvVar("NEXT_PUBLIC_FIREBASE_PROJECT_ID", "jobcracker-e2f2c"),
  storageBucket: getEnvVar("NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET", "jobcracker-e2f2c.firebasestorage.app"),
  messagingSenderId: getEnvVar("NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID", "137467666435"),
  appId: getEnvVar("NEXT_PUBLIC_FIREBASE_APP_ID", "1:137467666435:web:8aa1f86b95df175a4eae36"),
  measurementId: getEnvVar("NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID", "G-PQPB76G2J2")
};

// Validate that required config values are present
if (!firebaseConfig.apiKey || !firebaseConfig.authDomain || !firebaseConfig.projectId) {
  console.error("Firebase configuration is missing required values. Please check your .env file.");
  console.error("Current config:", {
    apiKey: firebaseConfig.apiKey ? `${firebaseConfig.apiKey.substring(0, 10)}...` : "MISSING",
    authDomain: firebaseConfig.authDomain || "MISSING",
    projectId: firebaseConfig.projectId || "MISSING",
  });
}

// Log configuration source in development (first 10 chars of API key only)
if (process.env.NODE_ENV === "development") {
  const usingEnv = process.env.NEXT_PUBLIC_FIREBASE_API_KEY ? "environment variables" : "fallback values";
  console.log(`Firebase initialized using ${usingEnv}`);
}

// Initialize Firebase
let app: FirebaseApp;
try {
  app = initializeApp(firebaseConfig);
} catch (error) {
  console.error("Failed to initialize Firebase:", error);
  throw error;
}

// Initialize Analytics only on client side
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      getAnalytics(app);
    }
  }).catch(() => {
    // Analytics initialization failed, continue without it
  });
}

// Initialize Firebase Auth
export const auth = getAuth(app);

// Export app for use in other files if needed
export { app };