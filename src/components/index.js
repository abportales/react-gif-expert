/** archivo de barril o index para simplificar las 
 * exportaciones de la carpeta raiz, en este caso, la de
 * components
 */

export * from './AddCategory'
export * from './GifGrid'
export * from './GifItem'


/**
 * y de tener esto:
 * import { AddCategory } from "./components/AddCategory";
    import { GifGrid } from "./components/GifGrid";

    pasamos a tener:
    import { AddCategory, GifGrid } from "./components";
 */