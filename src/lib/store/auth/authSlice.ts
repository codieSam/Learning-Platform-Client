import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IInitialState, ILoginData, IUserData } from "./authSlice.type";
import { Status } from "@/lib/types/type";
import API from "@/lib/http";
import { IRegisterdata } from "@/app/auth/register/register.type";
import { AppDispatch } from "../store";
const initialState:IInitialState = {
    user: {
        username: "",
        token: ""
    },
    status: Status.LOADING
}
const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        setUser(state:IInitialState,action:PayloadAction<IUserData>){
            state.user = action.payload
        },
        setStatus(state:IInitialState,action:PayloadAction<Status>){
            state.status = action.payload
        }
    }

})

const {setUser, setStatus} = authSlice.actions
export default authSlice.reducer

export function registerUser(data:IRegisterdata){
    return async function registerUserThunk(dispatch:AppDispatch){
        try{
            const response = await API.post("/auth/register", data)
            if(response.status === 201){
                // k garney tw
                dispatch(setStatus(Status.SUCCESS))
            }else{
                dispatch(setStatus(Status.ERROR))
            }
        }catch(e){
            console.log(e)
            dispatch(setStatus(Status.ERROR))
        }
    }
}

export function loginUser(data:ILoginData){
    return async function loginUserThunk(dispatch:AppDispatch){
        try{
            const response  =await API.post("/auth/login", data)
            if(response.status === 200){
                dispatch(setUser(response.data.data))
                //set into localstorage
                localStorage.setItem("token",response.data.data.token)
                dispatch(setStatus(Status.SUCCESS))
              
            }else{
                dispatch(setStatus(Status.ERROR))
            }
        }catch(e){
            console.log(e)
             dispatch(setStatus(Status.ERROR))
        }
    }
}