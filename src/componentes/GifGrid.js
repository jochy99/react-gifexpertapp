import React, { useEffect, useState } from 'react'
import { useFetchGif } from '../hooks/useFetchGif';
import { GifGridItem } from './GifGridItem';

// 3watLx1yyZK8dtwWuHDhYap50iznLWQO
// tucJgl69Z0oRmhObcpVc5GHfhlwHyfZj

export const GifGrid = ({ category }) => {

    const { data: images, loading } = useFetchGif(category); 

    return (
        <>
            <h3 className='animate__animated animate__fadeInDown'>{category}</h3>

            {loading && <p className='animate__animated animate__flash'>Cargando...</p>}
            <div className='card-grid'>

                {
                    images.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div>
        </>
    )
}
