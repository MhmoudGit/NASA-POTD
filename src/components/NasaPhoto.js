import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const apiKey = process.env.REACT_APP_NASA_KEY;

function NasaPhoto() {
  const [PhotoData, setPhotoData] = useState(null);

  useEffect(() => {
    const fetchPhoto = async () => {
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
      );
      const data = await res.json();
      setPhotoData(data);
      console.log(data);
    };

    fetchPhoto();
  }, []);

  if (!PhotoData) {
    return <div />;
  }

  return (
    <div className="POTD">
      <div className="NasaPhoto">
        {PhotoData.media_type === "image" ? (
          <img src={PhotoData.url} alt={PhotoData.title} />
        ) : (
          <iframe
            title="space-video"
            src={PhotoData.url}
            frameBorder="0"
            allow="encrypted-media"
            allowFullScreen
            className="photo"
          />
        )}
        <div className="PicData">
          <h1>{PhotoData.title}</h1>
          <h3>Copyright: {PhotoData.copyright}</h3>
          <p>{PhotoData.date}</p>
          <p>{PhotoData.explanation}</p>
          <div className="btns">
            {PhotoData.media_type === "image" ? (
              <a
                className="a"
                target="_blank"
                rel="noreferrer"
                href={PhotoData.hdurl}
              >
                {" "}
                HD Photo{" "}
              </a>
            ) : (
              <a
                className="a"
                target="_blank"
                rel="noreferrer"
                href={PhotoData.url}
              >
                Video Url
              </a>
            )}
            <Link className="link" to="/">
              <button>Home</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NasaPhoto;
