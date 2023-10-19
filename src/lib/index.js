import { dev } from "$app/environment";

// place files you want to import through the `$lib` alias in this folder.
export const title = "Marv";
export const description = "Marvelous blog page";
export const url = dev
  ? "http://localhost:5173/"
  : "https://blog-ao46xgznt-marvelousy20.vercel.app";
