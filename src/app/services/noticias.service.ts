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

  search(texto){
    
    const items = Array.from(document.querySelectorAll("ion-grid"));
    const items2 = Array.from(document.querySelectorAll(".body"));
    let style;
    requestAnimationFrame(() => {
      items.forEach((section) => {
        let arr:any=[];
        let number=0;
        let showldshow = false;
        section.querySelectorAll(".body").forEach((noticias) => {
          noticias.querySelectorAll("ion-label").forEach((categoria) => {
            
               arr.push(categoria.textContent.toLowerCase().indexOf(texto) > -1);
          });
        });
        arr.forEach(e => {
          if(e===true)number++;
        });
        if(number>0){
          showldshow = true;
        }
        if (!showldshow) {
          style = "display: none";
        } else {
          style = "";
        }
        section.setAttribute("style", style);
      });

      items2.forEach((noticias) => {
        let arr:any=[];
        let number=0;
        let showldshow = false;
        noticias.querySelectorAll("ion-label").forEach((categoria) => {
          
             arr.push(categoria.textContent.toLowerCase().indexOf(texto) > -1);
        });
        arr.forEach(e => {
          if(e===true)number++;
        });
        if(number>0){
          showldshow = true;
        }
        if (!showldshow) {
          style = "display: none";
        } else {
          style = "";
        }
        noticias.setAttribute("style", style);
      });
    });
  }
}
