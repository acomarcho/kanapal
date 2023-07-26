import { hiraganaToAlphabet, hiraganas } from "@/lib/utils/mappings";
import { useState, useEffect } from "react";
import _ from "lodash";

export default function IndexPage() {
  const [characters, setCharacters] = useState<string[]>([]);

  useEffect(() => {
    setCharacters(_.sampleSize(hiraganas, 3));
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <div className="w-full max-w-[640px] mx-auto p-[2rem]">
        <h1 className="font-playfair text-text text-[1.5rem] font-bold">
          KanaPal
        </h1>
        <p className="font-open text-text text-[1rem]">
          Learn hiragana and katakana!
        </p>
        <div className="flex flex-row justify-center mt-[1rem]">
          {characters.map((char, idx) => {
            return (
              <div
                key={`${char}${idx}`}
                className="p-[1rem] border-2 border-border font-open font-bold text-text text-[1.75rem]"
              >
                {char}
              </div>
            );
          })}
        </div>
        <p className="font-open text-text text-[1rem] italic text-center mt-[0.5rem]">
          Click on the character to see the romanization!
        </p>
      </div>
    </div>
  );
}
