import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IInstituteData, IInstituteInitialData } from "./instituteSlice.type";
import { Status } from "@/lib/types/type";

const initialState: IInstituteInitialData= {
    institute: {
        instituteName: "",
        instituteEmail: "",
        instituteAddress: "",
        institutePhoneNumber: ""
    },
    status: Status.LOADING,

    
}

const instituteSlicce = createSlice({
    name: "Institute",
    initialState: initialState,
    reducers: {
        setInstitute(state:IInstituteInitialData, action:PayloadAction<IInstituteData>){
            state.institute = action.payload
        },
        setStatus(state:IInstituteInitialData, action:PayloadAction<Status>){
            state.status = action.payload
        }
    }
})

const {setInstitute, setStatus} = instituteSlicce.actions
export default instituteSlicce.reducer