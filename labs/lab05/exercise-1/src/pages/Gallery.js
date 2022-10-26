import { useState, useEffect } from "react";
import { NavLink, Outlet, useNavigate, useParams } from "react-router-dom";

const Gallery = () => {
  const [countries, setCountries] = useState(null);
  const navigate = useNavigate();
  const routeParams = useParams();
  const styleActive = ({ isActive }) => ({
    color: isActive ? "red" : undefined,
  });


  useEffect(() => {
    const fetchCountries = async () => {
      const url = "https://restcountries.com/v3.1/all";
      const response = await fetch(url);
      return await response.json();
    };
  
    fetchCountries().then((data) =>
      setCountries(data.sort((a, b) => a.name.common > b.name.common))
    );
  }, []);

  return (
    <>
      {countries && (
        <div
          style={{
            display: "flex",
            flexFlow: "row wrap",
            columnGap: "5px",
            maxWidth: "600px",
          }}
        >

          <select onChange={(event) => { navigate(event.target.value) }
          } defaultValue={routeParams.cca3}>
            {countries.map((country) => (
              <option key={country.cca3} value={country.cca3}>{country.name.common}</option>
            ))}
          </select>
        </div>
      )}
      <div>
        <Outlet />
      </div>
    </>
  );
};

export { Gallery };
