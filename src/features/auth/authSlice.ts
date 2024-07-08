import { createSlice } from "@reduxjs/toolkit"
import { User } from "../../app/types/user"

type State = {
    authentificated: boolean,
    currentUser: User | null
}

const initialState: State = {
    authentificated: false,
    currentUser: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signIn: (state, action) => {
            state.authentificated = true;
            state.currentUser = {
                email: action.payload.email,
                photoURL: '/user.png'
            }
        },
        signOut: (state) => {
            state.authentificated = false;
            state.currentUser = null;
        }

    }

})


export const { signIn, signOut } = authSlice.actions