import React, { useState } from 'react';
import { Container, Button, Input, VStack, FormControl, FormLabel } from "@chakra-ui/react";
import axios from "../API/axios";

const UpdatePassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [error, setError] = useState("");

  const handleUpdatePassword = async () => {
    // Add validation logic here

    try {
      const response = await axios.post("/user/update-password", {
        currentPassword,
        newPassword,
        confirmNewPassword,
      });

      const data = response.data;

      if (data.status === "success") {
        // Password updated successfully
        console.log("Password updated successfully");
      } else {
        // Handle error from the server
        setError(data.message);
      }
    } catch (error) {
      console.error("An error occurred: ", error);
      setError("An error occurred while updating the password");
    }
  };

  return (
    <Container>
      <VStack mt={8} spacing={4} align="stretch">
        <FormControl id="currentPassword">
          <FormLabel>Current Password</FormLabel>
          <Input
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
        </FormControl>

        <FormControl id="newPassword">
          <FormLabel>New Password</FormLabel>
          <Input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </FormControl>

        <FormControl id="confirmNewPassword">
          <FormLabel>Confirm New Password</FormLabel>
          <Input
            type="password"
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
          />
        </FormControl>

        {error && <p style={{ color: 'red' }}>{error}</p>}

        <Button colorScheme="teal" onClick={handleUpdatePassword}>
          Update Password
        </Button>
      </VStack>
    </Container>
  );
};

export default UpdatePassword;
