import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';

import { GifExpertApp } from "../GifExpertApp"

describe('Este test prueba los componentes de GifExpertApp', () => {

  test('should debería hacer algo que no se que hace pero lo sabré pronto', () => {

    render(<GifExpertApp/>)
    screen.debug();
    const input = screen.getByRole('textbox');
    // console.log(input);
    expect(input.value).toBe('');
    expect(input.placeholder).toBe('Buscar gifs');
  })

})
