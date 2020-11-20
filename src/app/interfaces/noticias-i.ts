import { CategoriasI } from './categorias-i';

export interface NoticiasI {
    idNoticia:number,
    preview:string,
    img: string,
    categoria:Array<CategoriasI>,
    contenido:string
}
