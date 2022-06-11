import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const Details = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const {
    img1,
    img2,
    img3,
    name,
    desc1,
    desc2,
    desc3,
    desc4,
    desc5,
    desc6,
    desc7,
    desc8,
    desc9,
    desc10,
    desc11,
    date,
    tools,
    status,
    live,
    client,
    server,
  } = details;

  useEffect(() => {
    const url = `https://agile-wave-50135.herokuapp.com/project/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, [id]);
  return (
    <div>
      <div className="container mx-auto">
        <h1 className="text-center text-primary text-5xl mt-20">Details</h1>
        <div>
          <div className="hero my-10">
            <div className="hero-content flex-col lg:flex-row">
              <div className="h-96 carousel carousel-vertical rounded-box">
                <div className="carousel-item h-full">
                  <img src={img1} alt="" />
                </div>
                <div className="carousel-item h-full">
                  <img src={img2} alt="" />
                </div>
                <div className="carousel-item h-full">
                  <img src={img3} alt="" />
                </div>
              </div>
              <div className="mx-5">
                <h2 className="text-5xl text-primary mx-auto py-3">{name}</h2>
                <h2 className="text-xl  mx-auto py-3"><span className="text-secondary text-xl font-bold">Status:</span> {status}</h2>
                <h2 className="text-xs mx-auto py-3">Date: {date}</h2>
                <h2 className="text-xl font-bold mx-auto py-3 text-secondary">Desrption:</h2>
                <p className="my-2 px-3"> ● {desc1}</p>
                <p className="my-2 px-3"> ● {desc2}</p>
                <p className="my-2 px-3"> ● {desc3}</p>
                <p className="my-2 px-3"> ● {desc4}</p>
                <p className="my-2 px-3"> ● {desc5}</p>
                <p className="my-2 px-3"> ● {desc6}</p>
                <p className="my-2 px-3"> ● {desc7}</p>
                <p className="my-2 px-3"> ● {desc8}</p>
                <p className="my-2 px-3"> ● {desc9}</p>
                <p className="my-2 px-3"> ● {desc10}</p>
                <p className="my-2 px-3"> ● {desc11}</p>
                <p className="my-2">
                  <spen className="text-xl font-bold text-secondary">Tools:</spen> {tools}
                </p>
                <div className="my-4">
                  <a target="blank" className="btn btn-primary mx-2" href={live}>
                    Live Link
                  </a>
                  <a target="blank" className="btn btn-primary mx-2" href={client}>
                    Client Link
                  </a>
                  <a target="blank" className="btn btn-primary mx-2 " href={server}>
                    Server Link
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
