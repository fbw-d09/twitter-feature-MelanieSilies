import './Follow.scss';
import React, { useState } from 'react';

export const ToFollow = ({ isFollowing }) => {
    const [following, setFollowing]=useState(isFollowing);
    const handleClick = () =>{
      setFollowing(!following);
    }
    return (
      <button onClick={handleClick}>
        {following ? "Unfollowing" : "FOLLOW"}
      </button>
    );
  };