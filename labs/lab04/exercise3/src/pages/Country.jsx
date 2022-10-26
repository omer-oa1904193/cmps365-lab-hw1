import Layout from "layouts/Layout";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export function Country() {
    const params = useParams();
    const [country, setCountry] = useState();
    useEffect(() => {
        async function fetchCountry() {
            const response = await fetch(`https://restcountries.com/v3.1/alpha/${params.code}`);
            const data = await response.json();
            setCountry(data[0]);
        }
        fetchCountry();

    }, [params])
    return (
        <>
            <Layout>

                {country ? <div>
                    <p>This is the {country.name.common} page</p>
                    <img src={country.flags.png} alt="flag"></img>
                </div> : <p>Loading...</p>}
            </Layout>
        </>);
}