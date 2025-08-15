import { createSlice } from '@reduxjs/toolkit';

type Role = 'buyer' | 'seller' | 'admin';
type User = { id: string; name: string; role: Role } | null;

type AuthState = { token: string | null; user: User };
const initialState: AuthState = { token: null, user: null };

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action: { payload: { token: string; user: User } }) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    signOut: (state) => { state.token = null; state.user = null; }
  }
});

export const { setCredentials, signOut } = slice.actions;
export default slice.reducer;
