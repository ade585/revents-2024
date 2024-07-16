import { Button, Icon } from "semantic-ui-react"
import { useFireStore } from "../../app/hooks/firestore/useFirestore"
import { useAppDispatch } from "../../app/store/store";
import { AuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth/web-extension";
import { Timestamp } from "firebase/firestore";
import { auth } from "../../app/config/firebase";
import { toast } from "react-toastify";
import { closeModal } from "../../app/common/modal/modalSlice";
import { useState } from "react";

export default function SocialLogin() {
    const [status, setStatus] = useState<any>({
        loading: false,
        provider: null
    })
    const { set } = useFireStore('profiles');
    const dispatch = useAppDispatch();

    async function handleSocialLogin(selectedProvider: string) {
        setStatus({ loading: true, provider: selectedProvider });
        let provider: AuthProvider;
        if (selectedProvider == 'github') {
            provider = new GithubAuthProvider();
        } else if (selectedProvider == 'google') {
            provider = new GoogleAuthProvider();
        } else return;
        try {
            if (provider) {
                const result = await signInWithPopup(auth, provider);
                console.log(result);
                if (result.user.metadata.creationTime == result.user.metadata.lastSignInTime) {
                    await set(result.user.uid, {
                        displayName: result.user.displayName,
                        email: result.user.email,
                        createdAt: Timestamp.now(),
                        photoURL: result.user.photoURL
                    })
                }
                dispatch(closeModal());
            }

        } catch (error: any) {
            console.log(error);
            toast.error(error.message)
        } finally {
            setStatus({ loading: false, provider: null });
        }
    }

    return (
        <>
            <Button
                type='button'
                fluid
                color='black'
                style={{ margingBottom: 10 }}
                loading={status.loading && status.provider === 'github'}
                onClick={() => handleSocialLogin('github')}
            >
                <Icon name='github' /> Login with Github
            </Button>
            <Button
                type='button'
                fluid
                color='google plus'
                style={{ margingBottom: 10 }}
                loading={status.loading && status.provider === 'google'}
                onClick={() => handleSocialLogin('google')}
            >
                <Icon name='google' /> Login with Google
            </Button>
        </>
    )
}