"use client"

import React from "react";
import Image from "next/image";
import { FaTimes } from "react-icons/fa";
import { SidebarData } from "./sidebar/data";
import SubMenu from "./sidebar/index";
import { logo } from "@/assets/home";
import { FlexBox, Wrapper, SideLink } from "./style";

export default function SmallSidebar ({ isSidebarOpen, toggleSideBar }) {
	return (
		<Wrapper>
			<div
				className={
					isSidebarOpen ? "sidebar-container show-sidebar" : "sidebar-container"
				}
			>
				<div className="content">
					<FlexBox>
						<Image src={logo} alt="Logo" />
						<button type="button" className="close-btn" onClick={toggleSideBar}>
							<FaTimes />
						</button>
					</FlexBox>

					<SideLink>
						<p>Menu</p>
						{SidebarData.map((item, index) => {
						return (
							<SubMenu
								item={item}
								key={index}
								toggleSideBar={toggleSideBar}
							/>
						);
						})}
					</SideLink>
				</div>
			</div>
		</Wrapper>
	);
};