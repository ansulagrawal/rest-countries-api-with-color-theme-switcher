import React from 'react';
import Card from './Card';
import { useGetAllCountriesQuery } from '../app/apiSlices/api';
import { Link } from 'react-router-dom';
import Loading from './Loading.jsx';
import NotFound from './NotFound.jsx';

const Cards = ({ search, setSearch, setText }) => {
  const { data, isLoading, isError } = useGetAllCountriesQuery(search.get('search') || '');

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return (
      <NotFound
        setSearch={setSearch}
        action={() => {
          setText('');
          setSearch({ search: '' });
        }}
      />
    );
  }

  return (
    <div className='w-auto flex flex-wrap gap-[100px] justify-center'>
      {data?.map(data => (
        <li key={data?.name.common} className='list-none'>
          <Link to={`${data?.name.common.toLowerCase()}`}>
            <Card data={data} />
          </Link>
        </li>
      ))}
    </div>
  );
};

export default Cards;
