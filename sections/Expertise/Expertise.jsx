'use client';
import React, { useRef } from 'react'

import styles from "./style.module.scss";

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';

import { FaUniversity } from 'react-icons/fa';
import { FiBarChart2, FiCode } from 'react-icons/fi';
import { PiChartDonutThin } from "react-icons/pi";
import { GiReceiveMoney } from "react-icons/gi";

const expertise = [
	{
		title: "Data Analysis",
		description:
			"Working with SQL, Excel and Power BI to extract insights from data.",
		icon: (
			<PiChartDonutThin />
		),
	},

	{
		title: "Business Intelligence",
		description:
			"Building interactive dashboards and reports that drive decisions.",
		icon: (
			<FiBarChart2 />
		),
	},

	{
		title: "Financial Analysis",
		description:
			"Understanding financial statements, KPIs and business performance.",
		icon: (
			<GiReceiveMoney />
		),
	},

	{
		title: "Risk Management",
		description:
			"Knowledge in risk management principles and banking operations.",
		icon: (
			<svg
				viewBox="0 0 48 48"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M24 4L41 10V21C41 32 34 40 24 44C14 40 7 32 7 21V10L24 4Z" />
				<path d="M16 24L21 29L32 18" />
			</svg>
		),
	},

	{
		title: "Banking",
		description:
			"Applied knowledge in banking, deals, controlling and fraud prevention.",
		icon: (
			<FaUniversity />
		),
	},

	{
		title: "Web Development",
		description:
			"Creating responsive and modern web applications with React & Next.js.",
		icon: (
			<FiCode />
		),
	},
];

export const Expertise = () => {

	const container = useRef();
	const tl = useRef();

	gsap.registerPlugin(ScrollTrigger);

	useGSAP(() => {
		gsap.set('.card', {
			xPercent: 100,
			opacity: 0,
		});

		tl.current = gsap
			.timeline({
				paused: true,
				defaults: {
					duration: 1.2,
					ease: "power4.inOut",
				},
			})
			.to(".card", {
				xPercent: 0,
				opacity: 1,
			});

		ScrollTrigger.create({
			trigger: container.current,
			start: "top 90%",
			once: true,
			onEnter: () => {
				tl.current.play();
			},
		});
	}, { scope: container });

	return (
		<section className={styles.expertise} ref={container}>
			<div className={styles.container}>

				<div className={styles.heading}>
					<h2 data-target="target">AREAS OF EXPERTISE</h2>

					<span />
				</div>

				{/* Cards */}

				<div className={styles.grid}>
					{expertise.map((item) => (
						<div className={`${styles.card} card`} key={item.title}>
							<div className={styles.icon}>
								{item.icon}
							</div>

							<h3>{item.title}</h3>

							<p>{item.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};