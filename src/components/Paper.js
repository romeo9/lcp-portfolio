import React, { useEffect, useState } from "react"
import sanityClient from "../client.js";


export default function Paper() {
  
  const [paper, setPaper] = useState(2);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "paper"]{
            title
        }`)
      .then((data) => setPaper(data[0]))
      .catch(console.error);
  });

  if (!paper) return <div>Loading...</div>;

  return (
    <div>
      <div>
        <h2>{paper.title}</h2>
      </div>
    </div>
  );
}