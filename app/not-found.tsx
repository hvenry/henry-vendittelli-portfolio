import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Not Found - henryvendittelli.com",
  description: "404 Page not found."
};

export default function NotFound() {
  return (
    <>
      <main className="not-found-page flex h-[calc(var(--vh)_*100-10rem)] w-full items-center justify-center">
        <div className="panel-ticks glow relative flex flex-col items-center gap-4 border border-line p-8">
          <p className="font-display text-2xl font-semibold tracking-wide text-foreground">
            404 - Page not Found.
          </p>
          <Link
            className="link-quiet text-sm uppercase tracking-[0.2em]"
            href="/"
          >
            ← back
          </Link>
        </div>
      </main>
      <div className="fixed inset-x-0 bottom-0 flex justify-center">
        <div className="mx-2 w-full pb-6 sm:mx-4 md:w-2/3 lg:w-1/2 xl:w-1/3">
          <Footer force />
        </div>
      </div>
    </>
  );
}
