import { atom } from "recoil";
import { Theme } from "../types";

const themeState = atom<Theme>({
  key: "themeState",
  default: "light",
  effects: [
    ({ setSelf }) => {
      if (typeof window !== "undefined") {
        const savedTheme = localStorage.getItem("theme");
        const isDarkTheme = savedTheme === "dark";

        if (isDarkTheme) {
          setSelf("dark");
        }
      }
    },
    ({ onSet }) => {
      onSet((newTheme) => {
        if (typeof window !== "undefined") {
          localStorage.setItem("theme", newTheme);
        }
      });
    },
  ],
});

export default themeState;
