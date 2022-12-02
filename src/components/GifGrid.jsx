import React  from 'react';

import GifItem from './GifItem';
import useFetchGifs from '../hooks/useFetchGifs.jsx';

export function GifGrid({ category }) {
  const { images,isLoading} = useFetchGifs(category);


    return (
        <>
            <h3>{category}</h3>
          {isLoading ? (<h3>...is loading</h3>) : null}

          <div className='card-grid'>
            {
              images.map((image)=>{
                /* return <GifItem key={image.id} title={image.title} url={image.url}/> */
                return <GifItem key={image.id} {...image}/>

              })

            }
          </div>
        </>
   );
}

