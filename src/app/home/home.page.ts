import { Component, OnInit } from "@angular/core";
import { CategoriasI } from "../interfaces/categorias-i";
import { NoticiasI } from "../interfaces/noticias-i";
import { SectionsI } from "../interfaces/sections-i";
import { NoticiasService } from "../services/noticias.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"],
})
export class HomePage implements OnInit {
  section: Array<SectionsI> = [];
  noticia: Array<NoticiasI> = [];
  buscartexto = "";

  constructor(public noticiasService: NoticiasService) {
    this.section = this.noticiasService.getSection();
  }

  ngOnInit() {}

  buscar(event) {
    if (event.detail.value != "") {
      this.buscartexto = event.detail.value;
    } else {
      this.buscartexto = "";
    }
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
            
               arr.push(categoria.textContent.toLowerCase().indexOf(this.buscartexto) > -1);
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
          
             arr.push(categoria.textContent.toLowerCase().indexOf(this.buscartexto) > -1);
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
