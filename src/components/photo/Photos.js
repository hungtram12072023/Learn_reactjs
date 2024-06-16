import React, { useEffect, useState } from 'react';
import axios from 'axios';

//https://picsum.photos/v2/list
const getPhotos = () => {
    return axios.get('https://picsum.photos/v2/list')
        .then((response) => {
            console.log(response);
            return response.data;
        })
        .catch((error) => {
            console.log(error);
        });
}
const Photos = () => {
    const [photos, setPhotos] = useState([]);
    console.log('outside');
    useEffect(() => {
        getPhotos().then((images) => {
            setPhotos(images);
        });
    }, []);
    return (
        <div className='grid grid-cols-4 gap-5 p-5'>    
            {photos.map((item, index) => (
                <div key={item.id}>
                    <img src={item.download_url} alt={item.author} className='h-full w-full object-cover rounded-lg' />
                </div>
            ))}
        </div>
    );
};

export default Photos;