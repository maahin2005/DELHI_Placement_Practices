import { Box, Input } from "@chakra-ui/react";
import axios from "axios";
import React from "react";

function Search() {
  const debouncing = (func, delay) => {
    let interval = null;
    return function (...args) {
      clearInterval(interval);

      interval = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  //   good morning mahin i am your student and a friend also so this is a gift for my teacher

  const handleChange = async (e) => {
    // API calls are so expensive - so we need to as possible as decrease the API calls
    console.log(e.target.value);
    const API_URL = "https://fakestoreapi.com/products";
    try {
      const resp = await axios.get(API_URL);

      const serachedResponse = resp.data.filter((el) =>
        el.title.includes(e.target.value)
      );

      console.log("serachedResponse", serachedResponse);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      my={20}
    >
      <Box>
        <Input
          placeholder="Search"
          type="text"
          onChange={debouncing(handleChange, 500)}
        />
      </Box>
    </Box>
  );
}

export default Search;
