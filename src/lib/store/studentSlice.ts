import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
  dispatch(setStudentName("Manish"))
  dispatch(setStudentEmail("sam@gmail.com"))
  dispatch(setStudentPhone("9864553134"))
export { setStudentEmail, setStudentPhone, setStudentName };

export default studentSlice.reducer;
