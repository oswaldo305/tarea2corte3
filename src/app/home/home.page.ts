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
  buscartexto = '';


  constructor(public noticiasService:NoticiasService) { 
    this.section = this.noticiasService.getSection();

   
  }

  ngOnInit() {
  }

  buscar(event){
    this.buscartexto = event.detail.value;
  }
}
