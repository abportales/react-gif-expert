import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

/**
 * un hook no es mas que una funcion que regresa algo
 * ese algo es un objeto, en este caso retornamos
 * images y el isLoading
 * 
 * vamos a tomar lo que teniamos en el funtional component
 * y lo vamos a traer directo aca, podemos tener hooks dentro
 * de nuestros custom hooks
 * 
 * los hooks no reciben props, aqui se pueden enviar objetos como tal
 * y tmb podemos deses si en el otro lado enviamos {category}
 */
export const useFetchGifs = (category) => {

/** como queremos pintar componentes se usa este hook
     * se inicializa en vacio porq no tenemos valores, se los vamos
     * a insertar desde la peticion del getGifs(api)
     */
    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages)
        setIsLoading(false)
        //console.log(images)
    }

    /** Hook: useEffect
     * sirve para disparar efectos secundarios(que se ejecute 
     * algo, cuando algo suceda) p.e. cuando el counter cambie,
     * quiero dispara un efecto, cuando la category cambie, disparar
     * otro, cuando el componente se renderiza por primera vez, quiero
     * disparar otro efecto, se puede usar en cualquier punto que se desee
     * 
     * en este caso, cuando el componente se redenrerice poir primera vez
     * solamente ahi queremos hacer la peticion http
     * args del useEffect: arg1: funcion, cualquiera de callback
     *  arg2: lista de dependencias(condiciones con las cuales quiero volver
     * a ejecutar el callback[arg1])
     * 
     * , [ ] ) arg2, lo etsamos dejando vacio, eso significa que solo se 
     * ejecuta 1 vez cuando el comp es creado.
     * 
     *  este hook no trabaja con async, pero si puede mandar llamar una funcion
     * que sea async
     */
    useEffect(() => {
        getImages()
    }, [])

    return {
        /** si tenemos una propiedad que apunta a una variable o sea 
         * esto; 'images: images' podemos usar: 'images,' */
        images: images, 
        isLoading: isLoading,
    }
}
