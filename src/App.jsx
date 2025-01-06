import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ScoreBoard from "./components/ScoreBoard";
import MemoryCard from "./components/MemoryCard";
import { PokemonClient } from "pokenode-ts"; // Import the Client
function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);

  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const requests = [];
        const limit = 12; // Number of Pokémon to fetch
        for (let i = 1; i <= limit; i++) {
          requests.push(fetch(`https://pokeapi.co/api/v2/pokemon/${i}`));
        }

        const responses = await Promise.all(requests);
        const data = await Promise.all(responses.map((res) => res.json()));

        // Extract Pokémon names and images from the API response
        const pokemonData = data.map((pokemon) => ({
          name: pokemon.name,
          image: pokemon.sprites.other["official-artwork"].front_default,
        }));
        setPictures(pokemonData); // Update pictures state with Pokémon images
      } catch (error) {
        console.error("Error fetching Pokémon:", error);
      }
    };
    fetchPokemon();
  }, []);

  const shuffleCards = (cards) => {
    // Fisher-Yates shuffle algorithm
    const shuffled = [...cards];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Swap elements
    }
    return shuffled;
  };

  const handleCardClick = (cardName) => {
    if (clickedCards.includes(cardName)) {
      // User has clicked this card before, reset the score and history
      setScore(0);
      setClickedCards([]); // Reset clicked cards history
    } else {
      // User hasn't clicked this card before, increase score
      setScore((prevScore) => prevScore + 1);
      setClickedCards((prevClickedCards) => [...prevClickedCards, cardName]);
    }

    // Shuffle the cards after every click
    const shuffledPictures = shuffleCards(pictures);
    setPictures(shuffledPictures);

    // Update best score
    if (score + 1 > bestScore) {
      setBestScore(score + 1);
    }
  };
  return (
    <div className="app-container">
      <header className="header">
        <h1 className="game-title">Memory Game</h1>
        <ScoreBoard score={score} bestScore={bestScore} />
      </header>
      <div className="cards-container">
        {pictures.map((pokemon, index) => (
          <MemoryCard
            key={index}
            name={pokemon.name}
            picture={pokemon.image}
            onClick={() => handleCardClick(pokemon.name)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
