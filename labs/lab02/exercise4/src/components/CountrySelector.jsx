import React from "react"
export default function CountrySelector() {
    React.useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
    }, [])
    return (
        <>
            <form>
                <select required defaultValue="default">
                    <option disabled value="default">Select a region</option>
                </select>
                <select required defaultValue="default">
                    <option disabled value="default">Select a country</option>
                </select>
            </form>
        </>
    )
}