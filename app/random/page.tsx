import { LiaRandomSolid } from "react-icons/lia";
import { setup, mac_software } from "@/data";
import Image from "next/image";
import { CollapsibleTab } from "@/components/ui/CollapsibleTab"; // Import your new Tab component

export const metadata = {
  title: "Random - henryvendittelli.com",
  description: "Setup, OS, Configs, Software, Books, and more."
};

const getImagePath = (imageName: string) =>
  `/assets/images/icons/${imageName}.png`;

export default function Page() {
  return (
    <main className="pt-8 pb-16 sm:pb-24">
      <div className="border border-primary p-4 mx-2 mb-16">
        <div className="flex items-end gap-4 pb-4">
          <div className="flex items-center gap-2">
            <LiaRandomSolid size={30} />
            <p className="text-3xl">Random</p>
          </div>
        </div>
        <p className="sm:text-2xl text-xl text-justify text-primary-1">
          Setup, OS, Configs, Software, Books, and more to come.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-12 md:w-full px-2">
        <CollapsibleTab title="Setup Equipment">
          <ul className="text-primary-1 font-mono flex flex-col gap-2">
            {setup.map((item, index) => (
              <li key={index}>
                <div className="flex flex-col sm:gap-2 sm:flex-row">
                  <p className="text-xl font-bold">{item.name}: </p>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={item.link}
                    className="text-lg sm:text-xl text-blue-600 hover:text-blue-300"
                  >
                    {item.description}
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </CollapsibleTab>
        <CollapsibleTab title="Currently Reading">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            <div className="flex flex-col gap-2 font-mono">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.amazon.ca/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882"
              >
                <p className="text-3xl font-bold text-primary-1 hover:text-blue-300">
                  Clean Code
                </p>
              </a>
              <p className="text-xl text-primary-1">
                A Handbook of Agile Software Craftsmanship
              </p>
              <p className="text-md text-primary-2">By: Robert C. Martin</p>
              <p className="text-md text-gray-500">98/411</p>
            </div>
            <div className="flex justify-center items-center">
              <Image
                src={"/assets/images/clean_code.jpg"}
                alt="Clean Code"
                width={1920}
                height={1080}
                className="border border-primary p-1 h-48 w-auto"
                priority
              />
            </div>
          </div>
        </CollapsibleTab>
        <CollapsibleTab title="MacBook Software">
          <ul className="text-2xl font-mono flex flex-col gap-4 sm:gap-6">
            {mac_software.map((software, index) => (
              <li key={index}>
                <div className="flex flex-row items-center gap-2 mb-2">
                  <Image
                    src={getImagePath(software.icon)}
                    alt={software.name}
                    width={256}
                    height={256}
                    className="size-7"
                  />
                  <a
                    href={software.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-1 sm:text-3xl text-2xl hover:text-blue-300"
                  >
                    {software.name}
                  </a>
                </div>
                <p className="lg:text-xl sm:text-lg text-sm font-mono text-justify text-primary-2">
                  {software.description}
                </p>
              </li>
            ))}
          </ul>
        </CollapsibleTab>
      </div>
    </main>
  );
}
