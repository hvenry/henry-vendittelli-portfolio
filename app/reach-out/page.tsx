import ContactCard from "@/components/ui/ContactCard";

export const metadata = {
  title: "Reach Out! - henryvendittelli.com",
  description: "Henry's contact information + resume."
};

export default function Page() {
  return (
    <main className="h-full flex flex-col justify-center items-center">
      <ContactCard />
    </main>
  );
}
