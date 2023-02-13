import React, { useState } from "react";
import { Searchbar } from "react-native-paper";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <Searchbar
      className="bg-white rounded-lg m-2 w-4/5"
      placeholder="Search messages..."
      elevation={0}
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
  );
};

export default SearchBar;
