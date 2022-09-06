import {
  LinkBox,
  LinkOverlay,
  Heading,
  Text,
  useColorModeValue,
  HStack,
  Center,
} from "@chakra-ui/react";

//import Link from "next/link";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { FaStar } from "react-icons/fa";

export const CardSelection = ({
  exercise,
  msg,
  best,
}: {
  exercise: string | undefined;
  msg: string | undefined;
  best: boolean;
}) => {
  const router = useRouter();
  return (
    <>
      <LinkBox
        color="white"
        bg={useColorModeValue("blue.700", "gray.800")}
        _hover={{
          color: "white",
          bg: useColorModeValue("blue.900", "gray.600"),
        }}
        as="article"
        maxW="sm"
        p="5"
        borderWidth="1px"
        rounded="md"
        textAlign="center"
        //onClick={() => router.push("exercise/solve?type=" + router.query.type)}
        //cursor="pointer"
      >
        <Center>
          <HStack>
            <Heading size="md" my="2" textAlign="center">
              <NextLink
                href={"content/solve?type=" + router.query.type}
                passHref
              >
                <LinkOverlay>{exercise}</LinkOverlay>
              </NextLink>
            </Heading>
            {best && <FaStar size={20} color="yellow" />}
          </HStack>
        </Center>
        <Text>{msg}</Text>
      </LinkBox>
    </>
  );
};
/*
export const CardSelection = ({
  exercise,
  msg,
  best,
}: {
  exercise: string | undefined;
  msg: string | undefined;
  best: boolean;
}) => {
  const router = useRouter();
  return (
    <>
      <LinkBox
        color="white"
        bg={useColorModeValue("blue.700", "gray.800")}
        _hover={{
          color: "white",
          bg: useColorModeValue("blue.900", "gray.600"),
        }}
        as="article"
        maxW="sm"
        p="5"
        borderWidth="1px"
        rounded="md"
        textAlign="center"
        onClick={() => router.push("exercise/algo?type=" + router.query.type)}
      >
        <Center>
          <HStack>{best && <FaStar size={20} color="yellow" />}</HStack>
        </Center>
        <Text>{msg}</Text>
      </LinkBox>
    </>
  );
}; */
