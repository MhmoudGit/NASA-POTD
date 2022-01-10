import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-page">
      <div>
        <h1>Nasa Photo Of The Day</h1>
        <p>
          Astronomy Picture of the Day (APOD) is a website provided by NASA and
          Michigan Technological University (MTU). According to the website,
          "Each day a different image or photograph of our universe is featured,
          along with a brief explanation written by a professional astronomer."
          The photograph does not necessarily correspond to a celestial event on
          the exact day that it is displayed, and images are sometimes repeated.
          However, the pictures and descriptions often relate to current events
          in astronomy and space exploration.
        </p>
        <Link className="link" to="/NasaPhoto">
              <button className="a" >Nasa POTD</button>
            </Link>
      </div>
    </div>
  );
}

export default Home;
