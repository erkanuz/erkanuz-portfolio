'use client';
import React, { useState } from 'react'
import styles from './style.module.scss'

import { useRouter } from 'next/navigation'

import { Text } from '@/components/Text';
import { SendButton } from '@/components';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';

const fieldInfo = {
  fullname: {
    label: 'What’s your name ?',
    placeholder: 'John Doe *'
  },
  email: {
    label: 'What’s your email ?',
    placeholder: 'example@example.com *'
  }
};

export const Contact = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    subject: '',
    text: '',
  });

  const router = useRouter();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { fullname, email, subject, text } = formData;

    if (!fullname || !email || !subject || !text) {
      return;
    }

    try {
      const res = await fetch('/api/messages', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
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
          fullname: '',
          email: '',
          subject: '',
          text: '',
        });
        router.push('/');
      } else {
        throw new Error('Failed to send a message');
      }
    } catch (error) {
      console.log(error);
    }
  };

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from('.titleL', {
      opacity: 0,
      x: 300,
      duration: 2,
      scrollTrigger: {
        trigger: '.titleL'
      }
    })
    gsap.from('.DescR', {
      opacity: 0,
      x: -300,
      duration: 2,
      scrollTrigger: {
        trigger: '.DescR'
      }
    })
  })

  return (
    <div className={styles.contact} id="contacts">
      <div>
        <h1 className={styles.contact_title}>Contact Me /</h1>
      </div>

      <div>
        <h2 className='titleL' data-target="target">Let’s Connect! </h2>
        <p className='DescR' data-target="target">As a freelance web developer, I have a growing understanding of front-end technologies like React and Next.js. I'm dedicated to building user-friendly and scalable web applications while continually expanding my skills and knowledge.</p>
      </div>

      <div className={styles.container}>
        <form onSubmit={handleSubmit}>
          <div className={styles.addgap}>
            {['fullname', 'email'].map((field, index) => (
              <div key={field} className={styles.forms}>
                <label htmlFor={field}>
                  <span className={styles.counter}>{String(index + 1).padStart(2, '0')}</span>
                  {fieldInfo[field].label}
                </label>
                <input
                  name={field}
                  onChange={handleInputChange}
                  value={formData[field]}
                  type={field === 'email' ? 'email' : 'text'}
                  placeholder={fieldInfo[field].placeholder}
                  maxLength={40}
                  className={styles.input}
                  required
                />
                <span className={styles.inputborder}></span>
              </div>
            ))}

            <div className={styles.forms}>
              <label htmlFor="subject">
                <span className={styles.counter}>03</span>
                What’s specific area or task do you need help ?
              </label>
              <input
                name="subject"
                onChange={handleInputChange}
                value={formData.subject}
                type="text"
                placeholder="Can you help me to build full working Sass project using Next.js  *"
                className={styles.input}
                required
              />
              <span className={styles.inputborder}></span>
            </div>

            <div className={styles.forms}>
              <label htmlFor="text">
                <span className={styles.counter}>04</span>
                Your Message !
              </label>
              <textarea
                id="text"
                name="text"
                onChange={handleInputChange}
                value={formData.text}
                cols="30"
                rows="10" placeholder='Please provide any additional details or specific requests you have for this project *'
              ></textarea>
            </div>
          </div>

          <div className={styles.button_center}>
            <SendButton />
          </div>

        </form>
      </div>

      <Text />
    </div>
  );
};