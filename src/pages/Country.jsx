import React, { useState, useEffect, useMemo, useCallback } from "react";
import { useNavigate, useLoaderData } from "react-router-dom";
import { ArrowLeft } from "../assets";
import { BASE_URL } from "../config/api";

export async function loader({ params }) {
  const res = await fetch(`${BASE_URL}/name/${params.id}?fullText=true`, { cache: "no-cache" });

  if (!res.ok) return { error: true, message: "Something went wrong!" };

  return await res.json();
}

export default function Country() {
  const loaderData = useLoaderData();
  const [countryFullName, setCountryFullName] = useState([]);

  const navigate = useNavigate();

  const goBack = useCallback(() => navigate(-1), [navigate]);

  useEffect(() => {
    async function fetchBorders() {
      if (!loaderData[0].borders) return;

      const borders = loaderData[0].borders.join(",");
      const res = await fetch(`${BASE_URL}/alpha?codes=${borders}`, { cache: "no-cache" });

      const data = await res.json();
      setCountryFullName([...data.map(country => country.name.common)]);
    }

    fetchBorders();
  }, [loaderData]);

  const {
    flags: { svg },
    name: { common, nativeName },
    population,
    region,
    subregion,
    capital,
    tld,
    currencies,
    languages,
  } = loaderData[0] || { flags: {}, name: {} };

  const languagesValues = Object.values(languages || {})?.join(", ");
  const currencyValue = Object.values(currencies || {})?.map(currency => currency?.name)?.join(', ');
  const nativeNameValue = Object.values(nativeName || {})?.map(nName => nName?.common)?.join(', ');
  const memoizedCountryFullName = useMemo(() => countryFullName, [countryFullName]);

  return (
    <div className="text-color max-w-[1440px] mx-auto padding-x mt-[80px]">
      <button className="flex items-center gap-3 bg-color-component text-color px-[30px] py-[10px] rounded-md shadow-md" onClick={goBack}>
        <ArrowLeft className="w-[20px] h-[20px]" />
        <span className="text-[18px]">Back</span>
      </button>
      <div className="w-full flex flex-col gap-[100px] mt-[80px] lg:flex-row">
        <div className="w-full lg:w-[600px]">
          <img src={svg} alt={`${common} Flag`} />
        </div>
        <div className="flex-1">
          <h4 className="font-extraBold text-[32px]">{common}</h4>
          <div className="flex flex-wrap gap-[30px] justify-between flex-col lg:flex-row  mt-[30px]">
            <div className="flex flex-col gap-2">
              <h6 className="font-semiBold text-[18px]">
                Native Name: <span className="font-light">{nativeNameValue}</span>
              </h6>
              <h6 className="font-semiBold text-[18px]">
                Population:
                <span className="font-light">{population?.toLocaleString()}</span>
              </h6>
              <h6 className="font-semiBold text-[18px]">
                Region:
                <span className="font-light">{region}</span>
              </h6>
              <h6 className="font-semiBold text-[18px]">
                Sub Region: <span className="font-light">{subregion}</span>
              </h6>
              <h6 className="font-semiBold text-[18px]">
                Capital: <span className="font-light">{capital}</span>
              </h6>
            </div>
            <div className="flex flex-col gap-2">
              <h6 className="font-semiBold text-[18px]">
                Top Level Domain: <span className="font-light">{tld}</span>
              </h6>
              <h6 className="font-semiBold text-[18px]">
                Currencies: <span className="font-light">{currencyValue}</span>
              </h6>
              <h6 className="font-semiBold text-[18px]">
                Languages: <span className="font-light">{languagesValues}</span>
              </h6>
            </div>
          </div>
          <div className="mt-[50px] flex gap-2 flex-wrap items-center">
            <h6 className="font-semiBold text-[18px]">Border Countries: </h6>
            {memoizedCountryFullName.map(country => (
              <span key={country} className="font-light px-[25px] py-[10px] bg-color-component shadow-md rounded-md">
                {country}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
