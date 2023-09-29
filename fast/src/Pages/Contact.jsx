import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

export const Contact = () => {
  const [formStatus, setFormStatus] = React.useState("Send");

  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Submitting...");
    const { name, email, message } = e.target.elements;
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    console.log(conFom);
  };

  return (
    <>
      <div
        style={{
          width: "80%",
          // border: "1px solid red",
          margin: "auto",
          textAlign: "center",
          justifyContent:"center",
          // alignItems:"center",
          // alignContent:"center",
          display:"flex",
          flexDirection:"column"
        }}>
        <Heading>Contact Fast Fashion</Heading>
        <form onSubmit={onSubmit}>
          {/* <div > */}
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              required
              style={{ border: "0.1rem solid", margin: "10px",width:"50%" }}
            />
          {/* </div> */}
          <div>
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              required
              style={{ border: "0.1rem solid", margin: "10px" ,width:"50%"}}
            />
          </div>
          <div>
            <label htmlFor="message">Message: </label>
            <textarea
              required
              style={{ border: "0.1rem solid", margin: "10px 10px -20px 10px" ,width:"50%"}}
            />
          </div>
          <br />
          <button
            style={{
              background: "#CA434A",
              color: "white",
              padding: "5px 25px",
              margin: "10px",
              borderRadius: "8px",
            }}
            type="submit">
            {formStatus}
          </button>
        </form>
      </div>
      {/* <hr />/ */}
      <Box maxW="600px" mx="auto" p="20px">
        <title>Contact | Fast Fashion</title>

        <Heading as="h2" fontSize="24px" mb="10px">
          Customer Support:
        </Heading>
        <Text as="p" fontSize="16px" mb="5px">
          Email: support@fastfashion.com
        </Text>
        <Text as="p" fontSize="16px" mb="20px">
          Phone: +1 (800) 123-4567
        </Text>

        <Heading as="h2" fontSize="24px" mb="10px">
          Business Inquiries:
        </Heading>
        <Text as="p" fontSize="16px" mb="5px">
          Email: business@fastfashion.com
        </Text>
        <Text as="p" fontSize="16px" mb="20px">
          Phone: +1 (888) 987-6543
        </Text>

        <Heading as="h2" fontSize="24px" mb="10px">
          Visit Our Store:
        </Heading>
        <Text as="p" fontSize="16px" mb="5px">
          Fast Fashion Store
        </Text>
        <Text as="p" fontSize="16px" mb="5px">
          123 Fashion Avenue,
        </Text>
        <Text as="p" fontSize="16px" mb="5px">
          Cityvally, State - 12345,
        </Text>
        <Text as="p" fontSize="16px" mb="20px">
          Country
        </Text>

        <Heading as="h2" fontSize="24px" mb="10px">
          Store Hours:
        </Heading>
        <Text as="p" fontSize="16px" mb="5px">
          Monday to Friday: 9:00 AM - 7:00 PM
        </Text>
        <Text as="p" fontSize="16px" mb="5px">
          Saturday: 10:00 AM - 6:00 PM
        </Text>
        <Text as="p" fontSize="16px" mb="20px">
          Sunday: Closed
        </Text>

        <Text as="p" fontSize="16px">
          Feel free to drop us a message or give us a call, and we'll be
          delighted to assist you with anything you need. Whether you have
          questions about our products, need help with an order, or want to
          collaborate with us, we're always eager to hear from you.
        </Text>

        <Text as="p" fontSize="16px" mt="20px">
          Stay stylish with Fast Fashion!
        </Text>
      </Box>
    </>
  );
};
