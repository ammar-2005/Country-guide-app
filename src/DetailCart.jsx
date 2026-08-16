import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { IoMdArrowBack } from "react-icons/io";
import Data from "../src/Data/data.json"

export default function DetailCart() {

  const { id } = useParams();

  // نجيب الدولة اللي alpha3Code تبعها يطابق الـ id من الرابط
  const country = Data.find((item) => item.alpha3Code === id);

  // لو ما لقيناش الدولة (مثلاً id غلط)
  if (!country) {
    return (
      <div className="mt-5 max-w-7xl mx-auto">
    <Link to='/home'>
      <button className="flex items-center gap-2 bg-card shadow-2xl rounded-xl px-2 py-1">
        <IoMdArrowBack />
        <h2>Back</h2>
      </button>
    </Link>
        <p className="mt-10">Country not found.</p>
      </div>
    );
  }

  // نجيب أسماء دول الحدود عن طريق البحث عن كل كود بمصفوفة Data
  const borderCountries = country.borders
    ? country.borders.map((code) => {
        const borderCountry = Data.find((item) => item.alpha3Code === code);
        return borderCountry ? borderCountry : { name: code, alpha3Code: code };
      })
    : [];

  return (
<>
<div className=" mt-5 max-w-7xl mx-auto ">
    
   
    <Link to='/home'> 
    <button className=" flex items-center gap-2 bg-card shadow-2xl rounded-xl px-2 py-1  ">
    <IoMdArrowBack />
    <h2>
        Back 
    </h2>
    </button>
    </Link>
    {/* details  */}
 
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mt-10">
        
        <div className="w-full">
          <img 
            src={country.flags?.png} 
            alt={`${country.name} flag`}
            className="w-full max-h-[400px] object-cover rounded-lg shadow-lg"
          />
        </div>

     
        <div>
          <h1 className="text-3xl font-extrabold mb-6">{country.name}</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10 text-sm">
            <div className="space-y-2">
              <p><strong>Native Name:</strong> {country.nativeName}</p>
              <p><strong>Population:</strong> {country.population?.toLocaleString()}</p>
              <p><strong>Region:</strong> {country.region}</p>
              <p><strong>Sub Region:</strong> {country.subregion}</p>
              <p><strong>Capital:</strong> {country.capital}</p>
            </div>

            <div className="space-y-2">
              <p><strong>Top Level Domain:</strong> {country.topLevelDomain?.join(', ')}</p>
              <p><strong>Currencies:</strong> {country.currencies?.map((c) => c.name).join(', ')}</p>
              <p><strong>Languages:</strong> {country.languages?.map((l) => l.name).join(', ')}</p>
            </div>
          </div>

          {borderCountries.length > 0 && (
            <div>
              <h3 className="font-bold mb-3">Border Countries:</h3>
              <div className="flex flex-wrap gap-2">
                {borderCountries.map((b) => (
                  <Link to={`/detail/${b.alpha3Code}`} key={b.alpha3Code}>
                    <button className="bg-card shadow-md rounded px-3 py-1 text-sm">
                      {b.name}
                    </button>
                  </Link>
                ))}
              </div>
            </div>
          )}

    </div>
    
    
    
</div>
</div>

</>

  )
}