import { Card, CardContent, Typography } from "@mui/material"

export default function Pair({ pairName, conversionRate }) {
    return <Card>
        <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {pairName}
        </Typography>

        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {conversionRate}
        </Typography>
        </CardContent>
    </Card>
}