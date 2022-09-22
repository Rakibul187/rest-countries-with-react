import './App.css';
import Countries from './Components/Countries/Countries';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Countries></Countries>
      <Footer></Footer>
    </div>
  );
}

/* function LoadCountries() {
  const [countries, setCountries] = useState([])
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data))
  }, [])
  return (
    <div>
      <h1>Visiting Every Countries of The World!!</h1>
      <h3>Available countries: {countries.length}</h3>
      {
        countries.map(country => <Country name={country.name.common} population={country.population}></Country>)
      }
    </div>
  )
}
function Country(props) {
  return (
    <div>
      < h3 > {props.name}</h3 >
      <h5>Population: {props.population}</h5>
    </div>

  )
} */
export default App;
