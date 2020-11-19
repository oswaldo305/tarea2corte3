import { Injectable } from '@angular/core';
import { SectionsI } from '../interfaces/sections-i';
const db = require("../db/noticias.json");
@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(){}

    getAll(): Array<SectionsI> {
    const sections: Array<SectionsI> = db;
    return sections;
  }

  

}
