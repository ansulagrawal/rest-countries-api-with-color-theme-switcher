import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card";

export default function Cards({ data }) {
  return (
    <ul className="w-auto flex flex-wrap justify-center gap-[50px]">
      {data.map(({ name, ...rest }) => (
        <li key={name.common}>
          <Link to={`${name.common.toLowerCase()}`}>
            <Card data={{ name, ...rest }} />
          </Link>
        </li>
      ))}
    </ul>
  );
}
