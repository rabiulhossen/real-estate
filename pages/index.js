import Head from "next/head";
import Image from "next/image";
import { Flex, Box, Text, Button } from "@chakra-ui/react";

import Link from "next/link";

function Fanner ({
  purpose,
  title1,
  title2,
  desc1,
  desc2,
  buttonText,
  imageUrl,
  linkName,
})  {
  return(
    <Flex flexWrap="wrap" m="10">
    {/* <Image src={imageUrl} width={500} height={400} alt="banner" /> */}
    <Box p="5">
      <Text color="gray.500" fontSize="sm" fontWeight="medium">
        {purpose}
      </Text>
      <Text color="gray.500" fontSize="3xl" fontWeight="bold">
        {title1} <br /> {title2}
      </Text>
      <Text color="gray.700" paddingTop="3" fontSize="lg">
        {desc1} <br /> {desc2}
      </Text>
      <Button fontSize="xl" bg="blackAlpha.400" color="white">
        {/* <Link href={linkName}>{buttonText}</Link> */}
      </Button>
    </Box>
    
  </Flex>
  )
};
export default function Home() {
  return (
    <div>
      <h1 color="gray.500">
        hello buyer
        <Fanner
          purpose="for sale"
          title1="sale"
          desc1="explore apartment"
          buttonText="explore new"
          title2="everyone"
        />
        kjkj
      </h1>
    </div>
  );
}
