"use client";

import { useEffect, useRef, useState } from "react";
import { setup, mac_software } from "@/data";
import Image from "next/image";
import { CollapsibleTab } from "@/components/ui/CollapsibleTab";
import { ZIndexProvider } from "@/components/ui/ZIndexContext";
import { ImSpinner2 } from "react-icons/im";

const getImagePath = (imageName: string) =>
  `/assets/images/icons/${imageName}.png`;

const TabsContainer = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [positions, setPositions] = useState<{ x: number; y: number }[] | null>(
    null
  );
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Function to shuffle an array
  const shuffleArray = (array: number[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  useEffect(() => {
    const checkScreenSize = () => setIsSmallScreen(window.innerWidth <= 640);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);
  useEffect(() => {
    if (!containerRef.current) return;

    // Measure the container
    const rect = containerRef.current.getBoundingClientRect();
    const numberOfTabs = 6;
    const gridRows = 3;
    const gridCols = 2;

    // Generate shuffled grid positions
    const gridPositions = shuffleArray(
      Array.from({ length: gridRows * gridCols }, (_, i) => i)
    );

    // Generate random positions within grid cells
    const newPositions = gridPositions.slice(0, numberOfTabs).map((pos) => {
      const row = Math.floor(pos / gridCols);
      const col = pos % gridCols;
      const x =
        col * (rect.width / gridCols) +
        (rect.width / gridCols) * 0.25 * Math.random() +
        rect.width * 0.1;
      const y =
        row * (rect.height / gridRows) +
        (rect.height / gridRows) * 0.25 * Math.random();
      return { x, y };
    });

    setPositions(newPositions);
  }, [isSmallScreen]);

  return (
    <div
      className={`${
        isSmallScreen
          ? "relative h-auto overflow-y-scroll mx-2"
          : "fixed h-[calc(100vh-16rem)] overflow-hidden w-screen right-0 top-64"
      }`}
      ref={containerRef}
    >
      {positions === null ? (
        <div className="flex h-full animate-spin justify-center items-center">
          <ImSpinner2 />
        </div>
      ) : (
        <ZIndexProvider>
          {/* Tab 1: MacBook Software */}
          <CollapsibleTab
            title="MacBook Software"
            initialPosition={positions[0]}
          >
            <div className="max-h-[400px] max-w-xl overflow-y-auto">
              <ul className="flex flex-col gap-4 sm:gap-6">
                {mac_software.map((software, index) => (
                  <li key={index}>
                    <div className="flex flex-row items-center gap-2 mb-2">
                      <Image
                        src={getImagePath(software.icon)}
                        alt={software.name}
                        width={128}
                        height={128}
                        className="size-7"
                        draggable="false"
                      />
                      <a
                        href={software.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="sm:text-2xl text-xl hover:text-blue-300"
                        draggable="false"
                      >
                        {software.name}
                      </a>
                    </div>
                    <p className="lg:text-lg sm:text-md text-sm font-mono text-justify text-primary-2">
                      {software.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </CollapsibleTab>
          {/* Tab 2: Setup Equipment */}
          <CollapsibleTab
            title="Setup Equipment"
            initialPosition={positions[1]}
          >
            <ul className="flex flex-col gap-2">
              {setup.map((item, index) => (
                <li key={index}>
                  <div className="flex flex-col sm:gap-2 sm:flex-row">
                    <p className="text-xl">{item.name}:</p>
                    <div>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={item.link}
                        className="font-mono text-md sm:text-lg text-blue-600 hover:text-blue-300"
                        draggable="false"
                      >
                        {item.description}
                      </a>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </CollapsibleTab>
          {/* Tab 3: Currently Reading */}
          <CollapsibleTab
            title="Currently Reading"
            initialPosition={positions[2]}
          >
            <div className="flex flex-col gap-2 mb-2">
              <div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.amazon.ca/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882"
                  className="text-2xl hover:text-blue-300 inline-block"
                  draggable="false"
                >
                  Clean Code
                </a>
              </div>
              <p className="text-xl text-primary-1">
                A Handbook of Agile Software Craftsmanship
              </p>
              <p className="text-md text-primary-2 font-mono">
                By: Robert C. Martin
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src={"/assets/images/clean_code.jpg"}
                alt="Clean Code"
                width={1920}
                height={1080}
                className="border border-primary p-1 h-48 w-auto"
                priority
                draggable="false"
              />
            </div>
          </CollapsibleTab>
          {/* Tab 4: Hobbies */}
          <CollapsibleTab title="Hobbies" initialPosition={positions[3]}>
            <ul className="text-2xl">
              <li>Espresso</li>
              <li>Cooking</li>
              <li>Music</li>
              <li>Fashion</li>
              <li>Keyboards</li>
              <li>Retro Tech</li>
              <li>Graphic Design</li>
            </ul>
          </CollapsibleTab>
          {/* Tab 5: Album Rec */}
          <CollapsibleTab title="Album Rec" initialPosition={positions[4]}>
            <div className="flex flex-col justify-center items-center gap-2">
              <Image
                src={"/assets/images/velocity_design_comfort.png"}
                alt="Clean Code"
                width={512}
                height={512}
                className="border border-primary p-1 h-48 w-auto"
                priority
                draggable="false"
              />
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://open.spotify.com/album/0eUUQ4rly8Q8PyJPWLgde2"
                className="text-lg hover:text-blue-300 inline-block"
                draggable="false"
              >
                Velocity : Design : Comfort
              </a>
            </div>
          </CollapsibleTab>
          {/* Tab 6: Rocco */}
          <CollapsibleTab title="My Dog (Rocco)" initialPosition={positions[5]}>
            <div className="flex justify-center items-center">
              <Image
                src={"/assets/images/rocco.png"}
                alt="Clean Code"
                width={512}
                height={512}
                className="border border-primary p-1 h-64 w-auto"
                priority
                draggable="false"
              />
            </div>
          </CollapsibleTab>
        </ZIndexProvider>
      )}
    </div>
  );
};

export default TabsContainer;
