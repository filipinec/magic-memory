import { useState } from 'react'
import './App.css'
import SingleCard from './components/SingleCard'

const cardImages = [
  {'src': '/img/helmet-1.png'},
  {'src': '/img/potion-1.png'},
  {'src': '/img/ring-1.png'},
  {'src': '/img/scroll-1.png'},
  {'src': '/img/shield-1.png'},
  {'src': '/img/sword-1.png'},
]


function App() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  // shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages] // Double array
    .sort(()=> Math.random()-0.5) // Sort random
    .map((card) => ({ ...card, id: Math.round((Math.random()* 10000)) })) // Add ID

    setCards(shuffledCards)
    setTurns(0)
  }
  console.log(cards, turns)
  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className='card-grid'>
        {cards.map(card => (
          <SingleCard key={card.id} card={card}  />
        ))}
      </div>
    </div>
  );
}

export default App