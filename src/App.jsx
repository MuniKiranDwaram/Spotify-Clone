import React, { useContext } from 'react'
import Sidebar from './Components/sidebar'
import Player from './Components/Player'
import Display from './Components/Display'
import { PlayerContext } from './Context/PlayerContext'

const App = () => {
  const{audioRef,track} = useContext(PlayerContext);
  return (
    <div className='h-screen bg-black'>
      <div className='h-[90%] flex'>
        <Sidebar></Sidebar>
        <Display/>
      </div>
      <Player></Player>
      <audio src={track.file} ref={audioRef} preload='auto'/>
    </div>
  )
}

export default App