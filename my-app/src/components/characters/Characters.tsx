import { type StarWarsCharacter } from './characters';
import { useCharacters } from './hooks';

interface CharProps {
  onSelect: (char: StarWarsCharacter | null) => void;
}

function Characters({ onSelect }: CharProps) {
  const { loading, error, characters, pages, setPage } = useCharacters();

  if (loading) {
    return <section style={{ color: 'white' }}>Loading...</section>;
  }

  return (
    <>
      {error && <div>{error}</div>}
      <section>
        <ul>
          {characters.map((character) => (
            <CharacterItem {...{ character, onSelect }} key={character.url} />
          ))}
        </ul>
        <div>
          <button type="button" onClick={() => setPage(pages.previous)} disabled={!pages.previous || loading}>
            Prev
          </button>
          <button type="button" onClick={() => setPage(pages.next)} disabled={!pages.next || loading}>
            Next
          </button>
        </div>
      </section>
    </>
  );
}

interface CharItemProps {
  character: StarWarsCharacter;
  onSelect: (character: StarWarsCharacter) => void;
}

function CharacterItem({ character, onSelect }: CharItemProps) {
  return (
    <li role="button" tabIndex={0} onClick={() => onSelect(character)} style={{ cursor: 'pointer' }}>
      {character.name}
    </li>
  );
}

export default Characters;
