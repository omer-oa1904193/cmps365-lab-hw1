import { Link } from "react-router-dom";
import Navigation from "./Navigation";

export default function Header({ children }) {
    return (
        <>
            <header>
                <Navigation>
                    <Link to={"/"}>Home</Link>
                    <Link to={"/gallery"}>Gallery </Link>
                    <Link to={"/about"}>About </Link>
                </Navigation>
                {children}
            </header>
        </>);
}