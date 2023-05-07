import React from "react";
import { useGetBorderCountriesQuery, useGetCountryDetailQuery } from "../app/apiSlices/api";
import { Link, useNavigate, useParams } from "react-router-dom";
import ArrowLeft from "../assets/ArrowLeft";
import Loading from "../components/Loading.jsx";
import NotFound from "../components/NotFound";

function CountryDetail() {
  const { id = "" } = useParams();
  const { data, isError, isLoading } = useGetCountryDetailQuery(id);
  const { data: borderData, isLoading: isBorderLoading, isError: isBorderError } = useGetBorderCountriesQuery(data?.[0]?.borders?.join(","), { skip: !data?.[0]?.borders });
  const navigate = useNavigate();

  if (isLoading || isBorderLoading) {
    return <Loading />;
  }
  if (isError || isBorderError) {
    return <NotFound action={() => navigate("/")} />;
  }
  if (data && data.length) {
    const {
      flags: { svg },
      name: { common, nativeName },
      population,
      independent,
      region,
      subregion,
      maps,
      capital,
      tld,
      currencies,
      languages,
    } = data[0] || { flags: {}, name: {} };

    return (
      <main className="text-color max-w-[1440px] mx-auto padding-x mt-[80px] mb-9">
        <button className="flex items-center gap-3 bg-color-component text-color px-[30px] py-[10px] rounded-md shadow-md" onClick={() => navigate("/")}>
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
                  Native Name:{" "}
                  <span className="font-light">
                    {Object.values(nativeName || {})
                      ?.map(nName => nName?.common)
                      ?.join(", ")}
                  </span>
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
                  Currencies:{" "}
                  <span className="font-light">
                    {Object.values(currencies || {})
                      ?.map(currency => currency?.name)
                      ?.join(", ")}
                  </span>
                </h6>
                <h6 className="font-semiBold text-[18px]">
                  Languages: <span className="font-light">{Object.values(languages || {})?.join(", ")}</span>
                </h6>
                <h6 className="font-semiBold text-[18px]">
                  Independent: <span className="font-light">{independent ? "Self Governing" : "Non Self Governing"}</span>
                </h6>
                <h6 className="font-semiBold text-[18px] mt-2">
                  <a className="font-light px-[25px] py-[10px] bg-color-component shadow-md rounded-md" href={maps?.googleMaps} target="_blank">
                    View on map
                  </a>
                </h6>
              </div>
            </div>
            {borderData && (
              <div className="mt-[50px] flex gap-2 flex-wrap items-center">
                <h6 className="font-semiBold text-[18px]">Border Countries: </h6>
                {borderData.map(country => (
                  <Link to={`/${country.name.common}`} key={country?.name?.common} className="font-light px-[25px] py-[10px] bg-color-component shadow-md rounded-md">
                    {country?.name?.common}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    );
  }

  return <></>;
}

export default CountryDetail;
