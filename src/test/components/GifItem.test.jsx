import React from 'react';

import {render,screen} from '@testing-library/react';

import GifItem from '../../components/GifItem';



describe ('Pruebas en GifItem',()=>{

  const title = 'Dary';
  const url = 'https://www.primevideo.com/';

  test('GifGrid debe retornar title y url',()=>{

    const {container}= render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  })


  test('debe de mostrar la imagen con el URL y el ALT indicado', () => {
    render(<GifItem title={title} url={url} />);
    // screen.debug();
    console.log(screen.getByRole('img').src);
    // expect(screen.getByRole('img').alt).toBe(title);
    // expect(screen.getByRole('img').src).toBe(url);
    const {src,alt}= screen.getByRole('img');
    expect(src).toBe(url);
    expect(alt).toBe(title);


  })

  test('should mostrar el {titulo en el body}', () => {
    render(<GifItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  })

}

);
