import { Status } from "@/lib/types/type"

export interface IInstituteCourseInitialDataCourse{
    coursePrice: string, 
    courseName: string, 
    courseDescription: string,
    courseDuration: string ,
    courseLevel: string
    courseId: string
}


export interface IInstituteCourseInitialData{
    course: IInstituteCourseInitialDataCourse[],
    status: Status
}