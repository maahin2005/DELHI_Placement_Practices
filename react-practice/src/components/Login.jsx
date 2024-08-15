import { Box, Button, Input, SimpleGrid, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const API_URL = "https://reqres.in/api/login";
    try {
      const resp = await axios.post(API_URL, formData);

      console.log("RESPONCE: ", resp.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Box w={"80%"} m={"auto"}>
      <form onSubmit={handleSubmit}>
        <SimpleGrid gap={5} w={"30%"} m={"auto"} boxShadow={"2xl"} p={5}>
          <Text>Login</Text>
          <Input
            placeholder="Email"
            type="email"
            onChange={(e) =>
              setFormData((prevData) => ({
                ...prevData,
                email: e.target.value,
              }))
            }
          />
          <Input
            placeholder="Password"
            type="password"
            onChange={(e) =>
              setFormData((prevData) => ({
                ...prevData,
                password: e.target.value,
              }))
            }
          />
          <Button colorScheme="blue" type="submit">
            Login
          </Button>
        </SimpleGrid>
      </form>
    </Box>
  );
}

export default Login;
