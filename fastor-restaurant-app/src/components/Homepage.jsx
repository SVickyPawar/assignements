import React, { useEffect, useState } from "react";
import styles from "./Homepage.module.css";
import { useNavigate } from "react-router-dom";
import {
	Card,
	Stack,
	Image,
	Heading,
	Text,
	Button,
	CardBody,
	CardFooter,
	Grid,
	GridItem,
	Flex,
	Wrap,
} from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
import { BsCurrencyDollar } from "react-icons/bs";
import { Link } from "react-router-dom";
import { BiSolidOffer } from "react-icons/bi";

const Homepage = () => {
	const navigate = useNavigate();
	const [resdata, setResdata] = useState([]);
	const token =
		"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjM4NiIsImVtYWlsIjoiOTgxODk3OTQ1MEBmYXN0b3IuaW4iLCJwaG9uZSI6Ijk4MTg5Nzk0NTAiLCJkaWFsX2NvZGUiOiIrOTEiLCJsYXN0X3Bhc3N3b3JkX3VwZGF0ZSI6IjIwMjMtMTItMDJUMDk6MjQ6NDcuMDAwWiIsImlhdCI6MTcwNjk1NDI1NywiZXhwIjoxNzE0MjExODU3fQ.14BVG_J8w26uDnMyEhVLLWbW_Wy-o8hNiPerYRK4zQM";
	useEffect(() => {
		fetch("https://staging.fastor.in/v1/m/restaurant?city_id=118", {
			headers: { Authorization: `Bearer ${token}` },
		})
			.then((resp) => resp.json())
			.then((json) => {
				setResdata(json);
				console.log(json, "json");
			});
	}, []);

	return (
		<div className={styles.main}>
			<div className={styles.navbar}>
				<h6>
					Pre Order from{" "}
					<span>
						<i className="fas fa-user"></i>
					</span>
				</h6>
				<h5>Connaught Place</h5>
			</div>
			<div className={styles.name}>
				<div>
					<h3>Karan</h3>
					<h5>Let's explore this evening</h5>
				</div>
				<div className={styles.icons}>
					<div>
						<img
							src="https://img.freepik.com/premium-vector/special-offer-label-icon-flat-style-discount-banner-vector-illustration-isolated-background-sale-sign-business-concept_157943-577.jpg"
							alt=""
							width="50px"
							height="50px"
						/>
						<Text fontSize={"14px"}> Offers</Text>
					</div>
					<div>
						<img
							src="https://icons.veryicon.com/png/o/business/work-circle/ethereum-wallet.png"
							alt=""
							width="50px"
							height="50px"
						/>
						<Text fontSize={"14px"}>Wallet</Text>
					</div>
				</div>
			</div>

			<div className={styles.box}>
				<div className={styles.boxText}>
					<p>Your tase</p>
					<p>
						{" "}
						see all
						<span>
							<i className="fas fa-chevron-right"></i>
						</span>
					</p>
				</div>
				<div className={styles.diplayGrid}>
					<div className={styles.verticalCard}>
						<img
							src="https://media.istockphoto.com/id/1146671798/photo/waiter-serving-group-of-female-friends-meeting-for-drinks-and-food-in-restaurant.jpg?s=2048x2048&w=is&k=20&c=1KyDRr8Flgdxzlhu4l2AXT21xMPA9MlfpUrkeJRcKnM="
							alt=""
						/>
						<div
							style={{
								width: "100%",
								height: "70px",
								lineHeight: "14px",
								backgroundColor: "#CEFAAC",
							}}
						>
							<p style={{ padding: "10px 0px 0px 10px" }}>Nik Bakers</p>
							<p
								style={{
									fontSize: "12px",
									lineHeight: "14px",
									paddingLeft: "10px",
								}}
							>
								Cannought Place New Delhi
							</p>
						</div>
					</div>
					<div className={styles.verticalCard}>
						<img
							src="https://media.istockphoto.com/id/1146671798/photo/waiter-serving-group-of-female-friends-meeting-for-drinks-and-food-in-restaurant.jpg?s=2048x2048&w=is&k=20&c=1KyDRr8Flgdxzlhu4l2AXT21xMPA9MlfpUrkeJRcKnM="
							alt=""
						/>
						<div
							style={{
								width: "100%",
								height: "70px",
								lineHeight: "14px",
								backgroundColor: "#CEFAAC",
							}}
						>
							<p style={{ padding: "10px 0px 0px 10px" }}>Nik Bakers</p>
							<p
								style={{
									fontSize: "12px",
									lineHeight: "14px",
									paddingLeft: "10px",
								}}
							>
								Cannought Place New Delhi
							</p>
						</div>
					</div>
					<div className={styles.verticalCard}>
						<img
							src="https://media.istockphoto.com/id/1146671798/photo/waiter-serving-group-of-female-friends-meeting-for-drinks-and-food-in-restaurant.jpg?s=2048x2048&w=is&k=20&c=1KyDRr8Flgdxzlhu4l2AXT21xMPA9MlfpUrkeJRcKnM="
							alt=""
						/>
						<div
							style={{
								width: "100%",
								height: "70px",
								lineHeight: "14px",
								backgroundColor: "#CEFAAC",
							}}
						>
							<p style={{ padding: "10px 0px 0px 10px" }}>Nik Bakers</p>
							<p
								style={{
									fontSize: "12px",
									lineHeight: "14px",
									paddingLeft: "10px",
								}}
							>
								Cannought Place New Delhi
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.tryNowpic}>
				<img
					src="https://media.istockphoto.com/id/1169694902/photo/assorted-indian-non-vegetarian-food-recipe-served-in-a-group-includes-chicken-curry-mutton.jpg?s=2048x2048&w=is&k=20&c=_F4O6GkTFvwnpM5Ic_x52WNuQGg9bsMcfA9hTzzO8Fg="
					alt=""
					width="95%"
					height="100%"
					style={{ objectFit: "cover", margin: "auto", borderRadius: "18px" }}
				/>
			</div>
			<div>
				<h6>Popular Ones</h6>
				<Card gap={4}>
					{resdata?.map((item) => (
						//<Link key={item.id} to={`/restaurants/${item.restaurant_id}`}>
						<Card
							key={item.id}
							variant="outline"
							onClick={() => navigate(`/restaurants/${item.restaurant_id}`)}
						>
							<Flex key={item.id} variant="outline">
								<Image
									objectFit="contain"
									src={item.images[0].url}
									alt={item.restaurant_name}
									width="200px"
									height="200px"
									marginLeft="15px"
									marginTop="30px"
								/>
								<Stack
									p={4}
									flex="2" // Take 2/3 of the available space
								>
									<CardBody>
										<Heading size="md">
											{item.restaurant_name.substring(0, 20)}
										</Heading>
										<Text py={2}>Cakes, Pastrys and Pastas</Text>
										<Text>{item?.location?.location_address}</Text>
										<Wrap>
											{item?.cuisinesToDisplay?.map((ele) => (
												<Text
													key={ele.cuisine_id}
													fontSize="md"
													fontWeight="semibold"
													mr="2"
													color="gray.600"
												>
													{ele.cuisine_name}
												</Text>
											))}
										</Wrap>

										<div className={styles.offers}>
											<BiSolidOffer />
											<Text color={"orange.500"}>4 Offers trending</Text>
										</div>
										<div
											style={{
												display: "flex",
												justifyContent: "space-between",
												marginTop: "35px",
											}}
										>
											<div>
												<Text display="flex">
													{" "}
													<FaStar
														style={{ marginTop: "3px", marginRight: "3px" }}
													/>{" "}
													{item.rating.restaurant_avg_rating}
												</Text>
												<Text style={{ marginBottom: "10px" }}>Popularity</Text>
											</div>
											<div>
												<Text display="flex"> {item.currency.symbol} 200</Text>
												<Text>Cost for two</Text>
											</div>
										</div>
									</CardBody>
								</Stack>
							</Flex>
						</Card>
						//</Link>
					))}
				</Card>
			</div>
		</div>
	);
};

export default Homepage;
