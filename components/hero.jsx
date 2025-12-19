"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSection() {
  const imageRef = useRef(null);

  useEffect(() => {
    const el = imageRef.current;
    if (!el) return;

    const onScroll = () => {
      if (window.scrollY > 100) el.classList.add("scrolled");
      else el.classList.remove("scrolled");
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950 to-black" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-purple-600/30 blur-[180px] rounded-full" />
      <div className="absolute bottom-[-300px] left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-indigo-600/20 blur-[200px]" />

      <div className="relative z-10 pt-52 text-center px-6">
        <h1 className="text-[56px] md:text-[88px] lg:text-[104px] font-extrabold tracking-tight text-white">
          Manage Your Finances <br /> with Intelligence
        </h1>

        <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
          An AI-powered financial management platform that helps you track,
          analyze, and optimize your spending with real-time insights.
        </p>

        <div className="mt-10">
          <Link href="/dashboard">
            <Button className="px-10 py-6 text-lg rounded-xl bg-purple-600 text-white hover:bg-purple-700 shadow-lg shadow-purple-600/40 transition">
              Get Started
            </Button>
          </Link>
        </div>

        <div className="mt-20 hero-image-wrapper">
          <div ref={imageRef} className="hero-image">
            <Image
              src="/banner.jpeg"
              width={1280}
              height={720}
              alt="Dashboard Preview"
              className="rounded-2xl shadow-2xl border border-white/10 mx-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
