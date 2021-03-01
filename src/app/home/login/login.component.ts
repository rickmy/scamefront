import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  paciente: boolean = false;
  consultorio: boolean = false;
  login: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  loginPaciente(){
    this.login = false;
    this.consultorio = false;
    this.paciente = true;
    console.log({msj:"pronto..."})
  }

  loginConsultorio(){
    this.login = false;
    this.consultorio = true;
    this.paciente = false;
    console.log({msj:"pronto..."})
  }

}
