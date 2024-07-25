export default function Page() {
  const resume = "/assets/pdfs/HenryVendittelliResume2024.pdf";

  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center">
      <div className="p-4 sm:w-1/2 w-2/3 border transition-all duration-300 ease-in-out border-neutral-200 basic-glow">
        <div className="text-3xl font-bold pb-4 flex justify-center">
          Contact Me
        </div>
        <div className="sm:text-2xl text-lg text-gray-200">
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
              className="text-blue-300 hover:text-blue-500"
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
