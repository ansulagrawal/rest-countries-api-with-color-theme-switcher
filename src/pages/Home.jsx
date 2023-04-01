import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import DropdownMenu from "../components/DropdownMenu";
import Cards from "../components/Cards";
import Loading from "../components/Loading";
import Error from "../components/Error";

export async function loader({ request }) {
  const url = new URL(request.url);
  const name = url.searchParams.get("name");
  const region = url.searchParams.get("region");

  const apiUrl = "https://restcountries.com/v3.1";

  let endpoint = "/all";
  if (name) {
    endpoint = `/name/${name}`;
  } else if (region) {
    endpoint = `/region/${region}`;
  }

  const response = await fetch(apiUrl + endpoint, { cache: "no-cache" });

  if (!response.ok) {
    return { error: true, data: [] };
  }

  const data = await response.json();

  return { data };
}

export default function Home() {
  const navigation = useNavigation();
  const { error, data } = useLoaderData();

  return (
    <div className={`max-w-[1440px] mx-auto flex flex-col gap-[50px] ${error ? "gap-[150px]" : ""} padding-x py-[30px] md:py-[80px]`}>
      <div className="flex flex-wrap justify-between items-start gap-[50px]">
        <SearchBar />
        <DropdownMenu />
      </div>
      {error ? <Error /> : navigation.state === "loading" ? <Loading /> : <Cards data={data} />}
    </div>
  );
}
