import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchData } from "./features/covid/covidSlice";
import Header from "./components/Header/Header";
import Cards from "./components/Cards/Cards";
import CountryControl from "./components/CountryControl/CountryControl";
import Chart from "./components/Chart/Chart";
import { CircleLoader } from "react-spinners";

function App() {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.covid.loading);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div className="App">
      {loading ? (
        <div className="app-container">
          <CircleLoader color={"#36D7B7"} loading={loading} size={50} />
          
        </div>
      ) : (
        <>
          <Header />
          <Cards />
          <CountryControl />
          <Chart />
        </>
      )}
    </div>
  );
}

export default App;
