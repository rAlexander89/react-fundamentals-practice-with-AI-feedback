import { useState } from 'react';
import './App.css';
import type { StarWarsCharacter } from './components/characters/characters.ts';
import Characters from './components/characters/Characters.tsx';
import Character from './components/characters/Character.tsx';

function App() {
  const [selectedChar, setSelectedChar] = useState<StarWarsCharacter | null>(null);
  return (
    <main>
      <h1>StarWars!</h1>

      <section style={{ display: 'flex', justifyContent: 'center', width: '800px' }}>
        <Characters onSelect={setSelectedChar} />
        <Character char={selectedChar} clearChar={() => setSelectedChar(null)} />
      </section>
    </main>
  );
}

export default App;
