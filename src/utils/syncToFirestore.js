import { doc, updateDoc } from "firebase/firestore";
import { db, auth } from "@/lib/firebase";
import { increment } from "firebase/firestore";

export const syncCountToFirestore = async (
  countToAdd = 1,
  dateStr,
  newDailyCount,
) => {
  const user = auth.currentUser;
  if (!user) return;

  const userRef = doc(db, "users", user.uid);
  await updateDoc(userRef, {
    lifetimeCount: increment(countToAdd),
    [`dailyStats.${dateStr}.count`]: increment(countToAdd),
    [`dailyStats.${dateStr}.malas`]: Math.floor(newDailyCount / 108),
  });
};
