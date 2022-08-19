import { fireEvent, render, screen } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"

describe('Pruebas en el componente <GifExpertApp/>', () => { 
    /** hay q visualizar lo que no ha sido evaluado,
     * ya hicimos muchas pruebas unitarias, puntualemente nos falta
     * onAddCategory, sugerencias: 
     * tomar un snapshot, 
     * escribir en el input de value, 
     * postear el formulario y ver que pasa, 
     * que pasa si volvemos a enviar la misma categoria,
     * u otra diferente ver que pasa con el html*/
    test('debe de hacer match con el snapshot', () => {    
        const { container } = render(<GifExpertApp />)
        expect(container).toMatchSnapshot()
     })

     test('debe de cambiar el valor de la caja de texto', () => {

        render(<GifExpertApp/>)

        /** para disparar un evento solo se necesita la referencia
         * al input, solo hay 1, con eso se obtiene  */
        const input = screen.getByRole('textbox')

        fireEvent.input(input, { target: { value: 'Goku' } });

        expect(input.value).toBe('Goku')
        screen.debug()
    })

    test('debe de postear el formulario si el input tiene un valor', () => {
        const inputValue = "Saitama"
        render(<GifExpertApp />)

        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')

        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form)
        screen.debug()
        expect( screen.getAllByRole('heading', { level: 3 }).length ).toBe(2)
    })

    test('no debe de postear el formulario si el input tiene un valor repetido', () => {
        const inputValue = "Saitama"
        render(<GifExpertApp />)

        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')

        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form)
        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form)
        screen.debug()
        expect( screen.getAllByRole('heading', { level: 3 }).length ).toBe(2)
    })

 })