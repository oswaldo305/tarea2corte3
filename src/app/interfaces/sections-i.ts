import { NoticiasI } from './noticias-i';

export interface SectionsI {
    id:number,
    title: string,
    icon: string,
    noticia:Array<NoticiasI>
}
