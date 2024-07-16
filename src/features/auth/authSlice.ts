import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { AppUser } from "../../app/types/user"
import { User } from "firebase/auth"

type State = {
    authentificated: boolean,
    currentUser: AppUser | null
}

const initialState: State = {
    authentificated: false,
    currentUser: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signIn: {
            reducer: (state, action: PayloadAction<AppUser>) => {
                state.authentificated = true;
                state.currentUser = action.payload
            },
            prepare: (user: User) => {
                const mapped: AppUser = {
                    uid: user.uid,
                    email: user.email,
                    photoURL: user.photoURL,
                    displayName: user.displayName,
                    providerId: user.providerData[0].providerId
                }
                return { payload: mapped }
            }
        },
        logout: (state) => {
            state.authentificated = false;
            state.currentUser = null;
        }

    }

})


export const { signIn, logout } = authSlice.actions