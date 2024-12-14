import TabsContainer from "@/components/ui/TabsContainer";
import { LiaRandomSolid } from "react-icons/lia";

export const metadata = {
  title: "Random - henryvendittelli.com",
  description: "Setup, OS, Configs, Software, Books, and more."
};

export default function Page() {
  return (
    <main className="pt-8 pb-16 sm:pb-24">
      {/* main box */}
      <div className="border border-primary p-4 mx-2 mb-16">
        {/* title */}
        <div className="flex items-end gap-4 pb-4">
          <div className="flex items-center gap-2">
            <LiaRandomSolid size={30} />
            <p className="text-3xl">Random</p>
          </div>
        </div>
        {/* desc */}
        <p className="sm:text-2xl text-xl text-justify text-primary-1">
          Setup, OS, Configs, Software, Books, and more!
        </p>
      </div>
      {/* Tabs container */}
      <TabsContainer />
    </main>
  );
}
