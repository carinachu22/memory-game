# Memory Game with Pokémon

## Game Description

This is a **memory game** featuring **12 Pokémon**. The goal is to click on different Pokémon cards without clicking the same card twice. The game works as follows:

- Users can click on any Pokémon card.
- If a user clicks on the same Pokémon card more than once, their score is reset to **0**.
- The **best score** is tracked for the whole session, and the score increases with each unique Pokémon clicked.
- The Pokémon cards will **shuffle their positions** every time a card is clicked.

## Technologies Used

- **React**: For building the user interface and managing state using hooks.
- **Pokémon API**: The external API used to fetch data (names and images) for the Pokémon cards.

## Deployed Site

You can play the game live here: [Memory Game on Vercel](https://memory-game-pink-alpha.vercel.app/)

## Installation

To run this project locally:

1. Clone this repository:
   ```bash
   git clone https://github.com/carinachu22/memory-game.git
   ```
2. Navigate to the project directory:
   ```bash
   cd memory-game
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```
