import { Contact } from "./Contact";
import "./Header.css"
import { Nav } from "./nav";

export function Header() {
  return (
    <header className="Header-info">
        <Contact/>
        <Nav/> 
    </header>
  );
}

