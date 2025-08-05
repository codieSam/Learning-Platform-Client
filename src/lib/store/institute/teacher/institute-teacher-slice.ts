import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IInstituteTeacherDataWithCourse, IInstituteTeacherInitialData, IInstituteTeacherInitialDataTeacher, TeacherExpertise } from "./institute-teacher-type";
import { Status } from "@/lib/types/type";
import { retry } from "@reduxjs/toolkit/query";
import { AppDispatch } from "../../store";
import API from "@/lib/http";


const initialState:IInstituteTeacherInitialData = {
    teacher: {
        course: {
            courseName: "",
            courseThumbnai: "",
            courseType: ""
        },
        teacherEmail: "",
        teacherName: "",
        teacherExpertise: TeacherExpertise.Beginner,
        teacherPhoneNumber: "",
        joinDate: "",
        salary: "",
        teacherPhoto: ""

    },
    status: Status.LOADING

    
}

const instituteTeacherSlice = createSlice({
    name:"institute-teacher",
    initialState: initialState,
    reducers: {
        setStatus(state: IInstituteTeacherInitialData, action: PayloadAction<Status>){
            state.status = action.payload
        },
        setTeacher(state:IInstituteTeacherInitialData, action: PayloadAction<IInstituteTeacherDataWithCourse>){
            state.teacher = action.payload
        }
    }
})


const {setStatus, setTeacher} = instituteTeacherSlice.actions
export default instituteTeacherSlice.reducer


export function createInstituteTeacher(data: IInstituteTeacherInitialDataTeacher){
    return async function createInstituteTeacherThunk(dispatch: AppDispatch){
        try{
          const response =  await API.post("institute/teacher", data)
          if(response.status === 201){
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

export function getInstituteTeacher(){
    return async function getInstituteTeacherThunk(dispatch: AppDispatch){
        try{
const response = await API.get("institute/teacher")
        if(response.status === 201){
            dispatch(setStatus(Status.SUCCESS))
           response.data.data.length > 0 &&  dispatch(setTeacher(response.data.data))
        }else{
            dispatch(setStatus(Status.ERROR))
        }
        }catch(e){
            console.log(e)
            dispatch(setStatus(Status.ERROR))
        }
    }
}

export function deleteInstituteTeacher(id: string){
    return async function deleteInstituteTeacherThunk(dispatch:AppDispatch){
        try{
            const response = await API.delete("institute/teacher/" + id)
            if(response.status === 201){
                dispatch(setStatus(Status.SUCCESS))
                // popout teacher of that id from slice also
            }else{
                dispatch(setStatus(Status.ERROR))
            }
        }catch(e){
            console.log(e)
             dispatch(setStatus(Status.ERROR))
        }
    }
}