import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { INcomingUserPayload } from "./type";
interface IStudentInitialState {
    studentName: string | null,
    studentEmail: string| null,
    studentPhone: string | null
}


const studentInitialState:IStudentInitialState = {
  studentName: "",
  studentEmail: "",
  studentPhone: ""
};

const studentSlice = createSlice({
  name: "studentSlice",
  initialState: studentInitialState,
  reducers: {
    setStudentName(state:IStudentInitialState, action:PayloadAction<string>) {
      state.studentName = action.payload ;
    },
    setStudentEmail(state:IStudentInitialState, action:PayloadAction<string>) {
      state.studentEmail = action.payload;
    },
    setStudentPhone(state:IStudentInitialState, action:PayloadAction<string>) {
      state.studentPhone = action.payload;
    },
  },
});

const { setStudentName, setStudentEmail, setStudentPhone } =
  studentSlice.actions;
 
export { setStudentEmail, setStudentPhone, setStudentName };

export default studentSlice.reducer;
