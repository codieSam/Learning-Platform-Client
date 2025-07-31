// collects all slices in store

import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";
import instituteSlice from "./institute/instituteSlice";
import teacherSlice from "./teacher/teacherSlice";

const store = configureStore({
    reducer: {
      auth: authSlice,
      institute: instituteSlice,
      teahcer: teacherSlice
    }
})

export default store
//dispatch ko type poxi kam lagxa hamilai
export type AppDispatch = typeof store.dispatch    //useDispatch lai 
export type RootState  = ReturnType<typeof store.getState>  //useSelector lai

