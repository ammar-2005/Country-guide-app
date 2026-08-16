import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import Data from "../src/Data/data.json"
import { Link } from 'react-router-dom';


export default function Cart() {


  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const filteredCountries = Data.filter((country) => {
    const matchesSearch = country.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesRegion = selectedRegion
      ? country.region === selectedRegion
      : true; // لو ما فيه منطقة مختارة، ما منفلتر عليها

    return matchesSearch && matchesRegion;
  });

  return (
   <>
    <section className=' max-w-7xl mt-5 mx-auto bg-background '> 
        {/* search & filter  */}
        <div className=" mt-5 flex  items-center justify-between gap-10  ">
             <div className=" flex gap-3 items-center bg-card shadow-2xl rounded-2xl px-4 py-2">
                    <CiSearch className='text-xl font-bold text-foreground' />
                    <input
                      type="text"
                      placeholder='Search a Country'
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className=' border-none outline-none bg-transparent text-foreground placeholder:text-muted'
                    />
             </div>
             <div className=" bg-card px-4 py-2 rounded-2xl shadow-2xl">
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className='px-4 py-2 bg-card text-foreground'
              >
          <option value="">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>

             </div>
        </div>
        {/* cart */}
        <div className=" mt-8 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">

              {filteredCountries.length > 0 ? (
            filteredCountries.map((country) => (
            <Link to={`/detail/${country.alpha3Code}`} key={country.alpha3Code}>
              <div className="country-card">
                <div className="flag-container">
                  <img
                    src={country.flags?.png}
                    alt={`${country.name} flag`}
                  />
                </div>
                <div className="card-body">
                  <h2 className="country-name">{country.name}</h2>
                  <p><strong>Population:</strong> {country.population?.toLocaleString()}</p>
                  <p><strong>Region:</strong> {country.region}</p>
                  <p><strong>Capital:</strong> {country.capital || 'N/A'}</p>
                </div>
              </div>
            </Link>
            ))
          ) : (
            <p className="col-span-full text-center text-muted mt-10">
              No countries found.
            </p>
          )}
           

        </div>

    </section>
   </>
  )
}