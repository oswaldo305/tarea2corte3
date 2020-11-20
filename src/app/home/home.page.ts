import { Component, OnInit } from '@angular/core';
import { CategoriasI } from '../interfaces/categorias-i';
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
  categoria:Array<CategoriasI> = [];


  constructor(public noticiasService:NoticiasService) { 
    this.section = this.noticiasService.getSection();
    this.noticia = this.noticiasService.getNoticias();
    this.categoria = this.noticiasService.getCategorias();
    //console.log(this.noticia);
  }

  ngOnInit() {
  }


}
