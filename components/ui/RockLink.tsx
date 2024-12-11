"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import rock_icon from '../../public/assets/images/icons/rock_icon.png';

export default function RockLink() {
  const [isShaking, setIsShaking] = useState(false);
  const [hasClicked, setHasClicked] = useState(false);

  // Check localStorage on mount to see if the animation should be disabled
  useEffect(() => {
    const clicked = localStorage.getItem('rockClicked');
    if (!clicked) {
      const interval = setInterval(() => {
        setIsShaking(true);
        setTimeout(() => setIsShaking(false), 1000);
      }, 2500);

      return () => clearInterval(interval);
    } else {
      setHasClicked(true);
    }
  }, []);

  // Handle link click
  const handleClick = () => {
    localStorage.setItem('rockClicked', 'true');
    setHasClicked(true);
  };

  return (
    <Link href="/rock" onClick={handleClick}>
      <Image
        src={rock_icon}
        alt="Icon"
        className={`size-5 sm:size-8 ${!hasClicked && isShaking ? 'animate-shake' : ''}`}
      />
    </Link>
  );
}

