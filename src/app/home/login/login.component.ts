import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  cdPaciente: string;
  passPaciente: string;


  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  loginPaciente(){

    this.blockUI.start('Cargando...'); // Start blocking

    setTimeout(() => {
      this.blockUI.stop(); // Stop blocking
    }, 1000);
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

  loginP(){
    console.log(this.cdPaciente , this.passPaciente)
    if(this.cdPaciente === '1726773623' && this.passPaciente === 'Rick0812'){
      this.router.navigate(['/'])
    }else{
      alert('Contraseña invalida')
    }

  }

}
