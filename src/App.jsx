import React, { useState } from 'react';
import { UserCardList, ToFollow } from './components';


const users = [
  {
    id: '6e432e18-0ec8-11ee-be56-0242ac120002',
    userName: 'freeCodeCamp',
    name: 'freeCodeCamp.org',
    isFollowing: false,
  },
  {
    id: '6e433110-0ec8-11ee-be56-0242ac120002',
    userName: 'reactjs',
    name: 'React',
    bio: 'The library of web and native user interfaces',
    isFollowing: true
  },
  {
    id: '6e433692-0ec8-11ee-be56-0242ac120002',
    userName: 'elonmusk',
    name: 'Elon Musk',
    isFollowing: false
  },
  {
    id: 'b5282b44-0ec8-11ee-be56-0242ac120002',
    userName: 'dci_education',
    name: 'DCI Digital Career Institute',
    bio: 'LEARN FOR A NEW LIFE 💙',
    isFollowing: true
  }
];


function App() {
  return (
    <div className="App">
        <div className="container">
          <h1>Who to follow</h1>
          <UserCardList users={ users }/>
        </div>
    </div>
  )
}

export default App
