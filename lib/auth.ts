import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut as firebaseSignOut,
  updateProfile,
  User,
} from "firebase/auth";
import { auth } from "./firebase";

const googleProvider = new GoogleAuthProvider();

/**
 * Sign up a new user with email and password
 * @param email - User's email address
 * @param password - User's password
 * @param displayName - User's display name
 * @returns Promise that resolves with the user credential
 */
export async function signUpWithEmail(
  email: string,
  password: string,
  displayName: string
) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    
    // Update the user's display name
    if (displayName && userCredential.user) {
      await updateProfile(userCredential.user, {
        displayName: displayName,
      });
    }
    
    return { success: true, user: userCredential.user };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

/**
 * Sign in an existing user with email and password
 * @param email - User's email address
 * @param password - User's password
 * @returns Promise that resolves with the user credential
 */
export async function signInWithEmail(email: string, password: string) {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return { success: true, user: userCredential.user };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

/**
 * Sign in with Google OAuth
 * @returns Promise that resolves with the user credential
 */
export async function signInWithGoogle() {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return { success: true, user: result.user };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

/**
 * Sign out the current user
 * @returns Promise that resolves when sign out is complete
 */
export async function signOut() {
  try {
    await firebaseSignOut(auth);
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

/**
 * Update user profile information
 * @param displayName - User's display name
 * @returns Promise that resolves with success status
 */
export async function updateUserProfile(displayName: string) {
  try {
    const user = auth.currentUser;
    if (!user) {
      return { success: false, error: "No user is currently signed in." };
    }

    await updateProfile(user, {
      displayName: displayName,
    });

    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

/**
 * Get a user-friendly error message from Firebase error code
 * @param errorCode - Firebase error code
 * @returns User-friendly error message
 */
export function getAuthErrorMessage(errorCode: string): string {
  const errorMessages: { [key: string]: string } = {
    "auth/email-already-in-use": "This email is already registered. Please sign in instead.",
    "auth/invalid-email": "Please enter a valid email address.",
    "auth/operation-not-allowed": "Email/password accounts are not enabled. Please contact support.",
    "auth/weak-password": "Password should be at least 6 characters long.",
    "auth/user-disabled": "This account has been disabled. Please contact support.",
    "auth/user-not-found": "No account found with this email address.",
    "auth/wrong-password": "Incorrect password. Please try again.",
    "auth/invalid-credential": "Invalid email or password. Please try again.",
    "auth/too-many-requests": "Too many failed attempts. Please try again later.",
    "auth/network-request-failed": "Network error. Please check your connection and try again.",
    "auth/popup-closed-by-user": "Sign-in popup was closed. Please try again.",
    "auth/cancelled-popup-request": "Sign-in was cancelled. Please try again.",
  };

  return errorMessages[errorCode] || "An error occurred. Please try again.";
}

