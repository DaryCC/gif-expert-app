import React from 'react';
import {render, screen} from '@testing-library/react';
import { GifGrid } from "../../components";
import useFetchGifs from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs');


describe('Pruebas en <GifGrid/> ', () => {

  const category = 'One punch';

test('Debería mostrar el loading inicialmente ', () => {

  const gifs=[
    {
      id: 'abc',
      title: "batman",
      url:  'https;//loasdflkasd.coc'   },
    {
      id: 'nadia',
      title: "naruto",
      url: 'https;//lasdfasdoasdflkasd.coc'
    },
  ];

  useFetchGifs.mockReturnValue({
    images:gifs,
    isLoading: true,
  });

  render(<GifGrid category={category}/> );
  // expect(screen.getByText('...is loading'));
  // expect(screen.getByText(category));
  expect(screen.getAllByRole('img').length).toBe(2);
  // screen.debug();
})

})
