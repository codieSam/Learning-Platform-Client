import { createSlice } from "@reduxjs/toolkit";

createSlice({
    name: "userSlice",
    initialState: {
        name: null,
        address: null
    },
    reducers: {
        setName(state, action){
            state.name = "Samrat",

        },
        //state: Mathi ko initial data
        //action: function trigger garda as a parameter janey data is action ho
        setAddress(state, action){
            state.address = "Arghakhanchi"
        }
    }
    // initaialState ma starting default value k rakhney vanerw diney garinxa just like in useState(). --> const [name, setName] = useState(null)
    // reducres vanya kei auta fucntion ho jasle chai kei kaam garxa


})