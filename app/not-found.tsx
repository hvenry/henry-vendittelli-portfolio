import Link from "next/link";

export const metadata = {
  title: "Not Found - henryvendittelli.com",
  description:
    "404 Page not found.",
};

export default function NotFound() {
  return (
    <main className="h-full w-full flex justify-center items-center">
      <div className="border border-primary basic-glow p-4 flex flex-col gap-4 items-center">
        <p className="text-3xl">404 - Page not Found.</p>
        <Link className="text-blue-600 hover:text-blue-300 text-2xl" href="/">
          back
        </Link>
      </div>
    </main>
  );
}
