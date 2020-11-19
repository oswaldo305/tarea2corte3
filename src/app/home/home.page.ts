import { Component, OnInit } from '@angular/core';
import { SectionsI } from '../interfaces/sections-i';
import { NoticiasService } from '../services/noticias.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  
  section:Array<SectionsI> = [];


  constructor(public noticiasService:NoticiasService) { 
    this.section = this.noticiasService.getNoticias();
  }

  ngOnInit() {
  }


}
