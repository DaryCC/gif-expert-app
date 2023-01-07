import { renderHook, waitFor } from "@testing-library/react";
import useFetchGifs from "../../hooks/useFetchGifs";

describe('Pruebas  en el hook useFetchGifs', () => {

  test('should regresar el estado inicial', () => {

    const { result} = renderHook( () => useFetchGifs('Naruto') );
    const {images,isLoading} = result.current;

    // console.log(result)
    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();

  })


  test('should debe de retornar un arreglo de imagenes y isLoading en false', async () => {

    const { result } = renderHook(() => useFetchGifs('Naruto'));

    // console.log(result)
    await waitFor(
      ()=> expect( result.current.images.length ).toBeGreaterThan(0),
    );

    const { images, isLoading } = result.current;
    console.log(images.length);
    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();

  })
})
