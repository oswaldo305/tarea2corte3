import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filtro",
})
export class FiltroPipe implements PipeTransform {
  transform(arreglo: any[], texto: string): any[] {
    if (texto === "") {
      return arreglo;
    }
    texto = texto.toLowerCase();
    let arr = arreglo.forEach(section => {
      let arr2 = section.noticia.forEach(noticia => {
        let arr3 = noticia.categoria.filter(categoria =>{
          let arr4 = categoria.nombre.toLowerCase().includes(texto);
          return arr4;
        });
        return arr3;
      });
      return arr2;
    });
    /*
    return arreglo.filter((item) => {
      return item.nombre.toLowerCase().includes(texto);
    });
    */
  }
}
