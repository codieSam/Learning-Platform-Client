import { createSlice } from "@reduxjs/toolkit";

const instituteInitialSlice = {
    instituteName: "",

}

const instituteSlice = createSlice({
    name: "Institute",
    initialState: instituteInitialSlice,
    reducers: {
        setInstituteName(state, action){
            state.instituteName = "BBC"
        }
    }
    
})

const {setInstituteName} = instituteSlice.actions
export {setInstituteName}
export default instituteSlice.reducer
