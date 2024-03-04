import React, { useState } from "react";
import { Box, Button, Container, Divider, FormControl, FormLabel, Heading, Input, Stack, Table, Tbody, Td, Th, Thead, Tr, Image, Textarea, useToast } from "@chakra-ui/react";
import { FaPlus, FaUpload, FaHistory, FaTruck } from "react-icons/fa";

const Index = () => {
  const [positions, setPositions] = useState([]);
  const [shipments, setShipments] = useState([]);
  const toast = useToast();

  const addPosition = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newPosition = {
      id: positions.length + 1,
      name: formData.get("name"),
      dimensions: formData.get("dimensions"),
      photo: 'https://images.unsplash.com/photo-1534639077088-d702bcf685e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyYXclMjBtYXRlcmlhbHxlbnwwfHx8fDE3MDk1ODMyMTR8MA&ixlib=rb-4.0.3&q=80&w=1080', // This will be replaced with an actual image URL
    };
    setPositions([...positions, newPosition]);
    toast({
      title: "Position added.",
      description: "New stock position has been added.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    e.target.reset();
  };

  // Dummy functions for example purposes
  const requestShipmentPermission = () => {
    toast({
      title: "Permission requested.",
      description: "Requested shipment permission from Cerber and Quarry Manager.",
      status: "info",
      duration: 5000,
      isClosable: true,
    });
  };

  const addShipment = () => {
    toast({
      title: "Shipment added.",
      description: "Shipment has been recorded and awaiting approval.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.xl">
      <Heading as="h1" size="xl" my={6}>
        Master Cabinet
      </Heading>

      {/* Add Position Form */}
      <Box as="section" p={4} borderWidth="1px" borderRadius="lg">
        <Heading size="md">A. Add Position to Internal Stock</Heading>
        <Divider my={4} />
        <form onSubmit={addPosition}>
          <Stack spacing={3}>
            <FormControl isRequired>
              <FormLabel htmlFor="name">Name</FormLabel>
              <Input id="name" name="name" placeholder="Name of the unit/OB" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="dimensions">Dimensions</FormLabel>
              <Input id="dimensions" name="dimensions" placeholder="Dimensions" />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="photo">Photo</FormLabel>
              <Button leftIcon={<FaUpload />} as="label" htmlFor="photo" cursor="pointer">
                Upload Photo
              </Button>
              <Input id="photo" name="photo" type="file" hidden />
            </FormControl>
            <Button leftIcon={<FaPlus />} colorScheme="blue" type="submit">
              Add Position
            </Button>
          </Stack>
        </form>
      </Box>

      {/* Display Internal Stock */}
      <Box as="section" p={4} borderWidth="1px" borderRadius="lg" my={6}>
        <Heading size="md">B. Internal Stock</Heading>
        <Divider my={4} />
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Name</Th>
              <Th>Dimensions</Th>
              <Th>Photo</Th>
            </Tr>
          </Thead>
          <Tbody>
            {positions.map((position) => (
              <Tr key={position.id}>
                <Td>{position.id}</Td>
                <Td>{position.name}</Td>
                <Td>{position.dimensions}</Td>
                <Td>
                  <Image src={position.photo} alt="Material" boxSize="50px" />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>

      {/* Shipments Section */}
      <Box as="section" p={4} borderWidth="1px" borderRadius="lg" my={6}>
        <Heading size="md">C. Shipments</Heading>
        <Divider my={4} />
        <Button leftIcon={<FaTruck />} colorScheme="orange" onClick={requestShipmentPermission}>
          Request Shipment Permission
        </Button>
        <Button leftIcon={<FaPlus />} colorScheme="green" ml={2} onClick={addShipment}>
          Add Shipment
        </Button>
        {/* Shipments Table will go here */}
      </Box>

      {/* Shipment Archive */}
      <Box as="section" p={4} borderWidth="1px" borderRadius="lg" my={6}>
        <Heading size="md">D. Shipment Archive</Heading>
        <Divider my={4} />
        {/* Shipment Archive Table will go here */}
      </Box>

      {/* Action History Table */}
      <Box as="section" p={4} borderWidth="1px" borderRadius="lg" my={6}>
        <Heading size="md">E. Actions History</Heading>
        <Divider my={4} />
        <Button leftIcon={<FaHistory />} colorScheme="teal">
          View Action History
        </Button>
        {/* Action History Table will go here */}
      </Box>
    </Container>
  );
};

export default Index;
