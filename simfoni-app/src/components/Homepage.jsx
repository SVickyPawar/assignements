import {
	Select,
	Input,
	InputRightAddon,
	Icon,
	InputGroup,
	Button,
	MenuButton,
	MenuList,
	MenuItem,
	Menu,
} from "@chakra-ui/react";
import React from "react";
import { IoMdArrowDropdown,IoIosArrowDown,IoIosArrowForward  } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";

const Homepage = () => {
	return (
		<div className="mt-4">
			<div className="hidden md:flex bg-[#FFFFFF]">
				<Select
					icon={<IoMdArrowDropdown />}
					placeholder="Purchase Organization"
					width={230}
				/>
				<Select
					className="ml-4"
					icon={<IoMdArrowDropdown />}
					placeholder="Company"
					width={230}
				/>
				<Select
					className="ml-8"
					icon={<IoMdArrowDropdown />}
					placeholder="Plant"
					width={230}
				/>
			</div>
			<div className="sm:block md:hidden  bg-[#FFFFFF]">
				<div>
					<Select
						className="w-full"
						icon={<IoMdArrowDropdown />}
						placeholder="Purchase Organization"
					/>
				</div>
				<div className="flex mt-3 gap-x-4">
					<Select
						className="w-1/2"
						icon={<IoMdArrowDropdown />}
						placeholder="Company"
					/>
					<Select
						className="w-1/2"
						icon={<IoMdArrowDropdown />}
						placeholder="Plant"
					/>
				</div>
			</div>
			<div className="sm:w-full md:hidden bg-[#FFFFFF] mt-3">
				<Select
					icon={<IoMdArrowDropdown />}
					placeholder="Purchase Organization"
				/>
			</div>

			<div className="bg-[#FFFFFF] mt-4 flex justify-between">
				<InputGroup width={800}>
					<Input placeholder="Search" />
					<InputRightAddon backgroundColor="teal">
						<Icon
							as={IoSearchOutline}
							variant="outlined"
							width="70px"
							color="white"
						/>
					</InputRightAddon>
				</InputGroup>
				<div className="hidden md:w-[630px] md:flex md:justify-between items-center">
					<Button size="sm" colorScheme="teal" variant="outline">
						Upload
					</Button>
					<Select
						icon={<IoMdArrowDropdown />}
						placeholder="Filter"
						width={230}
					/>
					<Select
						icon={<IoMdArrowDropdown />}
						placeholder="Sort By"
						width={230}
					/>
				</div>
			</div>


			<div className="hidden md:block w-full bg-[#FFFFFF] mt-3 rounded-sm">
			<div className="md:flex  w-[650px] h-8 justify-between">
				<Menu>
					<MenuButton>
						<span className="flex items-center">
							All Categories{" "}
							<span className="mt-1 ml-0.5">{<IoIosArrowDown  />}</span>
						</span>
					</MenuButton>
					<MenuList>
						
						<div style={{ position: "relative" }}>
							<Menu placement="right-end">
								<MenuButton>
									<span className="w-[210px] flex items-center justify-between ml-3 ">
										Cleaning Supplies{" "}
										<span className="mt-0">{<IoIosArrowForward/>}</span>
									</span>
								</MenuButton>
								<MenuList style={{ position: "absolute", left: 0, top: 0 }}>
									<MenuItem>ANCILLARIES</MenuItem>
									<MenuItem>CATERING & KITCHEN</MenuItem>
									<MenuItem>FLOOR CARE MACHINE</MenuItem>
									<MenuItem>PAPER</MenuItem>
								</MenuList>
							</Menu>
						</div>
						<MenuItem>Beverages</MenuItem>
						<MenuItem>Medical Equipments</MenuItem>
						<MenuItem>Office Supplies</MenuItem>
						
					</MenuList>
				</Menu>

				<Menu>
					<MenuButton>
						<span className="flex items-center">
							Fruits <span className="mt-1 ml-0.5">{<IoIosArrowDown  />}</span>
						</span>
					</MenuButton>
					<MenuList>
						<MenuItem>Download</MenuItem>
						<MenuItem>Create a Copy</MenuItem>
						<MenuItem>Mark as Draft</MenuItem>
						<MenuItem>Delete</MenuItem>
						<MenuItem>Attend a Workshop</MenuItem>
					</MenuList>
				</Menu>

				<Menu>
					<MenuButton>
						<span className="flex items-center">
							Vegetables <span className="mt-1 ml-0.5">{<IoIosArrowDown  />}</span>
						</span>
					</MenuButton>
					<MenuList>
						<MenuItem>Download</MenuItem>
						<MenuItem>Create a Copy</MenuItem>
						<MenuItem>Mark as Draft</MenuItem>
						<MenuItem>Delete</MenuItem>
						<MenuItem>Attend a Workshop</MenuItem>
					</MenuList>
				</Menu>

				<Menu>
					<MenuButton>
						<span className="flex items-center">
							Dairy <span className="mt-1 ml-0.5">{<IoIosArrowDown  />}</span>
						</span>
					</MenuButton>
					<MenuList>
						<MenuItem>Download</MenuItem>
						<MenuItem>Create a Copy</MenuItem>
						<MenuItem>Mark as Draft</MenuItem>
						<MenuItem>Delete</MenuItem>
						<MenuItem>Attend a Workshop</MenuItem>
					</MenuList>
				</Menu>

				<Menu>
					<MenuButton>
						<span className="flex items-center">
							Meat & Poultry{" "}
							<span className="mt-1 ml-0.5">{<IoIosArrowDown  />}</span>
						</span>
					</MenuButton>
					<MenuList>
						<MenuItem>Download</MenuItem>
						<MenuItem>Create a Copy</MenuItem>
						<MenuItem>Mark as Draft</MenuItem>
						<MenuItem>Delete</MenuItem>
						<MenuItem>Attend a Workshop</MenuItem>
					</MenuList>
				</Menu>

				<Menu>
					<MenuButton>
						<span className="flex items-center">
							Sea Food <span className="mt-1 ml-0.5">{<IoIosArrowDown  />}</span>
						</span>
					</MenuButton>
					<MenuList>
						<MenuItem>Download</MenuItem>
						<MenuItem>Create a Copy</MenuItem>
						<MenuItem>Mark as Draft</MenuItem>
						<MenuItem>Delete</MenuItem>
						<MenuItem>Attend a Workshop</MenuItem>
					</MenuList>
				</Menu>
			</div>
			</div>
		</div>
	);
};

export default Homepage;
