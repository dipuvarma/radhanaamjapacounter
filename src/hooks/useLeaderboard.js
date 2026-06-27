"use client";

import { useEffect, useState } from "react";
import { collection, query, orderBy, limit, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";

export const useLeaderboard = () => {
  const [leaders, setLeaders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      const q = query(
        collection(db, "users"),
        orderBy("lifetimeCount", "desc"),
        limit(50), // Top 50
      );
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map((doc, index) => ({
        rank: index + 1,
        uid: doc.id,
        ...doc.data(),
      }));
      setLeaders(data);
      setLoading(false);
    };

    fetchLeaderboard();
  }, []);

  return { leaders, loading };
};
