import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";
import PropTypes from 'prop-types'

export const GifGrid = ({ category }) => {

    /** custum hook:
     * como lo dice, es un hook creado por nosotros para eliminar 
     * tanta logica o evitar el repetCode, y asi optimizar y dejar
     * mas legible el codigo y mas sencillo y amigable a la vista
     * la palabra reservada use se usa aunque sean custom hooks
     */
    const { images, isLoading } = useFetchGifs(category)

    //console.log({images,isLoading})

    return (
        <>
            <h3>{category}</h3>
            {/** queremos mostrar un cargando... pero solo si no
             * ha terminado de buscar las imagenes. pero mas bien queremos
             * que no exista cuando ya se cargaron porq podriamos usar algun
             * tipo de hidden, pero solo lo esconde y sigue existiendo
             * operador ternerio, el null no se rederiza
             * 
             * isLoading
                ? ( <h2>Cargando...</h2> )
                : null

                y abreviada seria:
             */
                isLoading && ( <h2>Cargando...</h2> )
            }
            <div className="card-grid">
                {
                    /** es una forma, pero estamos usando de mas el img
                     * podemos deses y queda mejor
                     * images.map((img) => (
                        <li key={img.id}> {img.title} </li>
                    ))
                     * con deses
                    images.map(({id,title}) => (
                        < GifItem key={id} title={title} />
                    ))
                     */
                    images.map((image) => (
                        < GifItem key={image.id}
                            /** todas las propiedades que vengan en el image
                             * las vamos a esparcir en el componente, para esto
                             * la sitanxis es:
                             * se utiliza cuando se tienen muchas props (propiedades)
                             */
                            {...image} 
                        />
                    ))
                }
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
}
