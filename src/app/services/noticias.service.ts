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

}
