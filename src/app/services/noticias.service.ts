import { Injectable } from "@angular/core";
import { SectionsI } from "../interfaces/sections-i";
import db from "../db/sections.json";
import { NoticiasI } from "../interfaces/noticias-i";
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
      //console.log(found);
      if (found.length > 0) {
        matches.push(found);
      }
    });
    return matches;
  }
}
