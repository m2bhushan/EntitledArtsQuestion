import React from 'react'
import RoomHome from '../roomsDetail/RoomHome';
import RoomNavBar from '../roomsDetail/RoomNavBar';


// const myComponentStyle = {
//   width:'100vh',
//   height: '100vh',
//   color: 'blue',
// }

const Rooms = () => {
  return (
    <div className='room-container'>
      <div className='NavbarHome'><RoomNavBar/></div>
     <RoomHome/>
      </div>
  )
}

export default Rooms;