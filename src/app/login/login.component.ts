import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/admin/auth.service';
import { LoaderService } from '../loader/loader.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  token: string;

  /**
   *
   */
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    public loaderService: LoaderService
  ) {
      
  }

  ngOnInit(): void {
    this.initForm();
  }

  submit():void {
    if(this.form.valid) {
      const usernameValue = this.form.get('username').value;
      const passwordValue = this.form.get('password').value;

      this.authService.login(usernameValue,passwordValue).subscribe((result: string) => {

          if(result == 'invalid_user') {
            alert('Invalid user');
          }
          else if(result == 'invalid_password') {
            alert('Invalid password');
          }
          else {
            this.token = result;
            localStorage.setItem('token', this.token);
            this.router.navigate(['/admin/dashboard']);
          }
      });
    }
    else {
      alert('Fill in both field');
    }
  }

  initForm() {
    this.form = this.formBuilder.group({
      username:['', Validators.required],
      password:['', Validators.required]
    });
  }

  popUpError(err: string) {
    alert(err);
  }

}
