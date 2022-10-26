import Navigation from "./Navigation";

export default function Header({ children }) {
    return (
        <>
            <header>
                <Navigation>
                </Navigation>
                {children}
            </header>
        </>);
}