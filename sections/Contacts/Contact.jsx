'use client';
import React, { useState } from 'react'
import styles from './style.module.scss'

import { useRouter } from 'next/navigation'

import { Text } from '@/components/Text';
import { SendButton } from '@/components';

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

  return (
    <div className={styles.contact} id="contacts">
         <div>
              <h1 className={styles.contact_title}>Contact Me /</h1>
         </div>

      <div className={styles.container}>
           <div>
                <h3 className={styles.con_tit}>Let's talk !</h3>
                <p className={styles.paragrah}>Fill out the form and l'll get back to you shortly.</p>
                <img src="/images/office.svg" alt="" className={styles.img} />
           </div>

           <div className={styles.anim_form}>
               <form onSubmit={handleSubmit}>
                     <div className={styles.addgap}>
                       {['fullname', 'email'].map((field) => (
                         <div key={field} className={styles.forms}>
                              <input
                                name={field}
                                onChange={handleInputChange}
                                value={formData[field]}
                                type={field === 'email' ? 'email' : 'text'}
                                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                                className={styles.input}
                                required
                              />
                              <span className={styles.inputborder}></span>
                         </div>
                       ))}
                     </div>

                     <div className={styles.forms}>
                         <input
                           name="subject"
                           onChange={handleInputChange}
                           value={formData.subject}
                           type="text"
                           placeholder="Subject"
                           className={styles.input}
                           required
                         />
                         <span className={styles.inputborder}></span>
                     </div>   

                     <textarea
                        name="text"
                        onChange={handleInputChange}
                        value={formData.text}
                        cols="30"
                        rows="10"
                     ></textarea>   

                     <SendButton />
                     
               </form>
           </div>
      </div>

      <Text />
    </div>
  );
};