import {
	MdInfoOutline,
	MdKeyboardArrowRight,
	MdLineWeight,
	MdOutlineHome,
	MdOutlineKeyboardArrowDown,
	MdOutlineMenuBook,
	MdOutlineMiscellaneousServices,
	MdOutlinePersonPin,
	MdWorkHistory,
} from "react-icons/md";
import { BsJournalBookmarkFill, BsPencilSquare } from "react-icons/bs";
import { FaBlogger, FaIndustry } from "react-icons/fa";

export const ServicesData = [
	{
		title: "Home",
		path: "/",
		icon: <MdOutlineHome />,
	},
	{
		title: "About",
		path: "#",
		icon: <MdOutlinePersonPin />,
	},
	{
		title: "Our Services",
		path: "/",
		icon: <MdOutlineMenuBook />,
	},
	{
		title: "Teams",
		path: "#",
		icon: <BsPencilSquare />,
	},
];
export const SidebarData = [
	{
		title: "Home",
		path: "/",
		icon: <MdOutlineHome fontSize={"1.6rem"} />,
	},
	{
		title: "About us",
		path: "#",
		icon: <MdWorkHistory fontSize={"1.6rem"} />,
	},
	{
		title: "Our Services",
		path: "/",
		icon: <MdOutlineMenuBook fontSize={"1.6rem"} />,
	},
	{
		title: "Team",
		path: "#",
		icon: <FaBlogger fontSize={"1.6rem"} />,
	},
];