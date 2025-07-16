import { setName } from "@/lib/store/userSlice"
import { useDispatch } from "react-redux"

function Contact(){
      let userName = "Himal"

      // to manipulate data into the slicers, useDispatch() hook is required form react-redux
      const dispatch = useDispatch()
      dispatch(setName(userName))   //tw dispatch ley aaba username lai laegrw slicers ma raheko name ma update gardey la

   return(

     <h1>This is contact page !</h1>
     )
}
   
export default Contact