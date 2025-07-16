import { useSelector } from "react-redux";


export default function Home() {

  //userslice ---> name, address ma j baseko chha tyo chaiyoo / fetch garnu paryo

  const userData = useSelector((store)=>store.userSlice)  // eti garepoxi userSLice ko acces payo ra teha vak data lai use garna paiyo

  const tecaherData = useSelector((hehe)=>hehe.teacherSlice) // eti garepoxi teacherSlice ko acces payo
  return (
   <h1 className="text-center">Haaha Hehehe Huuuu</h1>
  );
}
