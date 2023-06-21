import './Userlist.scss';
import React from 'react';
import { ToFollow } from '../Follow';


export const UserCard = ({ user }) => {
    return (
      <div className="card">
        <img
          className='avatar'
            src={`https://unavatar.io/twitter/${user.userName}`}
          />
        <div className='naming'>
          <h2>{user.name}</h2>
          <p className='grey'>@{user.userName}</p>
          {user.bio && <p>{user.bio}</p>}
        </div>
        <div className="followbutton">
          <ToFollow isFollowing={user.isFollowing} />
        </div>
    </div>
    );
  };
  
  export const UserCardList = ({ users }) => {
    return(
      <div>
        { users.map((user, i) => (
          <UserCard key={ i } user={ user }/>
        ))}
      </div>
    );
  };

  export default UserCardList