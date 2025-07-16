import { createSlice } from "@reduxjs/toolkit";

interface ITeachInitialState{
    teacherName: string | null,
    teacherPassword: string | null
}
const teacherInitialData : ITeachInitialState =  {
        teacherName: null,
        teacherPassword: null
        
    }

const teacherSlice = createSlice({
    name: "teacherSlice",
    initialState: teacherInitialData,

    reducers : {
        setTeacherName (state:ITeachInitialState, action){
            state.teacherName = "Samrat"
        },
        setTeacherPassword (state:ITeachInitialState, action){
            state.teacherPassword = "123"
        }
    }
})

// const teacherName = teacherSlice.actions.setTeacherName
// const teacherPassword = teacherSlice.actions.setTeacherPassword


const {setTeacherName, setTeacherPassword} = teacherSlice.actions
export {setTeacherName,setTeacherPassword}

export default teacherSlice.reducer
// const teacherSlice = esle diney object esto huncha jun pahila redux ma lekhnu parthyo manually but ahile pardaina !!



// actions: {
//     setTeacherName: (){},
//     setTeacherPassword: (){}
// }

//cerateSlice functon always return an object  jaha vitra
//actions haru automatic generate vayerw aairako huncha

//Note: reducer ko name j cha , action ko name pani same tehi 
// nai huncha action invoke garne bitikai vitra reducer automatic call huncha !!


/*
Flow: 

reducers banda---> action pani banxa
reducers sanga--> communication garna--> action is required
always action is called not reducers

*/