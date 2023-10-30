import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserDto } from 'src/app/dtos/admin/user-dto';
import { Role } from 'src/app/models/admin/role';
import { User } from 'src/app/models/admin/user';
import { RoleService } from 'src/app/services/admin/role.service';
import { UserService } from 'src/app/services/admin/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  selectedDate:string = '2023-01-01';

  @Input() user : UserDto;

  title: string;

  roles : Role[];

  // Moi khi thuc hien xong se tra lai mang danh sach san pham 
  @Output() usersUpdated? = new EventEmitter<User[]>();

  constructor(
    private userService:UserService,
    private roleService:RoleService
    ){
    }
  ngOnInit(): void {

    // init tilte
    this.title = 'Create/Update user';

    // Lay ve danh sach cac role
    this.roleService.findAllRole().subscribe((result:Role[])=> {
      this.roles = result;
    });
  }
  
  formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = this.padZero(date.getMonth() + 1);
    const day = this.padZero(date.getDate());
    return `${year}-${month}-${day}`;
  }
  onDateChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.user.dob = new Date(inputElement.value); // Cập nhật giá trị của trường 'idCard'
  }

  // Hàm đệm số 0 cho tháng và ngày nếu cần thiết
  padZero(value: number): string {
    return value.toString().padStart(2, '0');
  }

  closeModal() {
    this.user = null;
  }

  createNewUser(user:UserDto) { 
    this.userService.createNewUser(user).subscribe((result:User[])=> {
      this.usersUpdated.emit(result);
    });
    this.closeModal();
  }

  updateUser(user:UserDto) {
    this.userService.updateUser(user).subscribe((result:User[])=> {
      this.usersUpdated.emit(result);
    });
    this.closeModal();
  }

}
