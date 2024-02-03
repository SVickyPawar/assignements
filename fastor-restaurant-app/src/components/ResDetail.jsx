import { Card, CardBody, Heading, Stack, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ResDetail = () => {
	const params = useParams();
  const [data, setData] = useState({});
  const [status, setStatus] = useState("ideal");
  const token = localStorage.getItem("fasterToken");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const getData = async () => {
    setStatus("loading");
    try {
      const res = await axios.get(
        `https://staging.fastor.in/v1/m/restaurant`,
        config
      );
      if (res.data) {
        let foundData = res.data.find((ele) => ele.restaurant_id === params.id);
        setData(foundData);
        setStatus("ideal");
      }
    } catch (error) {
      alert("API Error:", error);
      setStatus("error");
    }
  };

  useEffect(() => {
    getData();
  }, []);
	return (
		<div>
			<Card maxW="sm">
				<CardBody>
					<Image
						src={data?.images?.[0]?.url}
						height={'400px'}
						
						borderRadius="lg"
					/>
					<Stack mt="6" spacing="3">
						<Heading size="md">{data?.restaurant_name}</Heading>
						<Text py={2}>{data?.location?.location_locality},{" "}
                  {data?.location?.city_name}</Text>
						<Text>
						Our delicate vanilla cake swirled with chocolate and filled with
              mocha chocolate chip cream and a layer of dark chocolate ganache
						</Text>
						<Text color="blue.600" fontSize="2xl">
							$200
						</Text>
					</Stack>
				</CardBody>
			</Card>
		</div>
	);
};

export default ResDetail;
