import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { SupabaseService } from '../../../services/auth/supabase.service';
import { GlobalsService } from '../../../services/globals/globals.service';
import { fadingAnimation } from '../../../helpers/animations';
import { NgxUiLoaderModule, SPINNER } from 'ngx-ui-loader';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule, NgxUiLoaderModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  animations: [fadingAnimation],
})
export class LoginComponent {
  SPINNER = SPINNER;
  loginForm = {} as FormGroup;

  constructor(
    private fb: FormBuilder,
    private supabase: SupabaseService,
    private globals: GlobalsService,
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {}

  signInWithGitHub() {
    this.supabase.signInWithGithub().then((res) => {
      console.log(res);
    });
  }

  logOut() {
    this.globals.loader.start();
    this.supabase.signOut().then(() => {
      this.globals.loader.stopAll();
      this.globals.router.navigate(['/']);
    });
  }

  handleError(controlName: string, errorName: string) {
    const control = this.loginForm.controls[controlName];
    return (control.touched || control.dirty) && control.hasError(errorName);
  }
}
