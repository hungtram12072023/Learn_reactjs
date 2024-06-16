import React from 'react';
const YoutubeItems = (props) => {
    return (
        <div className='youtube-item'>
        <div className='youtube-image'>
          <img src={props.image} alt="hình ảnh"/>
        </div>
        <div className="youtube-footer">
          <img src={props.avartar} alt="" className="youtube-avartar"/>
          <div className="youtube-info">
            <h3 className="youtube-title">{ props.title}</h3>
            <h4 className="youtube-author">{ props.author}</h4>
          </div>
        </div>
      </div>
    );
};
export default YoutubeItems
