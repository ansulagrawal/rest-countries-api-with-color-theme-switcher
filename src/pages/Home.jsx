import React from "react";
import CountryList from "../components/CountryList";
import SearchForm from "../components/SearchForm";

const Home = () => {
  return (
    <main className="home">
      <div className="container">
        <SearchForm />
        <CountryList />
      </div>
    </main>
  );
};

export default Home;
