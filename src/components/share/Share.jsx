import React from 'react';
import './share.css';
import {PermMedia, LocationOn, Label, EmojiEmotions} from '@material-ui/icons';

function Share() {
  return (
    <div className='share'>
      <div className="shareWrapper">
        <div className="shareTop">
            <img src="/assets/person/2.jpeg" className="shareProfileImg" />
            <input type="text" className="shareInput" placeholder="What's on your mind safak..."/>
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
            <div className="shareOptions">
                <div className="shareOption">
                    <PermMedia htmlColor="tomato" className="shareIcon"/>
                    <span className="shareIconName">Photos or Videos</span>
                </div>
                <div className="shareOption">
                    <Label htmlColor="blue" className="shareIcon"/>
                    <span className="shareIconName">Tag</span>
                </div>
                <div className="shareOption">
                    <LocationOn htmlColor="green" className="shareIcon"/>
                    <span className="shareIconName">Location</span>
                </div>
                <div className="shareOption">
                    <EmojiEmotions htmlColor="gold" className="shareIcon"/>
                    <span className="shareIconName">Feelings</span>
                </div>
            </div>
            <button className="shareBtn">Share</button>
        </div>
      </div>
    </div>
  );
}

export default Share;
