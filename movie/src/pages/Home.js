import React, { useEffect, useState } from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Header from '../components/Header'
import Barner from '../components/Barner'
import Main from './Main';


export default function Home() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY); 
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
        <Header scroll={scroll} />
        <Barner />
        <Main />
        
    </>
  )
}
