import React, { useEffect, useState } from "react";

function Home() {
  const [allData, setallData] = useState([]);
  let content;

  useEffect(() => {
    getdata();
  }, []);

  const getdata = async () => {
    let result = await fetch("http://localhost:3000/getdata");
    const data = await result.json();
    console.log(data);
    setallData(data);
  };

  function findIt(item) {
    if (!item.media) {
      return;
    } else {
      if (item.media.mimetype.startsWith("image/")) {
        return (content = (
          <img
            style={{
              marginLeft: "100px",
            }}
            src={item.media.url}
            alt="image"
            width={300}
            height={250}
          />
        ));
      } else if (item.media.mimetype.startsWith("video/")) {
        return (content = <video src={item.media.url}></video>);
      } else {
        return (content = <h1>Please always put images or videos</h1>);
      }
    }
  }

  return (
    <div>
      <br />
      <br />
      <br />
      
      {allData.map((item, index) => (
        <ul key={index}>
          <li>{item.title}</li>
          <li>{item.filename}</li>
          <li>{item.message}</li>

          <li>{findIt(item)}</li>
        </ul>
      ))}
    </div>
  );
}

export default Home;
