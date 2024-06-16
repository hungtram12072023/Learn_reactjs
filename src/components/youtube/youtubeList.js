import React from 'react';
import {YoutobeData} from "./data";
import YoutubeItems from "./youtobeItem";
const YoutubeList = () => {
    return (
    <div className="youtube-list">
        {YoutobeData.map((item, index) => (
          <YoutubeItems key={item.id} image={item.image} avartar={item.avartar} title={item.title} author={item.author}></YoutubeItems>
        ))}
      </div>
    );
};

export default YoutubeList;