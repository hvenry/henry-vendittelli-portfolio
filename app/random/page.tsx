import TabsContainer from "@/components/TabsContainer";
import PageHeader from "@/components/PageHeader";
import { PiShuffle } from "react-icons/pi";

export const metadata = {
  title: "Random - henryvendittelli.com",
  description: "Setup, OS, Configs, Software, Books, and more."
};

export default function Page() {
  return (
    <main className="flex flex-col pt-8 pb-16 sm:h-[calc(var(--vh)_*100-10rem)] sm:pb-0">
      <PageHeader
        icon={<PiShuffle size={26} />}
        title="Random"
        description="Setup, OS, configs, software, books, and more!"
      />
      <div className="mt-8 sm:min-h-0 sm:flex-1">
        <TabsContainer />
      </div>
    </main>
  );
}
