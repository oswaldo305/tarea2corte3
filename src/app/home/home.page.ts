import { Component, OnInit } from '@angular/core';
import { NoticiasI } from '../interfaces/noticias-i';
import { SectionsI } from '../interfaces/sections-i';
import { NoticiasService } from '../services/noticias.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  
  section:Array<SectionsI> = [];
  noticia:Array<NoticiasI> = [];


  constructor(public noticiasService:NoticiasService) { 
    this.section = this.noticiasService.getSection();
    this.noticia = this.noticiasService.getNoticias();
    console.log(this.noticia);
    console.log(this.section);
  }

  ngOnInit() {
  }


}
