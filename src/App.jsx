import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import Players from './components/Players'
import Player from './components/Player'

function App() {

  const [players, setPlayers] = useState([])
  const [playerName, setPlayerName] = useState([])

  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setPlayers(data))
  }, [])


  function handleName(data) {
    console.log('click');
    const Have = playerName.find(item => item.id === data.id)
    if (Have) {
      toast("already have")

    } else {
      const newName = [...playerName, data]
      setPlayerName(newName)
    }

  }
 

  return (
    <>
      <div className='lg:w-2/12 md:w-1/2 w-64 mx-auto '>
        <h1 className='text-4xl text-center font-bold mt-2 mb-10 bg-orange-200 p-3 rounded-xl'>Make Your 11</h1>
      </div>

      <div className='lg:flex justify-center gap-10'>
        <div className='grid gap-2 md:grid-cols-2 lg:grid-cols-3 grid-cols-1'>
          {
            players.map(data => <Players key={data.id} data={data} handleName={handleName}></Players>)
          }
        </div>



        <div className="card w-96 lg:mx-0 md:mx-auto sm:mt-5 h-fit bg-base-100 shadow-xl">
          <div className="card-body">
            <p className='text-2xl font-bold'>Name:</p>
            {

              playerName.map((data, index) => <Player index={index} key={data.id} details={data}></Player>)
            }
          </div>
        </div>


      </div>
      <ToastContainer />
    </>
  )
}

export default App
