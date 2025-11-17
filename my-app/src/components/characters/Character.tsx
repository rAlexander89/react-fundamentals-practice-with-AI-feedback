import type { StarWarsCharacter } from './characters';

interface CharacterProps {
  char: StarWarsCharacter | null;
  clearChar: () => void;
}

function Character({ char, clearChar }: CharacterProps) {
  if (char === null) {
    return <></>;
  }

  return (
    <section style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Height</th>
            <th>Birth Year</th>
            <th>Eye Color</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{char.name}</td>
            <td>{char.height}</td>
            <td>{char.birth_year}</td>
            <td>{char.eye_color}</td>
          </tr>
        </tbody>
      </table>
      <button type="button" onClick={clearChar}>
        Close
      </button>
    </section>
  );
}

export default Character;
