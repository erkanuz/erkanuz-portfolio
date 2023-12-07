'use client';
import styles from './style.module.scss'

import { Accordion } from '@/components/Accordions';

const context = [
    { id: 1, title: "Crafting Engaging User Experiences with React", description: "As a front-end developer, I specialize in creating visually appealing and interactive user interfaces using React. This powerful JavaScript library allows me to build dynamic web applications that captivate and engage users." },
    { id: 2, title: "Seamless Navigation with Next.js", description: "I have extensive experience in utilizing Next.js, a popular React framework, to create fast and SEO-friendly web applications. With Next.js, I ensure your site provides a seamless navigation experience and performs optimally on search engines." },
    { id: 3, title: "Responsive Design for Every Device", description: "My expertise extends to crafting websites that seamlessly adapt to various screen sizes and devices. Using advanced techniques in CSS, JavaScript, React, and Next.js, I guarantee your site looks and functions flawlessly on desktops, tablets, and mobile phones." },
    { id: 3, title: "Frameworks and Libraries Expertise", description: "I have a strong command of leading front-end frameworks and libraries, including React, along with its Next.js framework. By harnessing the capabilities of these technologies, I build robust and scalable applications that cater to your specific requirements." },
    { id: 4, title: "Dynamic Interactivity with JavaScript", description: "Leveraging the power of JavaScript, I implement interactive features that enhance user engagement. Whether it's animations, form validation, or real-time updates, I utilize React and Next.js to bring your ideas to life." },
    { id: 5, title: "Version Control and Collaboration", description: "Efficient version control and collaboration are essential in successful development projects. I am proficient in utilizing Git and platforms like GitHub to facilitate seamless teamwork and maintain organized code repositories." },
    { id: 6, title: "Performance Optimization for Speed", description: "I'm committed to creating fast-loading websites that keep users engaged. Through techniques such as code minification, lazy loading, and asset optimization, I guarantee your site loads quickly and efficiently." },
    { id: 7, title: "Lifelong Learning and Adaptability", description: "In the ever-evolving landscape of web development, I prioritize continuous learning and adaptation. Staying updated with the latest technologies and trends allows me to deliver cutting-edge solutions that align with your goals." }
];

const iconData = [
    { name: 'nextjs', type: 'svg' },
    { name: 'react', type: 'svg' },
    { name: 'js', type: 'svg' },
    { name: 'html', type: 'svg' },
    { name: 'css', type: 'svg' },
    { name: 'sass', type: 'svg' },
    { name: 'tailwindcss', type: 'svg' },
    { name: 'sql', type: 'png' },
    { name: 'firebase', type: 'svg' },
    { name: 'mongo', type: 'png' },
    { name: 'git', type: 'svg' },
    { name: 'figma', type: 'svg' },
    { name: 'ms', type: 'svg' },
    { name: 'phot', type: 'svg' },
    { name: 'illu', type: 'svg' },
];

export const Skills = () => {
    return (
        <div className={styles.skills}>
            <div>
                <h1 className={styles.stage_title}>My technical Skills are /</h1>
            </div>

            <div className={styles.icons}>
                {iconData.map((icon, index) => (
                    <img key={index} src={`/icons/${icon.name}.${icon.type}`} alt="" />
                ))}
            </div>

            <div className={styles.mobile}>
                {iconData.slice(0, 3).map((icon, index) => (
                    <img key={index} src={`/icons/${icon.name}.${icon.type}`} alt="" />
                ))}
            </div>

            <div className={styles.skills_content}>
                <Accordion context={context} />

                <div className={styles.images_container}>
                    <img src="/images/workinglate.svg" alt="" />
                </div>
            </div>

        </div>
    )
}
