import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';  
import Navbar from '../components/Navbar';  
import { getCarsData } from '../services/api'; 

const HomePage = () => {
  const [cars, setCars] = useState([]);

  // Usando useEffect para cargar datos desde la API
  useEffect(() => {
    getCarsData().then((data) => setCars(data));
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="cars-list">
        {cars.length > 0 ? (
          cars.map((car) => (
            <div key={car.id} className="car-item">
              <h3>{car.name}</h3>
              <p>{car.description}</p>
            </div>
          ))
        ) : (
          <p>Cargando datos...</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;