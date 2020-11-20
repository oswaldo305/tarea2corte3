import { Injectable } from "@angular/core";
import { SectionsI } from "../interfaces/sections-i";
import db from "../db/sections.json";
import { NoticiasI } from "../interfaces/noticias-i";
import { CategoriasI } from '../interfaces/categorias-i';
@Injectable({
  providedIn: "root",
})
export class NoticiasService {
  constructor() {}

  getSection() {
    const sections: Array<SectionsI> = db;
    return sections;
  }

  getNoticias() {
    const noticias: Array<SectionsI> = db;
    let matches: Array<NoticiasI> = [];
    let found;
    noticias.forEach((section) => {
      found = section.noticia;
      if (found.length > 0) {
        matches.push(found);
      }
    });
    return matches;
  }

  getCategorias() {
    const sections: Array<SectionsI> = db;
    let noticias: Array<NoticiasI> = [];
    let categorias: Array<CategoriasI> = [];
    let found;
    sections.forEach((section) => {
      noticias = section.noticia;
      if (noticias.length > 0) {
        noticias.forEach((categ)=>{
          found = categ.categoria;
          if (found.length > 0) {
            categorias.push(found);
          }
        });
      }
    });
    return categorias;
  }
}
