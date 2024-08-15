import { Box, Button, Heading, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

function Products() {
  const [data, setData] = useState(null);

  const getProducts = async () => {
    const API_URL = "https://fakestoreapi.com/products";
    try {
      const resp = await axios.get(API_URL);
      console.log(resp.data);
      setData(resp.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Box>
      <Heading>Products</Heading>
      {/* <Button onClick={getProducts}>Fetch Products</Button> */}

      {data?.map((el) => (
        <Box key={el.id}>
          <Text>{el.title}</Text>
        </Box>
      ))}
    </Box>
  );
}

export default Products;
// if my html is depand on  js so my js async functions should be done!!!!!!!!!!!!!!!!!!
