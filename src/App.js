import './App.css';
import Navbar from "./components/Navbar"
import Banner from "./components/Banner"
import Card from "./components/Card"
import data from "./data"

function App() {
  const experiences = data.map(object => {
    return <Card 
      key={object.id}
      object={object}
      /*coverImg={object.coverImg}
      rating={object.stats.rating}
      reviewCount={object.stats.reviewCount}
      location={object.location}
      title={object.title}
      price={object.price}
      openSpots={object.openSpots}*/
      />
  })
  return (
    <div className="App">
      <Navbar/>
      <Banner />
      <div className="cards-list">
        {experiences}
      </div>
    </div>
  );
}

export default App;
