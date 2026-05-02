import { useState } from "react";
import Textarea from "./Textarea";
import Stats from "./Stats";
import {
  FACEBOOK_CHARACTER_LIMIT,
  INSTAGRAM_CHARACTER_LIMIT,
} from "../lib/constants";

export default function Container() {
  const [text, setText] = useState("");

  const stat = {
    numberOfCharacters: text.length,
    instagramCharacters: INSTAGRAM_CHARACTER_LIMIT - text.length,
    facebookCharacters: FACEBOOK_CHARACTER_LIMIT - text.length,
    numberOfWords: text.trim() === "" ? 0 : text.trim().split(/\s+/).length,
  };
  return (
    <main className="container">
      <Textarea text={text} setText={setText} />
      <Stats
        numberOfCharacters={stat.numberOfCharacters}
        instagramCharacters={stat.instagramCharacters}
        facebookCharacters={stat.facebookCharacters}
        numberOfWords={stat.numberOfWords}
      />
    </main>
  );
}
