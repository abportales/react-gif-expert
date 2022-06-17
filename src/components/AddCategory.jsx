import { useState } from "react"

/** si mandan setCategories recibimos 'props' pero no se ve
 * muy a menudo, en cambio se deses y queda {setCategories}
*/
export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState('')

    /**
     * 
     * @param {target} es la deses del arg event (evita hacer 
     * event.target...) tambien recordemos que si no tiene arg la
     * funcion en el prop del input es porq esta mandando el event
     * setInputValue: establece el valor del edittext
     * target value: es el valor que recibe del event, lo que escribe
     * el usuario
     */
    const onInputChange = ({ target }) => {
        //console.log( target.value )
        setInputValue(target.value)
    }

    /** este evita que se refresque la pagina para asi conservar
     * lo que capturo el usuario
     */
    const onSubmit = (event) => {
        event.preventDefault();
        const newInputValue = inputValue.trim()
        /** hagamos validaciones basicas, de que no este vacio*/
        if( newInputValue.length <= 1) return;

        //console.log(inputValue)
        /** en este caso usaremos un callback, funcion que mantiene
         * los valores anteriores y se pueden modificar y regresa
         * el mismo objeto modificado, puede ir entre parentesis si
         * se requiere
         * setCategories( categories => [inputValue, ...categories])
         */
        onNewCategory(newInputValue)

        /** resetemos el valor para que quede vacio */
        setInputValue('');
    }

    return (
        /**form, es reservada de formulario, y su comportamiento es 
         * que cuando se da enter se refresca la pantalla         */ 
        <form onSubmit={ (event) => onSubmit(event)}>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}
