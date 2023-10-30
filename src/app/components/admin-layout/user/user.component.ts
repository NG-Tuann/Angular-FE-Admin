import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UserDto } from 'src/app/dtos/admin/user-dto';
import { User } from 'src/app/models/admin/user';
import { UserService } from 'src/app/services/admin/user.service';
import { LoaderService } from 'src/app/loader/loader.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[];

  userToEdit: UserDto;

  constructor(
    private userService : UserService,
    public loaderService: LoaderService
    ) {}
  ngOnInit(): void {
    this.onLoadUsers();
    this.hideContextMenuWhenClickOnScreen();
    this.doSthWhenClickEsc();
  }

  onLoadUsers() {
    this.userService.findAllUser().subscribe((result : User[]) => {
      this.users = result;
      console.log(this.users);
    });
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    const datePipe = new DatePipe('en'); // Chọn ngôn ngữ bạn muốn sử dụng
    return datePipe.transform(date, 'dd/MM/yyyy') || '';
  }

  formatExactDate(dateString: string): Date {
    const date = new Date(dateString);
    return date;
  }

  deleteUser(id:number) {

  }

  initNewUser() {
    this.userToEdit = new UserDto();
    console.log(this.userToEdit);
  }

  reloadUserList(result:User[]) {
    this.users = result;
  }

  onRowClick(user: User){

    console.log(user);

    this.userToEdit = new UserDto();
    this.userToEdit.id = user.id;
    this.userToEdit.username = user.username;
    this.userToEdit.password = user.password;
    this.userToEdit.fullname = user.fullname;
    this.userToEdit.phone = user.phone;
    this.userToEdit.idCard = user.idCard;
    this.userToEdit.idRole = user.idRole;
    this.userToEdit.dob = this.formatExactDate(user.dob.toString());
  }

  showContextMenu(evt: any) {
    evt.stopPropagation(); // Ngan su kien lan ra row click

    // Lay ve menu hien tai
    const menu = evt.currentTarget as HTMLButtonElement;
    const targetElement = menu.querySelector('.side-context-option-menu') as HTMLElement;

    if (targetElement) {
      // Khi click len menu side context thi remove het cac class show vi moi lan chi xem dc 1 menu
      const contextMenuElements = document.querySelectorAll('.side-context-option-menu');
        contextMenuElements.forEach(element => {
          if(element != targetElement) {
            element.classList.remove('show-context');
          }
        });
        targetElement.classList.add('show-context');
    }
  }


  hideContextMenuWhenClickOnScreen() {
    document.body.addEventListener('click', function() {
      const contextMenuElements = document.querySelectorAll('.side-context-option-menu');
      contextMenuElements.forEach(element => {
        element.classList.remove('show-context');
      });
    }, true); 
  }

  doSthWhenClickEsc() {
    document.body.addEventListener('keyup', function(e) {
      if(e.key === "Escape") {
        // Hide context menu
        const contextMenuElements = document.querySelectorAll('.side-context-option-menu');
        contextMenuElements.forEach(element => {
         element.classList.remove('show-context');
        });
      }
    }, true); 
  }
}
