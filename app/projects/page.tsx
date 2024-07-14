import { EvervaultCard } from "@/components/ui/evervault-card";
import { IoHammerSharp } from "react-icons/io5";

export default function Page() {
  const projects = [
    "parkQu",
    "bear the animal tosser",
    "packmanAI",
    "sentiment analysis NLP",
    "my portfolio",
  ];

  return (
    <main className="min-h-screen w-full flex justify-center pt-40 pb-16 px-4">
      <div className="bg-black w-full mx-4">
        {/* intro */}
        {/* name and basic info */}
        <div className="border border-neutral-300">
          <div className="flex justify-center">
            <EvervaultCard className="w-full h-96">
              <div className="flex gap-2 items-center justify-center text-4xl">
                <IoHammerSharp size={30} />
                <span>my projects</span>
              </div>
            </EvervaultCard>
          </div>
        </div>
        <p className="sm:text-2xl text-xl text-justify text-neutral-200 pt-2">
          Here you can see some of the projects that I have worked on.
        </p>
      </div>
    </main>
  );
}
