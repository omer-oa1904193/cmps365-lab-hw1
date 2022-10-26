import { Autocomplete, TextField } from "@mui/material";
import PairsGrid from "../../components/PairsGrid";
import { useEffect, useState } from "react";
import { useStore } from "../../stores/store.js";


export default function Dashboard() {
    const baseCurrency = useStore((state) => state.baseCurrency);
    const setBaseCurrency = useStore((state) => state.setBaseCurrency)

    const [excahngeRates, setExcahngeRates] = useState({});

    useEffect(() => {
        async function fetchPairs() {
            const response = await fetch(`https://api.exchangerate.host/latest&base=${baseCurrency}`);
            const data = await response.json();
            setExcahngeRates(data.rates)
        }
        fetchPairs();
    }, [baseCurrency]);

    function handleChange(event, newValue) {
        if (newValue && excahngeRates[newValue])
            setBaseCurrency(newValue);
    }

    return <>
        <header>
            <Autocomplete
                options={Object.keys(excahngeRates)}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Base currency" />}
                value={baseCurrency}
                onChange={handleChange}
            />
        </header>
        <aside className="left-side"></aside>
        <main>
            <PairsGrid baseCurrency={baseCurrency} exchangeRates={excahngeRates}>

            </PairsGrid>
        </main>
        <aside className="right-side"></aside>
        <footer></footer>
    </>
}