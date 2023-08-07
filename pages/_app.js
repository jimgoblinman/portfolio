import React from 'react';
import App from 'next/app';
import styles from '../styles/global.css';
import nextConfig from '../next.config';


function MyApp({ Component, pageProps }) {

  const EMAIL_JS_USER_ID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;
  console.log("User_ID_NEXT: "+process.env.NEXT_PUBLIC_EMAILJS_USER_ID)
  console.log("User_ID_REACT: "+process.env.EMAILJS_USER_ID)
  console.log("User_ID_NORMAL: "+process.env.REACT_APP_EMAILJS_USER_ID)

  console.log("User_ID_NEXT_config: "+ EMAIL_JS_USER_ID)
  console.log(process.env)
  console.log(nextConfig)
  return <>
    <Component 
    {...pageProps} />

</>
}

export default MyApp;