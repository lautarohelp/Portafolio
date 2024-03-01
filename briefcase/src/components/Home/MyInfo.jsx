import { BiLogoGmail } from "react-icons/bi";

import "./MyInfo.css"

export function MyInfo({title, text, saludo}) {
  return (
    <section className="MyInfo-contains">
        <h1><span>{saludo}</span> <br></br>{title}</h1>
        <p>{text}</p>
        <a className="gmail-MyInfo" href="lautarotoledo391@gmail.com"> <BiLogoGmail/> lautarotoledo391@gmail.com </a>
    </section>
  );
}

