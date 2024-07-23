import { collection, doc, increment, writeBatch } from "firebase/firestore";
import { auth, db } from "../config/firebase";
import { Profile } from "../types/profile";


export async function batchFollowToggle(profile: Profile, follow: boolean) {
    const currentUser = auth.currentUser;
    if (!currentUser) throw Error('Must ne logged in to do');

    const followRef = collection(db, `profiles/${profile.id}/followers`);
    const followerProfileRef = doc(db, `profiles/${currentUser.uid}`);

    const followingRef = collection(db, `profiles/${currentUser.uid}/following`);
    const followingProfileRef = doc(db, `profiles/${profile.id}`);

    const batch = writeBatch(db);

    if (follow) {
        batch.update(followerProfileRef, { followingCount: increment(1) });
        batch.update(followingProfileRef, { followerCount: increment(1) });
        batch.set(doc(followRef, currentUser.uid), {
            displayName: currentUser.displayName,
            ...(currentUser.photoURL && { photoURL: currentUser.photoURL })
        });
        batch.set(doc(followingRef, profile.id), {
            displayName: profile.displayName,
            ...(profile.photoURL && { photoURL: profile.photoURL })
        });
    } else {
        batch.update(followerProfileRef, { followingCount: increment(-1) });
        batch.update(followingProfileRef, { followerCount: increment(-1) });
        batch.delete(doc(followRef, currentUser.uid));
        batch.delete(doc(followingRef, profile.id));
    }
    await batch.commit();
}