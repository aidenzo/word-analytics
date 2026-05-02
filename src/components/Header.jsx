import Background from "./Background";

export default function Header() {
  return (
    <div>
      <Background />
      <h1 className="first-heading">
        Word <span className="first-heading--thin">Analytics</span>
      </h1>
    </div>
  );
}
