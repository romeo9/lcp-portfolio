import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";

export default function AllPosts() {
  const [allPostsData, setAllPosts] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
        title,
        slug,
        mainImage{
          asset->{
          _id,
          url
        }
      }
    }`
      )
      .then((data) => setAllPosts(data))
      .catch(console.error);
  }, []);

  return (
    <div>
      <h2>Home</h2>
      <h3>This is my home</h3>
      <div>
        {allPostsData &&
          allPostsData.map((post, index) => (
              <span key={index}>
                {post.mainImage !== undefined && <img src={post.mainImage.asset.url} alt="" />}
                <span>
                  <h2>{post.title}</h2>
                </span>
              </span>
          ))}
      </div>
    </div>
  );
}