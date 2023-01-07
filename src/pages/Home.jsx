import React from "react";
import { Carousel } from "flowbite-react";

const Home = () => {
  return (
    <>
      <div className="text-center text-3xl font-bold">
        <h1>WELCOME</h1>
      </div>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 mb-5 mt-1 mx-3">
        <Carousel slideInterval={3000}>
          <img
            src="https://images.unsplash.com/photo-1583922606661-0822ed0bd916?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1977&q=80"
            alt="..."
          />
          <img
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="..."
          />
          <img
            src="https://images.unsplash.com/photo-1564069114553-7215e1ff1890?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
            alt="..."
          />
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="..."
          />
          <img
            src="https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
            alt="..."
          />
        </Carousel>
      </div>
    </>
  );
};

export default Home;
