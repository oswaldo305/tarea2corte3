import { Injectable } from '@angular/core';
import { SectionsI } from '../interfaces/sections-i';
import db from '../db/sections.json';
@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(){}

  getNoticias(){
    const sections: Array<SectionsI> = db;
    return sections;
   
}
  

}
