import "./App.css";
import CountriesData from "./pages/countries-compare/pages/CountriesDataCompare";
import AllCountriesRanking from "./pages/ranking/pages/AllCountriesRanking";
import CountryStatistics from "./pages/country-statistics/pages/CountryStatistics";

import { Box, Container } from "@material-ui/core";
import Navbar from "./components/Navbar.jsx";
import { Route, Switch } from "wouter";
import AllRankings from "./pages/ranking/pages/AllRankings";

function App() {
  return (
    <Container>
      <Navbar />
      <Box m={2}>
        <Switch>
          <Route path="/" component={CountriesData} />
          <Route path="/country" component={CountryStatistics} />
          <Route path="/ranking" component={AllCountriesRanking} />
          <Route path="/all-rankings" component={AllRankings} />
        </Switch>
      </Box>
    </Container>
  );
}
//<CountryData />
export default App;
