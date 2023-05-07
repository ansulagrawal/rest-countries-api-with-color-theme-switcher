import React, { useState } from 'react';
import Cards from '../components/Cards';
import Search from '../components/Search';
import { useSearchParams } from 'react-router-dom';

const Country = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [text, setText] = useState();

  return (
    <main className={`max-w-[1640px] mx-auto flex flex-col gap-[50px] padding-x py-[30px] md:py-[90px]`}>
      <div className='flex flex-wrap justify-between items-start gap-[50px]'>
        <Search value={searchParams} setValue={setSearchParams} text={text} setText={setText} />
      </div>
      <Cards search={searchParams} setSearch={setSearchParams} text={text} setText={setText} />
    </main>
  );
};

export default Country;
