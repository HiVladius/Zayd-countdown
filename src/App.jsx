import './App.css'
import Countdown from './Components/Countdown'
import myVideo from './video/lfl-endbegins-loop.mp4'

const startDate = new Date('2023-02-20')
const endDate = new Date('2023-02-28')


function App() {

  return (
    <div className="App">
      <h1 className='Zayd'>The Zayd Zone</h1>
      <h2 className='destiny2'>Countdown</h2>
      <h3 className='ligthfall'>Destiny 2 The lightfall</h3>
      
      <div>
        <video src={myVideo} width="640" height="360" autoPlay></video>
      </div>


      <div className='countdown'>
        <Countdown startDate={startDate} endDate={endDate} />

      </div>
    </div>
  )
}

export default App
