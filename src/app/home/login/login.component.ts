import { Component, OnInit } from '@angular/core';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @BlockUI() blockUI: NgBlockUI;

  paciente: boolean = false;
  consultorio: boolean = false;
  login: boolean = true;
  value6: string;

  constructor() { }

  ngOnInit(): void {

  }

  loginPaciente(){

    this.blockUI.start('Cargando...'); // Start blocking

    setTimeout(() => {
      this.blockUI.stop(); // Stop blocking
    }, 2000);
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
