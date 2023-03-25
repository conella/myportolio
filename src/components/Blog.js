import React from "react";
import { UsersIcon } from "@heroicons/react/solid";
import { blogs } from "../data";

export default function Blog() {
  return (
    <section id="blog">
      <div className="container px-5 py-10 mx-auto text-center">
        <UsersIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Popular blog posts
        </h1>
        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
          Here you'll find articles about my experiences and insights as a
          software engineer. From coding tips to industry trends, I share my
          thoughts on a wide range of topics related to software development.
          I'm passionate about sharing my knowledge and connecting with others
          in the industry, so feel free to leave a comment or reach out if you
          have any questions or feedback. I hope you find my blog posts
          informative and inspiring!
        </p>
        <div className="flex flex-wrap m-4">
          {blogs.map((blog) => (
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                <div className="inline-flex items-center">
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-white">
                      {blog.title}
                    </span>
                    <span className="text-gray-500 text-sm">
                      <a
                        href={blog.link}
                        className="inline-flex text-white bg-blue-900 border-0 py-2 px-4 focus:outline-none hover:bg-blue-800 rounded text-sm my-1"
                      >
                        Show Post
                      </a>
                    </span>
                  </span>
                  <img
                    alt="blog"
                    src={blog.image}
                    className="object-cover object-center"
                    style={{ width: "300px", height: "200px" }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>
          <a
            href={"https://developersgoingstrong.blogspot.com/"}
            className="inline-flex text-white bg-blue-900 border-0 py-2 px-4 focus:outline-none hover:bg-blue-800 rounded text-sm my-1"
          >
            More Posts
          </a>
        </div>
      </div>
    </section>
  );
}
