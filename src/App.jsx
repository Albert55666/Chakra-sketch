// import { useState } from "react";
import {
  Container,
  Box,
  HStack,
  Flex,
  Text,
  Icon,
  Circle,
  Image,
  Heading,
  CircularProgress,
  CircularProgressLabel,
} from "@chakra-ui/react";
import { viewDots, viewDt, viewD } from "./Icon/icon";
import {
  FaRegBell,
  FaEnvelope,
  FaUser,
  FaHome,
  FaPlus,
  FaArrowLeft,
  FaMinus,
  FaCreditCard,
  FaStar,
  FaAirFreshener,
} from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
// import { ee } from "../src/img/nn.webp";
function App() {
  return (
    <Container bgColor="#f6f6f6" minH="100vh" maxW="100%" p="0">
      <Box h="70px" bgColor="#5d33f7">
        <HStack w="60%" h="70px" m="auto">
          <Flex w="100%" justify="space-between" align="center">
            <Icon as={viewDots} />
            <Flex as="div">
              <Icon as={viewDt} /> Bankapp
            </Flex>
            <Flex as="div" w="10%" justify="space-around" align="center">
              <Icon as={FaEnvelope} />
              <Icon as={FaRegBell} />
              <Circle height="30px" width="30px" bgColor="white">
                <Icon as={FaUser} />
              </Circle>
            </Flex>
          </Flex>
        </HStack>
      </Box>
      <Box w={["100%", "100%", "57%"]} minH="100vh" m="auto">
        <Box w="100%" bgColor="#6357ff" mt="20px" minH="90px">
          <Flex flexDirection="column" justify="center" align="center">
            <Text>Welcome!</Text>
            <Text>Dear Mr.Abishab - Bankapp Wallet</Text>
          </Flex>
        </Box>
        <Box w="80%" m="auto" bgColor="#e5e0fe" mt="-35px" h="120px">
          <Flex
            flexDirection="column"
            pt="10px"
            justify="space-around"
            align="center"
            h="100%"
          >
            <Circle height="30px" width="30px" bgColor="white">
              <Icon as={FaUser} />
            </Circle>
            <Text>Total balance</Text>
            <Text>$58,985.00</Text>
          </Flex>
        </Box>
        <Flex
          w="80%"
          m="30px auto"
          bgColor="#ffff"
          h="50px"
          justify="space-between"
          align="center"
          p="0 5px 0 5px"
          borderRight="4px solid #5d33f7"
          borderLeft="4px solid #5d33f7"
        >
          <Text>Total balance</Text>
          <Icon as={FaPlus}></Icon>
        </Flex>
        <Flex
          wrap="wrap"
          w={["100%", "100%", "80%"]}
          m="30px auto"
          bgColor="#f6f6f6"
          justify="center"
        >
          <Flex
            w="45%"
            justify="center"
            m="10px"
            h="50px"
            align="center"
            bgColor="#6238ff"
          >
            <Text>Withdraw</Text>
            <Icon ml="20px" as={FaMinus}></Icon>
          </Flex>
          <Flex
            w="46%"
            justify="center"
            align="center"
            m="10px"
            h="50px"
            bgColor="#ec376c"
          >
            <Text>Send</Text>
            <Icon ml="20px" as={FaArrowLeft}></Icon>
          </Flex>
          <Flex
            w="46%"
            justify="center"
            align="center"
            m="10px"
            bgColor="#7b00d5"
            h="50px"
          >
            <Text> Card</Text>
            <Icon ml="20px" as={FaCreditCard}></Icon>
          </Flex>

          <Flex
            w="46%"
            justify="center"
            align="center"
            m="10px"
            h="50px"
            bgColor="#52cd6e"
          >
            <Text>Exchange</Text>
            <Icon ml="20px" as={FaHome}></Icon>
          </Flex>
        </Flex>
        <Box>
          <Flex h="50px" p="0 5px 0 5px" justify="space-between" align="center">
            <Text>Savings Goal</Text>
            <Text>View all</Text>
          </Flex>
          <Box h="80px" m="10px 0" paddingBlock="10px" bgColor="whiteAlpha.900">
            <Flex justify="space-between" h="100%" borderLeft="2px solid teal">
              <Box>
                <Heading as="h2" fontSize="15px">
                  Finance Business
                </Heading>
                <Text>Buisness</Text>
              </Box>
              <Flex
                align="center"
                justify="space-between"
                w="20%"
                h="100%"
                p="5px"
                borderLeft="1px solid #f6f6f6"
              >
                $455
                <CircularProgress value={30} color="green.400">
                  <CircularProgressLabel>30%</CircularProgressLabel>
                </CircularProgress>
              </Flex>
            </Flex>
          </Box>
          <Box
            h="80px"
            m="10px 1px"
            paddingBlock="10px"
            bgColor="whiteAlpha.900"
          >
            <Flex justify="space-between" h="100%" borderLeft="2px solid teal">
              <Box>
                <Heading as="h2" fontSize="15px">
                  Finance Business
                </Heading>
                <Text>Buisness</Text>
              </Box>
              <Flex
                align="center"
                justify="space-between"
                w="20%"
                h="100%"
                p="5px"
                borderLeft="1px solid #f6f6f6"
              >
                $455
                <CircularProgress value={90} color="purple.400">
                  <CircularProgressLabel>90%</CircularProgressLabel>
                </CircularProgress>
              </Flex>
            </Flex>
          </Box>
          <Box
            h="80px"
            m="10px 1px"
            paddingBlock="10px"
            bgColor="whiteAlpha.900"
          >
            <Flex justify="space-between" h="100%" borderLeft="2px solid teal">
              <Box>
                <Heading as="h2" fontSize="15px">
                  Finance Business
                </Heading>
                <Text>Buisness</Text>
              </Box>
              <Flex
                align="center"
                justify="space-between"
                w="20%"
                h="100%"
                p="5px"
                borderLeft="1px solid #f6f6f6"
              >
                $455
                <CircularProgress value={60} color="red.400">
                  <CircularProgressLabel>60%</CircularProgressLabel>
                </CircularProgress>
              </Flex>
            </Flex>
          </Box>
          <Box
            h="80px"
            m="10px 1px"
            paddingBlock="10px"
            bgColor="whiteAlpha.900"
          >
            <Flex justify="space-between" h="100%" borderLeft="2px solid teal">
              <Box>
                <Heading as="h2" fontSize="15px">
                  Finance Business
                </Heading>
                <Text>Buisness</Text>
              </Box>
              <Flex
                align="center"
                justify="space-between"
                w="20%"
                h="100%"
                p="5px"
                borderLeft="1px solid #f6f6f6"
              >
                $455
                <CircularProgress value={55} color="purple.400">
                  <CircularProgressLabel>55%</CircularProgressLabel>
                </CircularProgress>
              </Flex>
            </Flex>
          </Box>
        </Box>
        <Box>
          <Flex h="50px" p="0 5px 0 5px" justify="space-between" align="center">
            <Text>History</Text>
            <Text>View all</Text>
          </Flex>
          <Flex
            wrap="wrap"
            w="100%"
            m="10px auto"
            bgColor="whiteAlpha.900"
            justify="center"
          >
            <Box w="46%" m="10px" minH="60px" p="5px 35px" bgColor="#efefef">
              <Text>Income</Text>
              <Text color="blue.400">$50,960</Text>
            </Box>
            <Box w="46%" m="10px" p="5px 35px" minH="60px" bgColor="#efefef">
              <Text>Expense</Text>
              <Text color="red.400">$50,960</Text>
            </Box>
            <Box w="46%" m="10px" p="5px 35px" bgColor="#efefef" minH="60px">
              <Text>Total Bill</Text>
              <Text color="purple.400">$50,960</Text>
            </Box>
            <Box w="46%" m="10px" p="5px 35px" minH="60px" bgColor="#efefef">
              <Text>Savings</Text>
              <Text color="green.400">$50,960</Text>
            </Box>
          </Flex>
        </Box>
        <Box>
          <Flex h="50px" p="0 5px 0 5px" justify="space-between" align="center">
            <Text>My Cart</Text>
            <Text>View all</Text>
          </Flex>
          <Flex m="10px 1px">
            <Flex minH="190px" bgColor="#5a2ce7" width="33%">
              <Box w="70%">
                <Text>Total balance</Text>
                <Text paddingBlock="10px">$58,985.00</Text>
                <Text>Card Number</Text>
                <Text paddingBlock="10px">0000 0000 0000 0908</Text>
                <Text>Expiry</Text>
                <Text>12/10</Text>
              </Box>
              <Flex direction="column" justify="space-between" w="30%">
                <Icon as={BsThreeDots} />
                <Icon as={viewD} />
              </Flex>
            </Flex>
            <Flex minH="190px" bgColor="#5a2ce7" width="33%">
              <Box w="70%"></Box>
              <Flex direction="column" justify="space-between" w="30%">
                <Icon as={BsThreeDots} />
                <Icon as={viewD} />
              </Flex>
            </Flex>
            <Flex minH="190px" bgColor="#5a2ce7" width="33%">
              <Box w="70%"></Box>
              <Flex direction="column" justify="space-between" w="30%">
                <Icon as={BsThreeDots} />
                <Icon as={viewD} />
              </Flex>
            </Flex>
          </Flex>
        </Box>
        <Box>
          <Flex h="50px" p="0 5px 0 5px" justify="space-between" align="center">
            <Text>Transactions</Text>
            <Text>View all</Text>
          </Flex>
          <Flex
            h="80px"
            m="10px"
            paddingBlock="10px"
            pl="15px"
            justify="space-between"
            bgColor="whiteAlpha.900"
          >
            <Flex align="center" minW="30%">
              <Image
                boxSize="50px"
                objectFit="cover"
                src="../src/img/nn.webp"
                alt="Dan Abramov"
              />
              <Text as="p" ml="10px" fontWeight="extrabold">
                Namecheak plc
              </Text>
            </Flex>
            <Text color="red.400">-$360</Text>
          </Flex>
          <Flex
            h="80px"
            m="10px"
            paddingBlock="10px"
            pl="15px"
            justify="space-between"
            bgColor="whiteAlpha.900"
          >
            <Flex align="center" minW="30%">
              <Image
                boxSize="50px"
                objectFit="cover"
                src="../src/img/downloa.png"
                alt="Dan Abramov"
              />
              <Text as="p" ml="10px" fontWeight="extrabold">
                Namecheak plc
              </Text>
            </Flex>
            <Text color="red.400">-$360</Text>
          </Flex>
          <Flex
            h="80px"
            m="10px"
            paddingBlock="10px"
            pl="15px"
            justify="space-between"
            bgColor="whiteAlpha.900"
          >
            <Flex align="center" minW="30%">
              <Image
                boxSize="50px"
                objectFit="cover"
                src="../src/img/aaa.jpg"
                alt="Dan Abramov"
              />
              <Text as="p" ml="10px" fontWeight="extrabold">
                Namecheak plc
              </Text>
            </Flex>
            <Text color="red.400">-$360</Text>
          </Flex>
          <Flex
            h="80px"
            m="10px"
            paddingBlock="10px"
            pl="15px"
            justify="space-between"
            bgColor="whiteAlpha.900"
          >
            <Flex align="center" minW="30%">
              <Image
                boxSize="50px"
                objectFit="cover"
                src="../src/img/download.png"
                alt="Dan Abramov"
              />
              <Text as="p" ml="10px" fontWeight="extrabold">
                Namecheak plc
              </Text>
            </Flex>{" "}
            <Text color="red.400">-$360</Text>
          </Flex>
        </Box>
      </Box>
      <Box
        pt="40px"
        mt="30px"
        pb="20px"
        minH="250px"
        bgColor="#6236ff"
        w="100%"
      >
        <Flex justify="space-between" w="80%" m="auto">
          <Text>Send Money</Text>
          <Text>View all</Text>
        </Flex>
        <Flex
          height="80%"
          mt="10px"
          bgColor="#6236ff"
          wrap={["wrap", "wrap", "nowrap"]}
          justify="space-around"
          align="center"
        >
          <Flex
            justify="center"
            align="center"
            h="80%"
            direction="column"
            borderRadius="8px"
            w={["45%", "45%", "19%"]}
            bgColor="#f4f4f4"
            m="5px"
          >
            {" "}
            <Image
              boxSize="70px"
              objectFit="cover"
              src="../src/img/bnnm.jpg"
              alt="Dan Abramov"
              borderRadius="100px"
            />
            <Text>Savita</Text>
          </Flex>
          <Flex
            justify="center"
            align="center"
            h="80%"
            direction="column"
            borderRadius="8px"
            w={["45%", "45%", "19%"]}
            bgColor="#f4f4f4"
            m="5px"
          >
            <Image
              boxSize="70px"
              objectFit="cover"
              src="../src/img/face.jpg"
              alt="Dan Abramov"
              borderRadius="100px"
            />
            <Text>Savita</Text>
          </Flex>
          <Flex
            justify="center"
            align="center"
            h="80%"
            direction="column"
            borderRadius="8px"
            w={["45%", "45%", "19%"]}
            bgColor="#f4f4f4"
            m="5px"
          >
            {" "}
            <Image
              boxSize="70px"
              objectFit="cover"
              src="../src/img/hti.jpg"
              alt="Dan Abramov"
              borderRadius="100px"
            />
            <Text>Savita</Text>
          </Flex>
          <Flex
            justify="center"
            align="center"
            h="80%"
            direction="column"
            borderRadius="8px"
            w={["45%", "45%", "19%"]}
            bgColor="#f4f4f4"
            m="5px"
          >
            <Image
              boxSize="70px"
              objectFit="cover"
              src="../src/img/yikj.jpg"
              alt="Dan Abramov"
              borderRadius="100px"
            />
            <Text>Savita</Text>
          </Flex>
          <Flex
            justify="center"
            align="center"
            h="80%"
            direction="column"
            borderRadius="8px"
            w={["45%", "45%", "19%"]}
            bgColor="#f4f4f4"
            m="5px"
          >
            <Image
              boxSize="70px"
              objectFit="cover"
              src="../src/img/bnbn.jpg"
              alt="Dan Abramov"
              borderRadius="100px"
            />
            <Text>Savita</Text>
          </Flex>
        </Flex>
      </Box>
      <Box w="57%" m="auto">
        <Box>
          <Flex h="50px" p="0 5px 0 5px" justify="center" align="center">
            <Text>Pay Your Monthly Bill</Text>
          </Flex>
          <Flex
            h="200px"
            m="10px"
            p="5px"
            direction="column"
            justify="space-between"
            bgColor="#efefef"
          >
            <Flex align="center" h="48%" bgColor="whiteAlpha.900">
              <Image
                boxSize="50px"
                objectFit="cover"
                src="../src/img/aaa.jpg"
                alt="Dan Abramov"
              />
              <Text as="p" ml="10px" fontWeight="extrabold">
                Namecheak plc
              </Text>
            </Flex>
            <Flex
              justify="space-between"
              align="center"
              h="48%"
              bgColor="whiteAlpha.900"
              p="10px"
            >
              <Text>$589</Text>
              <Box p="10px" bgColor="#6539ff">
                Pay Now
              </Box>
            </Flex>
          </Flex>
          <Flex
            h="200px"
            m="10px"
            p="5px"
            direction="column"
            justify="space-between"
            bgColor="#efefef"
          >
            <Flex align="center" h="48%" bgColor="whiteAlpha.900">
              <Image
                boxSize="50px"
                objectFit="cover"
                src="../src/img/download.png"
                alt="Dan Abramov"
              />
              <Text as="p" ml="10px" fontWeight="extrabold">
                Namecheak plc
              </Text>
            </Flex>
            <Flex
              justify="space-between"
              align="center"
              h="48%"
              bgColor="whiteAlpha.900"
              p="10px"
            >
              <Text>$589</Text>
              <Box p="10px" bgColor="#6539ff">
                Pay Now
              </Box>
            </Flex>
          </Flex>
          <Flex
            h="200px"
            m="10px"
            p="5px"
            direction="column"
            justify="space-between"
            bgColor="#efefef"
          >
            <Flex align="center" h="48%" bgColor="whiteAlpha.900">
              <Image
                boxSize="50px"
                objectFit="cover"
                src="../src/img/downloa.png"
                alt="Dan Abramov"
              />
              <Text as="p" ml="10px" fontWeight="extrabold">
                Namecheak plc
              </Text>
            </Flex>
            <Flex
              justify="space-between"
              align="center"
              h="48%"
              bgColor="whiteAlpha.900"
              p="10px"
            >
              <Text>$589</Text>
              <Box p="10px" bgColor="#6539ff">
                Pay Now
              </Box>
            </Flex>
          </Flex>
        </Box>
        <Flex h="50px" p="0 5px 0 5px" justify="center" align="center">
          <Text>View all</Text>
        </Flex>
      </Box>
      <Box w="100%">
        <Box w={["100%", "100%", "57%"]} m="auto">
          <Flex h="50px" p="40px 0px" align="center">
            <Text>Recent Post</Text>
          </Flex>
          <Flex
            minH="200px"
            wrap={["wrap", "wrap", "nowrap"]}
            justify="space-between"
            align="center"
            bgColor="#efefef"
          >
            <Box minH="80%" bgColor="#5a2ce7" m="0.5" w={["30%", "30%", "19%"]}>
              <Image
                // boxSize="50px"
                h="40%"
                w="100%"
                objectFit="cover"
                src="../src/img/downloa.png"
                alt="Dan Abramov"
              />
              <Box p="5px">The market is very volatile and as</Box>
            </Box>
            <Box minH="80%" bgColor="#5a2ce7" m="0.5" w={["30%", "30%", "19%"]}>
              <Image
                // boxSize="50px"
                h="40%"
                w="100%"
                objectFit="cover"
                src="../src/img/downloa.png"
                alt="Dan Abramov"
              />
              <Box p="5px">The market is very volatile and as</Box>
            </Box>
            <Box minH="80%" bgColor="#5a2ce7" m="0.5" w={["30%", "30%", "19%"]}>
              <Image
                // boxSize="50px"
                h="40%"
                w="100%"
                objectFit="cover"
                src="../src/img/downloa.png"
                alt="Dan Abramov"
              />
              <Box p="5px">The market is very volatile and as</Box>
            </Box>
            <Box minH="80%" bgColor="#5a2ce7" m="0.5" w={["30%", "30%", "19%"]}>
              <Image
                // boxSize="50px"
                h="40%"
                w="100%"
                objectFit="cover"
                src="../src/img/downloa.png"
                alt="Dan Abramov"
              />
              <Box p="5px">The market is very volatile and as</Box>
            </Box>
            <Box minH="80%" bgColor="#5a2ce7" m="0.5" w={["30%", "30%", "19%"]}>
              <Image
                // boxSize="50px"
                h="40%"
                w="100%"
                objectFit="cover"
                src="../src/img/downloa.png"
                alt="Dan Abramov"
              />
              <Box p="5px">The market is very volatile and as</Box>
            </Box>
          </Flex>
        </Box>
        <Flex
          align="center"
          justify="center"
          w="100%"
          h="80px"
          bgColor="#754cff"
        >
          Copyright &copy; Increase 2022. All Right Reserved. Designed By
          Uncle.Smig
        </Flex>
        <Flex
          align="center"
          justify="space-between"
          w="50%"
          h="80px"
          m="auto"
          bgColor="white"
        >
          <Icon as={FaEnvelope} />
          <Icon as={FaStar} />
          <Icon as={FaAirFreshener} />
          <Icon as={FaCreditCard} />
          <Icon as={FaHome} />
        </Flex>
      </Box>
    </Container>
  );
}

export default App;
