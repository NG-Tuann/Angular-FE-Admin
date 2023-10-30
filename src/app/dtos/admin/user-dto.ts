export class UserDto {
    id:number;
    username: string;
    password: string;
    fullname: string;
    dob: Date;
    phone: string;
    idCard:string;
    idRole: number;

    constructor(){
        this.id = 0;
        this.username = '';
        this.password = '';
        this.fullname = '';
        this.dob = null;
        this.phone = '';
        this.idCard = '';
        this.idRole = 0;
    }
}