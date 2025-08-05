import { Status } from "@/lib/types/type";

export enum TeacherExpertise {
    Beginner = "beginner",
    Intermediate = "intermediate",
    Pro = "pro"
}

interface IInstituteTeacherInitialDataTeacherCourse{
    courseName: string,
    courseType: string,
    courseThumbnai: string
}

export interface IInstituteTeacherInitialDataTeacher{
    teacherName: string | null,
    teacherEmail: string | null,
    teacherPhoneNumber: string,
    teacherExpertise: TeacherExpertise | null,
    teacherPhoto: string,
    joinDate: string,
    salary: string,
   
        }

  export interface IInstituteTeacherDataWithCourse extends IInstituteTeacherInitialDataTeacher{
    course ?: IInstituteTeacherInitialDataTeacherCourse
  }      

export interface IInstituteTeacherInitialData{
    teacher: IInstituteTeacherDataWithCourse,
    status: Status
}