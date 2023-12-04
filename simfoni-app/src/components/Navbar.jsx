import React from "react";
import downArrow from "../icons/caret-down.png";
import {
	Heading,
	InputGroup,
	Drawer,
	Input,
	Button,
	Select,
	Icon,
	InputRightAddon,
	DrawerContent,
	DrawerHeader,
	DrawerBody,
	useDisclosure,
	DrawerOverlay,
	Wrap,
	WrapItem,
	Avatar,
} from "@chakra-ui/react";
import { FaBell, FaSearch, FaRegHeart } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { PiShoppingCart } from "react-icons/pi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoWalletOutline, IoSearchOutline } from "react-icons/io5";
import { TiArrowSortedDown } from "react-icons/ti";

const Navbar = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<div className="flex items-center justify-between bg-[#FFFFFF]">
			
			<Drawer placement="left" onClose={onClose} isOpen={isOpen}>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerHeader borderBottomWidth="1px">Simfoni</DrawerHeader>
					<DrawerBody>
						<p>Catalog</p>
						<p>BuyDesk</p>
						<p>Dashboard</p>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
			<div className="flex items-center">
            <Icon as={FiMenu} onClick={onOpen} boxSize={6} />
				<img
					className=" w-24 md:w-[140px] lg:w-[180px] h-11  ml-1 "
					src="https://simfoni.spendautomation.com/static/app/spendautomation_logo.png"
					alt="company_logo"
					style={{ objectFit: "contain" }}
				/>
				<div className=" hidden  md:flex items-center justify-around align-center  w-[400px] font-sm font-semibold ">
					<p>Catalog</p>
					<p>BuyDesk</p>
					<p className="flex items-center">
						History{" "}
						<span className="w-3 mt-1 ml-1">
							<img src={downArrow} alt="" />
						</span>
					</p>
					<p>Dashboard</p>
				</div>
			</div>
			<div className="flex">
				<div className=" hidden  lg:flex items-center mr-3 ">
					<InputGroup size="sm">
						<Select defaultValue="PO" width="auto">
							<option value="PO">LO</option>
						</Select>

						<Input placeholder="Search" width="150px" />
						<InputRightAddon>
							<Icon as={IoSearchOutline} variant="outlined" />
						</InputRightAddon>
					</InputGroup>

					<Button
						size="sm"
						colorScheme="teal"
						variant="outline"
						className="ml-2"
					>
						Help
					</Button>
				</div>
				<div className="w-40 flex items-center justify-evenly gap-x-1 ">
					<Icon as={IoWalletOutline} boxSize={7} />
					<Icon as={FaRegHeart} boxSize={7} />
					<Icon as={PiShoppingCart} boxSize={7} />
					<Icon as={IoMdNotificationsOutline} boxSize={7} />
				</div>
				<div className="flex items-center  ">
					<Wrap>
						<WrapItem>
							<Avatar
								size="sm"
								name="Kola Tioluwani"
								src="https://bit.ly/tioluwani-kolawole"
							/>
							<Heading as="h6" size="sm" className='hidden md:flex items-center mt-1 ml-1'>
								Kola Tioluwani
							</Heading>
						</WrapItem>
					</Wrap>
					<Icon as={TiArrowSortedDown} />
				</div>
			</div>
		</div>
	);
};

export default Navbar;
