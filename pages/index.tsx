import { hiraganaToAlphabet, hiraganas } from "@/lib/utils/mappings";
import { useState, useEffect } from "react";
import _ from "lodash";
import { Popover } from "@mantine/core";
import { notifications } from "@mantine/notifications";

export default function IndexPage() {
  const [characters, setCharacters] = useState<string[]>([]);
  const [answer, setAnswer] = useState<string>("");

  const resetCharacters = () => {
    setCharacters(_.sampleSize(hiraganas, 3));
  };

  useEffect(() => {
    resetCharacters();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div className="w-full max-w-[1160px] mx-auto p-[2rem]">
        <h1 className="font-playfair text-text text-[1.5rem] font-bold md:text-[2rem]">
          KanaPal
        </h1>
        <p className="font-open text-text text-[1rem] md:text-[1.25rem]">
          Learn hiragana and katakana!
        </p>
        <div className="flex flex-row justify-center mt-[2rem]">
          {characters.map((char, idx) => {
            return (
              <Popover key={`${char}${idx}`}>
                <Popover.Target>
                  <button className="p-[1rem] border-2 border-border font-open font-bold text-text text-[1.75rem] md:text-[2.5rem]">
                    {char}
                  </button>
                </Popover.Target>
                <Popover.Dropdown>
                  <p className="font-open text-text text-[1rem] md:text-[1.25rem]">
                    {hiraganaToAlphabet[char]}
                  </p>
                </Popover.Dropdown>
              </Popover>
            );
          })}
        </div>
        <p className="font-open text-text text-[1rem] md:text-[1.5rem] italic text-center mt-[0.5rem]">
          Click on the character to see the romanization!
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();

            if (!answer) {
              return;
            }

            if (
              answer.toLowerCase() !==
              characters.map((char) => hiraganaToAlphabet[char]).join("")
            ) {
              notifications.show({
                withCloseButton: false,
                color: "red",
                message: "Wrong answer!",
              });
            } else {
              notifications.show({
                withCloseButton: false,
                color: "teal",
                message: "Correct answer!",
              });
              setAnswer("");
              resetCharacters();
            }
          }}
          className="mt-[2rem]"
        >
          <div>
            <input
              type="text"
              className="w-full bg-white p-[1rem] text-[1rem] md:text-[1.25rem] font-open text-background"
              placeholder="Type the romanization here!"
              value={answer}
              onChange={(e) => setAnswer(e.currentTarget.value)}
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-primary text-white font-open font-bold text-[1rem] md:text-[1.25rem] p-[1rem] mt-[0.5rem] transition-all hover:scale-105"
            >
              Check answer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
