import React from "react";

const About = () => {
  return (
    // background
    <div className="bg-red-500 h-screen flex justify-center items-center text-3xl">
      <div
        className="grid grid-rows-2"
        // add small variant to the height and width
        style={{ width: `calc(100vw - 800px)`, height: `calc(100vh - 300px)` }}
      >
        {/* ROW 1 */}
        <div className="bg-orange-500 flex justify-center items-center">
          {/* About text rows */}
          <div className="grid grid-rows-2">
            <p className="text-3xl font-bold">
              I'm a Software Developer.
            </p>
            <p className="text-xl text-green-200 font-medium">
              See what I've been listening to ↓
            </p>
          </div>
        </div>
        {/* ROW 2 */}
        {/* This is where we will get the current albums from an api call to lastfm, will implement this later */}
        <div className="grid grid-cols-5">
          <div className="bg-gray-100 text-center">
            <img
              src="https://lastfm.freetls.fastly.net/i/u/300x300/5d348dc371c1bc1470b6c297ef63083d.jpg"
              alt="Paul McCartney & Wings - One Hand Clapping"
            />
          </div>
          <div className="bg-gray-200 text-center">
            <img
              src="https://lastfm.freetls.fastly.net/i/u/300x300/53131f63cde3d29e26930209b91fce57.jpg"
              alt="The Smashing Pumpkins - Siamese Dream"
            />
          </div>
          <div className="bg-gray-300 text-center">
            <img
              src="https://lastfm.freetls.fastly.net/i/u/300x300/89082b98c5c94310c3335e272e9da9db.png"
              alt="Stevie Wonder - Songs in the Key of Life"
            />
          </div>
          <div className="bg-gray-300 text-center">
            <img
              src="https://lastfm.freetls.fastly.net/i/u/300x300/717c5e95227f76aebd16fbf527618cf3.png"
              alt="The Smashing Pumpkins - Adore"
            />
          </div>
          <div className="bg-gray-400 text-center">
            <img
              src="https://lastfm.freetls.fastly.net/i/u/300x300/93c8af4a7de0435b9087de481214f002.jpg"
              alt="Baptiste Trotignon - Share"
            />
          </div>

          <div className="bg-gray-500 text-center">
            <img
              src="https://lastfm.freetls.fastly.net/i/u/300x300/4656ac4233044262c2e7ac0b6c4069e8.png"
              alt="Stevie Wonder - Innervisions"
            />
          </div>
          <div className="bg-gray-600 text-center">
            <img
              src="https://lastfm.freetls.fastly.net/i/u/300x300/96da63916e6341a9bb2e98f24c99a0c3.png"
              alt="The Magnetic Fields - Holiday"
            />
          </div>
          <div className="bg-gray-700 text-center">
            <img
              src="https://lastfm.freetls.fastly.net/i/u/300x300/8695a71527f248f3c8a9875b42d0f508.jpg"
              alt="The Magnetic Fields - 69 Love Songs"
            />
          </div>
          <div className="bg-gray-800 text-center">
            <img
              src="https://lastfm.freetls.fastly.net/i/u/300x300/7dbbfe5461f6495ab0a216db3316f976.jpg"
              alt="The Magnetic Fields - i"
            />
          </div>
          <div className="bg-gray-900 text-center">
            <img
              src="https://lastfm.freetls.fastly.net/i/u/300x300/c992c84ce1794983ab0d0bfe25f06e1e.png"
              alt="The Smashing Pumpkins - Pisces Iscariot"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
