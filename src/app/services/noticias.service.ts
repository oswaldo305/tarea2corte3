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

  getNoticias(identificador:any) {
    const section: Array<SectionsI> = db;
    let matches: Array<NoticiasI> = [];
    let found;
    section.forEach((noti) => {

       found = noti.noticia.filter((e) =>e.idNoticia == identificador);
       console.log(identificador);
     
      
      if (found.length > 0) {
        matches.push(found);
      }
    });
    console.log(matches);
    return matches;
  }

  getT(iid: number) {
    const secs: Array<SectionsI> = db;
    const sec: Array<SectionsI> = secs.filter((e) => e.id === iid);
    if (sec.length < 1) {
      throw "No se encontró el digimon";
    }
    console.log(sec[0]);
    return sec[0];
  }

}
