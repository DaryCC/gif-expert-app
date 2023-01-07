import React from 'react';

import {screen, render, fireEvent} from '@testing-library/react';

import { AddCategory } from "../../components/AddCategory"

describe('Pruebas en <AddCategory/>', () => {
  test('should deberia de cambiar el valor de la caja de texto', () => {


    render(<AddCategory onNewCategory={()=>{}}/>);
    const input= screen.getByRole('textbox');

    fireEvent.input(input,{target:{value:'Saitama'}});

    // screen.debug();
    expect(input.value).toBe('Saitama');

  })


  test('should de llamar onNewCategory si el input tiene un valor', () => {

    const inputValue='Naruto';
    const onNewCategory= jest.fn();


    render(<AddCategory onNewCategory={onNewCategory} />);

    const input= screen.getByRole('textbox');
    const form= screen.getByRole('form');

    fireEvent.input(input,{target:{value:inputValue}});
    // screen.debug();
    fireEvent.submit(form);

    // screen.debug();
    expect(input.value).toBe('');

    expect(onNewCategory).toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);


  })


  test('should no debe de llamar el onNewCategory si el input está vacío', () => {

    const inputValue = '';
    const onNewCategory = jest.fn();


    render(<AddCategory onNewCategory={onNewCategory} />);

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input, { target: { value: inputValue } });
    // screen.debug();
    fireEvent.submit(form);

    // screen.debug();
    expect(input.value).toBe('');

    // expect(onNewCategory).toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledTimes(0);
    expect(onNewCategory).not.toHaveBeenCalled();

  })
})
