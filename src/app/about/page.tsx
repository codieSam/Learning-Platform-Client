import { setStudentEmail, setStudentName, setStudentPhone } from "@/lib/store/studentSlice"

function About(){
    const studentName = "smrat"
    const studentEmail = "absdg@gmail.com"
    const studentPhone = "9875444645"

    setStudentName(),
    setStudentEmail(),
    setStudentPhone()
    
    return(
        <h1>This is about page !</h1>
    )
}

export default About