import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    "loggedInUser" : null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    'login': (state , action) => {
      
      state.loggedInUser = action.payload
    },
    'logout': (state , action) => {
      
        state.loggedInUser = null
      },
    "signUp": (state, action) => {
        let uniqueId = new Date().getTime();
            let updatedUsers = [...state.signUpUser, {...action.payload, id: uniqueId }]
            localStorage.setItem('users', JSON.stringify(updatedUsers))
            state.signUpUser = updatedUsers;
    },
  },
})

// Action creators are generated for each case reducer function
export const authActions = authSlice.actions

export default authSlice.reducer