import { Status } from "@/lib/types/type"


export interface IUserData{
    username: string,
    // email: string,
    password: string
}



export interface IInitialState{
   user: IUserData,
   status: Status
}

export interface IRegsterData extends IUserData{
    email: string
}

export interface ILoginData  extends IUserData{
    
}