import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Data from "../projectsData/projectsData.json";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState({});
  const [count, setCount] = useState(id);

  useEffect(() => {
    const getData = () => {
      setProject(Data[count]);
    };
    getData();
  }, [project, count, id]);

  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative ">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-primary/50 z-10" />
        <img
          src={project.image}
          alt="/"
          className="w-full h-[50vh] object-cover z-1"
        />
        <div className="absolute top-[80%] left-[5%] max-w-[1240px] w-full  text-white z-10 p-2">
          <p className="text-2xl">{project.name}</p>
        </div>
      </div>
      <div className="grid md:grid-cols-5 mx-auto max-w-[1240px] py-8 gap-8">
        <div className="col-span-4 px-5">
          lt is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </div>
        <div className="md:col-span-1 col-span-4 text-center">
          <p className=" text-xl font-bold">Dependencies</p>
          <ul className="mt-3">
            <li>axios</li>
            <li className="my-2">deneme</li>
            <li>Yapam</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center mt-10">
        <div className="flex mb-3">
          {count === 0 || id === 0 ? (
            ""
          ) : (
            <AiOutlineArrowLeft
              className="cursor-pointer hover:scale-125 hover:shadow-md hover:shadow-hoverc rounded-full mr-5"
              size={36}
              onClick={() => setCount(parseInt(count) - 1)}
            />
          )}
          {count === 4 ? (
            ""
          ) : (
            <AiOutlineArrowRight
              className="cursor-pointer hover:scale-125 hover:shadow-md hover:shadow-hoverc rounded-full"
              size={36}
              onClick={() => setCount(parseInt(count) + 1)}
            />
          )}
        </div>
        <div>
          <Link
            className="text-hoverc uppercase my-2 px-5 py-1 text-xl rounded-lg hover:scale-125 hover:text-tcolor hover:bg-hoverc duration-500"
            to="/"
          >
            Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
