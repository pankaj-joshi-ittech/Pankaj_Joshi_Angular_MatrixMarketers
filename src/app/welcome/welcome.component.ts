import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  formGroup:FormGroup;

  constructor(
    private fb:FormBuilder,
    private router:Router
  ) { 
    this.formGroup = this.fb.group({
      user: ['',Validators.compose([Validators.required])],
    })
  }

  ngOnInit(): void {
  }

  handleUserSubmit(){
    if(this.formGroup.invalid){
      return;
    }

    if(this.formGroup.value.user === 'admin'){
      localStorage.setItem('user-role','admin');
      this.router.navigateByUrl('users');
    }
  }

}
