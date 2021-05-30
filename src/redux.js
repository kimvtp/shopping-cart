import { configureStore } from '@reduxjs/toolkit'
import usersReducer from '../features/users/usersSlice'
import submissionsReducer from '../features/submissions/submissionsSlice'
import topicsReducer from '../features/topics/topicsSlice'

export default configureStore({
    reducer: {
        users: usersReducer,
        submissions: submissionsReducer,
        topics: topicsReducer
    }
});