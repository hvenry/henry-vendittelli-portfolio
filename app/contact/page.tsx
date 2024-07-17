export default function Page() {
  const resume = "/assets/pdfs/HenryVendittelliResume2024.pdf";

  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center">
      <style>{`
        .glow-on-hover {
          transition: box-shadow 0.3s ease-in-out;
        }
        .glow-on-hover:hover {
          box-shadow: 0 0 64px rgba(255, 255, 255, 0.2);
        }
      `}</style>
      <div className="p-4 sm:w-1/2 w-2/3 border border-neutral-200 glow-on-hover">
        <div className="text-4xl font-bold pb-4 flex justify-center">
          contact me
        </div>
        <div className="md:text-2xl lg:text-3xl text-xl">
          <div className="flex justify-between">
            <p>email:</p>
            <p>hvendittelli@gmail.com</p>
          </div>
          <div className="flex justify-between">
            <p>phone:</p>
            <p>xxx-xxx-xxxx</p>
          </div>
          <div className="flex justify-between">
            <p>resume:</p>
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
