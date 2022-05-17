import React from 'react';
import Select from "../Select/Select";

const country = [
  {id: 'Russia', city: 'Sochi', population: 100000},
  {id: 'Russia', city: 'Moscow', population: 2000000},
  {id: 'Russia', city: 'Samara', population: 2000000},
  {id: 'Russia', city: 'Rostov', population: 3000000},
  {id: 'Russia', city: 'Kazan', population: 10003000},
  {id: 'Russia', city: 'Izhevsk', population: 2000000},
  {id: 'Belarus', city: 'Minsk', population: 10000000},
  {id: 'Belarus', city: 'Vitebsk', population: 9000000},
  {id: 'Belarus', city: 'Brest', population: 99000000},
  {id: 'Belarus', city: 'Gomel', population: 17000000},
  {id: 'Belarus', city: 'Sochi', population: 61000000},
  {id: 'Usa', city: 'Washington', population: 41000000},
  {id: 'Usa', city: 'Las-Vegas', population: 31000000},
  {id: 'Usa', city: 'Boston', population: 12000000},
]

const Country = () => {
  return (
    <div>
      <Select country={country}/>
    </div>
  );
};

export default Country;