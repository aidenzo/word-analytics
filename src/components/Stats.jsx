export default function Stats({
  numberOfCharacters,
  instagramCharacters,
  facebookCharacters,
  numberOfWords,
}) {
  return (
    <section className="stats">
      <Stat number={numberOfWords} title="Words" />
      <Stat number={numberOfCharacters} title="Characters" />
      <Stat number={instagramCharacters} title="Instagram" />
      <Stat number={facebookCharacters} title="Facebook" />
    </section>
  );
}

function Stat({ number, title }) {
  return (
    <section className="stat">
      <span className={`stat__number ${number < 0 && "stat__number--limit"}`}>
        {number}
      </span>
      <h2 className="second-heading">{title}</h2>
    </section>
  );
}
