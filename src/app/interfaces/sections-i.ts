import { NoticiasI } from './noticias-i';

export interface SectionsI {
    id:number,
    title: string,
    noticia:Array<NoticiasI>
}
