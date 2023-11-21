import { Button, Container, FormControl, FormLabel, Input, VStack } from "@chakra-ui/react";
import React, { useState } from 'react';
import axios from "../API/axios";

const UpdatePassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [error, setError] = useState("");

  const handleUpdatePassword = async () => {
    try {
      const authToken = localStorage.getItem("token");

      const response = await axios.patch(
        "https://academics.newtonschool.co/api/v1/user/updateMyPassword",
        {
          name: "test6969",
          email: "test6969@gmail.com",
          passwordCurrent: currentPassword,
          password: newPassword,
          appType: "ott",
        },
        {
          headers: {
            'projectID': 'f104bi07c490',
            'Authorization': `Bearer ${authToken}`,
          },
        }
      );

      const data = response.data;

      if (data.status === "success") {
        // Password updated successfully
        console.log("Password updated successfully");
      } else {
        setError(data.message || "An error occurred while updating the password");
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
