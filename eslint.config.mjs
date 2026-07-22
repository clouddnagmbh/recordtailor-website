import next from "eslint-config-next";
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import typescript from "eslint-config-next/typescript";

const config = [
  ...next,
  ...nextCoreWebVitals,
  ...typescript,
  {
    ignores: [".next/**", "node_modules/**"],
  },
  {
    rules: {
      // Deutsche Texte enthalten prosaisch Apostrophe/Anführungszeichen —
      // JSX-Escaping ist kosmetisch, wir schreiben lieber Klartext.
      "react/no-unescaped-entities": "off",
    },
  },
];

export default config;
