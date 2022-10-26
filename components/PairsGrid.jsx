import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Pair from "./Pair";
export default function PairsGrid({ baseCurrency, exchangeRates }) {
    console.log(exchangeRates)
    if (exchangeRates)

        return <Grid sx={{ flexGrow: 1 }} container spacing={3} justifyContent="center" columns={{ xs: 4, sm: 8, md: 12 }}>
            {Object.entries(exchangeRates).map(([pairName, conversionRate]) =>
                <Grid key={pairName} xs={1.75}>
                    <Pair pairName={`${baseCurrency}/${pairName}`} conversionRate={conversionRate}></Pair>
                </Grid>
            )}
        </Grid>
    else
        return <p>Fetching exchage rates...</p>
}