import {
	MdOutlineHome
} from "react-icons/md";
import { BsInfoSquareFill } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { GrServices } from 'react-icons/gr'
import { BiSolidHome } from 'react-icons/bi'
import { colors } from "@/styles/theme";

// export const ServicesData = [
// 	{
// 		title: "Home",
// 		path: "/",
// 		icon: <MdOutlineHome />,
// 	},
// 	{
// 		title: "About",
// 		path: "#",
// 		icon: <MdOutlinePersonPin />,
// 	},
// 	{
// 		title: "Our Services",
// 		path: "/",
// 		icon: <MdOutlineMenuBook />,
// 	},
// 	{
// 		title: "Teams",
// 		path: "#",
// 		icon: <BsPencilSquare />,
// 	},
// ];
export const SidebarData = [
	{
		title: "Home",
		path: "/",
		icon: <BiSolidHome fontSize={"1.6rem"} />,
	},
	{
		title: "About us",
		path: "#",
		icon: <BsInfoSquareFill fontSize={"1.6rem"} color='#000' />,
	},
	{
		title: "Our Services",
		path: "/",
		icon: <GrServices fontSize={"1.6rem"} />,
	},
	{
		title: "Team",
		path: "#",
		icon: <FaUsers fontSize={"1.6rem"} />,
	},
];