import { Role } from "./role";

export class User {
    id:number;
    username: string;
    password: string;
    fullname: string;
    dob: Date;
    phone: string;
    idCard:string;
    idRole: number;
    role: Role;

    constructor(idUser:number,userName:string, passWord:string,fullname:string, dateOfBirth:Date, usrPhone:string, idUsrCard:string, idUsrRole:number, roler:Role ){
        this.id = idUser;
        this.username = userName;
        this.password = passWord;
        this.fullname = fullname;
        this.dob = dateOfBirth;
        this.phone = usrPhone;
        this.idCard = idUsrCard;
        this.idRole = idUsrRole;
        this.role = roler;
    }
}