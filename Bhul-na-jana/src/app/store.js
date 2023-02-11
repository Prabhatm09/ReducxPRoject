import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../components/features/authriosed/authSlice'

export default configureStore({
  reducer: {
    auth: authReducer,
  },
})