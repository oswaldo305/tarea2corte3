import { Component, OnInit, ɵConsole } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoticiasI } from '../interfaces/noticias-i';
import { SectionsI } from '../interfaces/sections-i';
import { NoticiasService } from '../services/noticias.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {

  //section: Array<SectionsI> = [];
  noticia: Array<NoticiasI> = [];

  id: number;
  img:string;
  content:string;
  titulo:string;
  constructor(public noticiasService: NoticiasService,
    public activeR: ActivatedRoute) {
    //this.section = this.noticiasService.getSection();

  }

  ngOnInit() {
    this.activeR.params.subscribe(params => {
      this.id = params['id'];
      this.img = params['img'];
      this.content = params['contenido'];
      this.titulo = params['titulo'];
    });

    this.getId();
  }

  getId() {
    this.noticia = this.noticiasService.getNoticias(this.id);
  
  }
}