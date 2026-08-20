import ContactCard from "@/components/ContactCard";

export const metadata = {
  title: "Reach Out! - henryvendittelli.com",
  description: "Henry's contact information + resume."
};

export default function Page() {
  return (
    <main className="flex min-h-[calc(var(--vh)_*100-12rem)] flex-col items-center justify-center">
      <ContactCard />
    </main>
  );
}
