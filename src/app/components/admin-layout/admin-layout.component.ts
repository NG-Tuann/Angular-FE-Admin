import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent {
  constructor(
    private router: Router,
  ) {
      
  }

  logout(): void {
    // Xóa token trong localStorage khi đăng xuất
    if(confirm('Are you sure ?')){
      localStorage.removeItem('token');
      this.router.navigate(['/login']);  
    }
  }
}
