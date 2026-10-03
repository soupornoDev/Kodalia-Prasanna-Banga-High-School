"use client";
import Image from "next/image";

export default function HeroSection() {
  const demoData = [
    { id: 1, uri: "/assets/images/demo2.jpg" },
    { id: 2, uri: "/assets/images/demo3.jpg" },
    { id: 3, uri: "/assets/images/demo4.jpg" },
  ];

  return (
    <div className="hero-section">
      <div className="my-auto mx-auto mt-3 grid grid-cols-1 md:grid-cols-3 gap-4">
        {demoData.map((val) => (
          <Image
            key={val.id}
            src={val.uri}
            alt={`Demo ${val.id}`}
            width={512}
            height={300}
            className="rounded-lg object-cover"
          />
        ))}
      </div>
    </div>
  );
}
