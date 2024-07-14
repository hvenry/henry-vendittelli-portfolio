export default function Page() {
  return (
    <main className="min-h-screen w-full flex justify-center pt-24 pb-4 px-4">
      <div className="w-full">
        <div className="px-4 pt-8">
          <p className="text-3xl font-bold">about me</p>
        </div>
        {/* clubs */}
        <div className="px-4 pt-12">
          <div className="pb-4">
            <p className="text-3xl font-bold">club involvement</p>
          </div>
          <p className="text-2xl">QUANTT</p>
          <p className="text-2xl">QDAA</p>
          <p className="text-2xl">COMPSA</p>
          <p className="text-2xl">Project Red</p>
          <p className="text-2xl">QMIND</p>
          <p className="text-2xl">QFSF</p>
        </div>
      </div>
    </main>
  );
}
