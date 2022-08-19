import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('Pruebas en AddCategory', () => {

    test('debe de cambiar el valor de la caja de texto ', () => {

        render(<AddCategory onNewCategory={() => { }} />)

        /** para disparar un evento solo se necesita la referencia
         * al input, solo hay 1, con eso se obtiene  */
        const input = screen.getByRole('textbox')

        fireEvent.input(input, { target: { value: 'Goku' } });

        expect(input.value).toBe('Goku')
        //screen.debug()
    })

    test('debe de llamar onNewCategory si el input tiene un valor', () => {
        const inputValue = "Saitama"
        /** esta es una implementacion de jest para crear
         * funciones mock(simulaciones) y poder usarlas         */
        const onNewCategory = jest.fn()

        render(<AddCategory onNewCategory={onNewCategory} />)

        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')

        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form)
        expect(input.value).toBe('');

        /** estamos evaluando si la funcion fue llamada, ya que esta
         * dentro de un evento, en el submit
         * onNewCategory(newInputValue)
         */
        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        /** esta prueba si esta evaluando que se llame con el valor de
         * la caja de texto.        */
        expect(onNewCategory).toHaveBeenCalledWith(inputValue)
    })

    test('no debe de llamar el onNewCategory si el input esta vacio', () => {
        const inputValue = "1"
        const onNewCategory = jest.fn()

        render(<AddCategory onNewCategory={onNewCategory} />)

        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')

        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form)
        //screen.debug()
        /** estamos evaluando si la funcion no fue llamada, 
         * ya que esta dentro de un evento, en el submit
         * onNewCategory(newInputValue)         */
        expect(onNewCategory).toHaveBeenCalledTimes(0);
        /** esta es otra opcion, la negacion del resultado ! 
         * en JS es .not        */
         expect(onNewCategory).not.toHaveBeenCalled();
    })
})