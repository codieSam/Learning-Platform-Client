// collects all slices in store

import { configureStore } from "@reduxjs/toolkit";
import userSlice from './userSlice'
import studentSlice from './studentSlice'
import teacherSlice from './teacherSlice'
import instituteSlice from './instituteSlice'
const store = configureStore({
    reducer: {
        userSlice: userSlice,
        studentSlice: studentSlice,
        // teacherSlice: teacherSlice,
        // instituteSlice: instituteSlice
    }
})

export default store

export type AppDispatch = typeof store.dispatch
