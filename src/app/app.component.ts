import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {faFacebookF, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faHome, faL } from '@fortawesome/free-solid-svg-icons';
import {faAddressCard} from '@fortawesome/free-solid-svg-icons';
import {faGears} from '@fortawesome/free-solid-svg-icons';
import {faBuildingColumns} from '@fortawesome/free-solid-svg-icons';
import {faDiagramProject} from '@fortawesome/free-solid-svg-icons';
import {faAt} from '@fortawesome/free-solid-svg-icons';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {faPen } from '@fortawesome/free-solid-svg-icons';
import {faUser } from '@fortawesome/free-solid-svg-icons';
import {faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { TokenService } from './servicios/token.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
   
  faFacebookF = faFacebookF;
  faInstagram = faInstagram;
  faGithub = faGithub;
  faHome = faHome;
  faGears = faGears;
  faAddressCard = faAddressCard;
  faBuildingColumns = faBuildingColumns;
  faDiagramProject = faDiagramProject;
  faAt = faAt;
  faLinkedinIn = faLinkedinIn;
  faBars = faBars;
  faPen = faPen;
  faUser = faUser;
  faArrowRightToBracket = faArrowRightToBracket

  isLogged = false;
  

  constructor(private router:Router, private tokenService: TokenService){}

  ngOninit():void{
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else {
      this.isLogged = false;
    }
  }

  onLogOut():void {
    this.tokenService.logOut();
    window.location.reload();
  }

  login(){
    this.router.navigate(['/paginas/login']);
  }
}
