"use client";

import React, { useState } from "react";
import styles from "./style.module.scss";

import { SendButton } from '@/components';

import { useRouter } from "next/navigation";

import { FiMail, FiGithub } from "react-icons/fi";

import { FaLinkedin } from "react-icons/fa";

export const ContactMe = () => {
    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        subject: "",
        text: "",
    });

    const router = useRouter();

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { fullname, email, subject, text } = formData;

        if (!fullname || !email || !subject || !text) {
            return;
        }

        try {
            const res = await fetch("/api/messages", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({
                    name: fullname,
                    email,
                    subject,
                    text,
                }),
            });

            if (res.ok) {
                setFormData({
                    fullname: "",
                    email: "",
                    subject: "",
                    text: "",
                });

                router.push("/");
            } else {
                throw new Error("Failed to send a message");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <section className={styles.contactSection} id="contact">
            <div className={styles.container}>

                <div className={styles.formSide}>

                    <div className={styles.heading}>
                        <span className={styles.eyebrow}>
                            LET'S CONTACT
                        </span>

                        <span className={styles.headingLine} />
                    </div>

                    <p className={styles.description} data-target="target">
                        I'm always open to opportunities where I can combine technology,
                        data and financial knowledge to solve meaningful problems.
                    </p>

                    <form
                        className={styles.form}
                        onSubmit={handleSubmit}
                    >

                        <div className={styles.row}>

                            <div className={styles.field}>
                                <span className={styles.fieldNumber}>
                                    01
                                </span>

                                <input
                                    type="text"
                                    name="fullname"
                                    placeholder="What's your name ?"
                                    value={formData.fullname}
                                    onChange={handleInputChange}
                                    maxLength={40}
                                    required
                                />
                            </div>

                            <div className={styles.field}>
                                <span className={styles.fieldNumber}>
                                    02
                                </span>

                                <input
                                    type="email"
                                    name="email"
                                    placeholder="What's your email ?"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    maxLength={40}
                                    required
                                />
                            </div>

                        </div>

                        <div className={styles.field}>
                            <span className={styles.fieldNumber}>
                                03
                            </span>

                            <input
                                type="text"
                                name="subject"
                                placeholder="What can I help you with?"
                                value={formData.subject}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <div
                            className={`${styles.field} ${styles.messageField}`}
                        >
                            <span className={styles.fieldNumber}>
                                04
                            </span>

                            <textarea
                                name="text"
                                placeholder="Your Message !"
                                value={formData.text}
                                onChange={handleInputChange}
                                rows="4"
                                required
                            />
                        </div>

                        <SendButton />

                    </form>
                </div>

                <div className={styles.visualSide}>

                    <div className={styles.visualDivider} />

                    <div className={styles.illustration}>
                        <img
                            src="/images/contact.svg"
                            alt="Contact illustration"
                        />
                    </div>

                </div>

                <div className={styles.socialSide}>

                    <a
                        href="https://github.com/erkanuz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialItem}
                    >
                        <div className={styles.socialIcon}>
                            <FiGithub />
                        </div>

                        <div className={styles.socialContent}>
                            <strong>GitHub</strong>
                            <span>github.com/erkanuz</span>
                        </div>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/erkan-uz-lil/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialItem}
                    >
                        <div className={styles.socialIcon}>
                            <FaLinkedin />
                        </div>

                        <div className={styles.socialContent}>
                            <strong>LinkedIn</strong>
                            <span>linkedin.com/in/erkanuz</span>
                        </div>
                    </a>

                    <a
                        href="mailto:erkanuz.official@gmail.com"
                        className={styles.socialItem}
                    >
                        <div className={styles.socialIcon}>
                            <FiMail />
                        </div>

                        <div className={styles.socialContent}>
                            <strong>Email</strong>
                            <span>erkanuz.official@gmail.com</span>
                        </div>
                    </a>

                </div>

            </div>
        </section>
    );
};