export default function Page() {
  const resume = "/assets/pdfs/HenryVendittelliResume2024.pdf";

  return (
    <main className="h-full w-full flex justify-center items-center">
      <div className="p-4 w-3/4 sm:w-1/2 border transition-all duration-300 ease-in-out border-primary basic-glow">
        <div className="text-3xl font-bold pb-4 flex justify-center">
          Contact Me
        </div>
        <div className="sm:text-2xl text-lg text-primary-1">
          <div className="flex justify-between">
            <p>Email:</p>
            <p>hvendittelli@gmail.com</p>
          </div>
          <div className="flex justify-between">
            <p>Phone:</p>
            <p>647-926-6820</p>
          </div>
          <div className="flex justify-between">
            <p>Resume:</p>
            <a
              className="text-blue-600 hover:text-blue-300"
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
