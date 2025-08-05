import { Status } from "@/lib/types/type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "../../store";
import API from "@/lib/http";
import { IInstituteCourseInitialData } from "./institute-course-type";
import { count } from "console";
import { stat } from "fs";
const  initialState:IInstituteCourseInitialData  = {
    status: Status.LOADING,
    course: []
}

const instituteCourseSlice = createSlice({
    name: "institute-course-slice",
    initialState: initialState,
    reducers: {
        setStatus(state, action: PayloadAction<Status>){
            state.status = action.payload
        },
        setCourse(state, action:PayloadAction<any>){
            state.course = action.payload
        },
        setDeleteCourse(state, action:PayloadAction<string>){
            // id  --> tala bata ayeko id
           const index = state.course.findIndex(course => course.courseId = action.payload)
           if(index != -1){ // if index fnd vayo vaney matrai kam gar (ndex = -1 , when there is not found any in index !)
             state.course.splice(index,1)// splice = cut
           }
           
          
        },
        setEditCourse(state, action:PayloadAction<any>){
            const id = action.payload.id
            const data = action.payload.data
            const index = state.course.findIndex(course => course.courseId = id )
            if(index != -1){
            state.course[index] = data
           }
            
        }
        
    }
})

const {setStatus, setCourse, setDeleteCourse, setEditCourse} = instituteCourseSlice.actions
export default instituteCourseSlice.reducer


// thunks

export function createInstituteCourse (data:any){
    return async function createInstituteCourseThunk(dispatch:AppDispatch){
        try{
            const response = await API.post("institute/course", data)
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

export function getInstituteCourse (){
    return async function getInstituteCourseThunk(dispatch:AppDispatch){
        try{
            const response = await API.get("institute/course")
            if(response.status === 201){
                dispatch(setStatus(Status.SUCCESS))
               response.data.data.length > 0 &&  dispatch(setCourse(response.data.data))
            }else{
                dispatch(setStatus(Status.ERROR))
                
            }
        }catch(e){
            console.log(e)
            dispatch(setStatus(Status.ERROR))
        }
    }
}

export function deleteInstituteCourse (id:string){
    return async function deleteInstituteCourseThunk(dispatch:AppDispatch){
        try{
            const response = await API.get("institute/course/" + id)
            if(response.status === 201){
                dispatch(setStatus(Status.SUCCESS))
               dispatch(setDeleteCourse(id))
            }else{
                dispatch(setStatus(Status.ERROR))
                
            }
        }catch(e){
            console.log(e)
            dispatch(setStatus(Status.ERROR))
        }
    }
}


export function editInstituteCourse (id: string, data:any){
    return async function editInstituteCourseThunk(dispatch:AppDispatch){
        try{
            const response = await API.post("institute/course" + id, data)
            if(response.status === 201){
                dispatch(setStatus(Status.SUCCESS))
                dispatch(setEditCourse({id:id, data:data}))
            }else{
                dispatch(setStatus(Status.ERROR))
            }
        }catch(e){
            console.log(e)
            dispatch(setStatus(Status.ERROR))
        }
    }
}