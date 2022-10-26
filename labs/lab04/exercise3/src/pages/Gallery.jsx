import Layout from "layouts/Layout";
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";


export function Gallery({ children }) {
    const [countries, setCountries] = useState(null);
    useEffect(() => {
        async function fetchCountries() {
            const response = await fetch("https://restcountries.com/v3.1/all");
            const data = await response.json();
            setCountries(data);
        }
        fetchCountries();

    }, [])
    return (
        <>
            <Layout>
                <h1>Gallery</h1>
                <ul>
                    {countries ? countries.map((country, i) =>
                        <li key={i}>
                            <Link to={`/gallery/${country.cca3}`}>
                                {country.name.common}
                            </Link>
                        </li>
                    ) : <p>Fetching countries...</p>}
                </ul>
            </Layout>
        </>);
}