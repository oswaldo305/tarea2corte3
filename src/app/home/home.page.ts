import { Component, OnInit } from '@angular/core';
import { SectionsI } from '../interfaces/sections-i';
import { NoticiasService } from '../services/noticias.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  

  constructor(notiServ:NoticiasService) { }

  ngOnInit() {
  }

  getNoticias(){
   
    
  }

}
