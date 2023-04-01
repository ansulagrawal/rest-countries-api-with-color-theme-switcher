import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card";

export default function Cards({ data }) {
  return (
    <ul className="w-auto flex flex-wrap justify-center gap-[50px]">
      {data.map(({ name, ...rest }) => (
        <Link to={`${name.common.toLowerCase()}`} key={name.common}>
          <li>
            <Card data={{ name, ...rest }} />
          </li>
        </Link>
      ))}
    </ul>
  );
}
