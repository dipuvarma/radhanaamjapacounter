"use client";

import { useState, useEffect } from "react";
import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { auth, db, googleProvider } from "@/lib/firebase";

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, googleProvider);
    const firebaseUser = result.user;

    // LocalStorage se data uthao
    const localData = JSON.parse(
      localStorage.getItem("japa_analytics_db") || "{}",
    );

    const userRef = doc(db, "users", firebaseUser.uid);
    const existing = await getDoc(userRef);

    if (existing.exists()) {
      // Already signed in before → merge karo (max lelo dono ka)
      const firestoreData = existing.data();
      await setDoc(
        userRef,
        {
          ...firestoreData,
          name: firebaseUser.displayName,
          photoURL: firebaseUser.photoURL,
          email: firebaseUser.email,
          lifetimeCount: Math.max(
            firestoreData.lifetimeCount || 0,
            localData?.summary?.lifetimeCount || 0,
          ),
          // dailyStats bhi merge karo
          dailyStats: {
            ...localData?.dailyStats,
            ...firestoreData.dailyStats,
          },
        },
        { merge: true },
      );
    } else {
      // Pehli baar sign in → LocalStorage ka poora data save karo
      await setDoc(userRef, {
        name: firebaseUser.displayName,
        photoURL: firebaseUser.photoURL,
        email: firebaseUser.email,
        lifetimeCount: localData?.summary?.lifetimeCount || 0,
        lifetimeDuration: localData?.summary?.lifetimeDuration || 0,
        currentStreak: localData?.summary?.currentStreak || 0,
        longestStreak: localData?.summary?.longestStreak || 0,
        lastChantedDate: localData?.summary?.lastChantedDate || null,
        dailyStats: localData?.dailyStats || {},
      });
    }
  };

  const logout = () => signOut(auth);

  return { user, loading, signInWithGoogle, logout };
};
