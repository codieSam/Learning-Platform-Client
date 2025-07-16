import { createSlice } from "@reduxjs/toolkit";

interface IUserInitialState {
    name: string | null,
    address: string | null
}


const userInitialState : IUserInitialState=  {
        name: null,
        address: null
    }

const userSlice = createSlice({

    name: "userSlice",
    initialState:userInitialState,
    reducers: {
        setName(state:IUserInitialState, action){
            state.name = "Samrat"
        },
        //state: Mathi ko initial data
        //action: function trigger garda as a parameter janey data is action ho
        setAddress(state: IUserInitialState, action){
            state.address = "Kathmandu"
        }
    }
    // initaialState ma starting default value k rakhney vanerw diney garinxa just like in useState(). --> const [name, setName] = useState(null)
    // reducres vanya kei auta fucntion ho jasle chai kei kaam garxa


})

const  {setName, setAddress} = userSlice.actions
export {setName, setAddress}
export default userSlice.reducer