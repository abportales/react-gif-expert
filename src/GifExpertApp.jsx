import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Coding']);
    //console.log(categories)

    const onAddCategory = (newCategory) => {
        //console.log(newCategory)
        console.log('hello world! for test from onAddCategory ')
        if (categories.includes(newCategory)) return;
        /** se hace una copia del objeto con los 3 pts: ... y genera
         * uno nuevo pero con el mismo contenido         
         * cualquiera de las 2 opciones es valida, se puede llamar
         * creando un nuevo objeto o usando la funcion flecha*/
        setCategories([newCategory, ...categories])
        //setCategories( cat => [...categories, ' DemonSlayer '] )
    }

    return (
        <>
            {/* titulo */}
            <h1>Gif Expert App</h1>
            {/* Input */}
            <AddCategory
                /**  setCategories={ setCategories } no es muy claro pero es la 
                 * escencia de como usar el state y el paso de info de padre a 
                 * hijo, queda mas claro usando la funcion de abajo             */
                onNewCategory={(value) => onAddCategory(value)}
            />
            {/* <button onClick={onAddCategory}>Agregar</button> */}

            {/** Listado de items (gifs) ol=order list
             * map toma un objeto y te regresa algo totalmente nuevo, pero para
             * funcionar necesita un key unico (uid).
            */}
            {
                categories.map((category) => (
                    <GifGrid
                        key={category}
                        category={category}
                    />
                ))
            }

            {/* GifItem */}
        </>
    )
}
