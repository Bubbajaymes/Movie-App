import React, { useEffect, useState } from 'react'
import Schedule from './Schedule'
import Trends from './Trends'
import Blog from './Blog'
import Footer from './Footer'
import BackToTop from '../components/BackToTop'

export default function Main() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <main>
        <Schedule />
        <Trends />
        <Blog />
        <Footer />
        <BackToTop scroll={scroll} />
    </main>
  )
}
