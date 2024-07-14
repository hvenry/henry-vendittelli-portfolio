'use client'
import { useEffect, useState } from 'react';

export default function BackToTop() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className='w-full flex justify-center'>
      <button
        onClick={scrollToTop}
        className="text-white w-16 border-2 rounded-full border-white text-3xl font-bold hover:text-blue-300 hover:border-blue-300"
        aria-label="Go to top"
      >
        ↑
      </button>
    </div>
  );
}
