import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IInitialTeacherData, ITeacherData } from "./teacherSlice.type";
import { Status } from "@/lib/types/type";

const initialState:IInitialTeacherData = {
    teacherData: {
        teacherName: "",
        teacherEmail: "",
        teacherPhoneNumber: ""
    },
    status: Status.LOADING
}
const teacherSlice = createSlice({
    name: "Teacher",
    initialState: initialState,
    reducers: {
        setTeacherData(state:IInitialTeacherData,action:PayloadAction<ITeacherData>){
            state.teacherData = action.payload
        },
        setStatus(state:IInitialTeacherData,action:PayloadAction<Status>){
            state.status = action.payload
        }
    }
})

const {setTeacherData, setStatus} = teacherSlice.actions
export default teacherSlice.reducer