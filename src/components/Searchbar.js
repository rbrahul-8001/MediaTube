import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const Searchbar = () => {
  const [searchterm, setSearchterm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchterm) {
      console.log(searchterm);
      navigate(`/search/${searchterm}`);

      setSearchterm('');
    }
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit} className="flex items-center">
        <input
          value={searchterm}
          placeholder="Search..."
          className="text-black p-2 rounded-full w-[300px] placeholder-gray-600"
          onChange={(e) => setSearchterm(e.target.value)}
        />
        <button type="submit" className="text-white relative">
          <AiOutlineSearch className="absolute text-red-600 text-2xl right-5 -top-3" />
        </button>
      </form>
    </div>
  );
};

export default Searchbar;
