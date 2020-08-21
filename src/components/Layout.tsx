import React from "react";

const Layout: React.FC = ({ children }) => {
  return (
    <div className="container">
      <header className="">
        <h1 className="display-4 text-center text-capitalize font-weight-normal">
          expense tracker :{" "}
          <span className="text-success ">Muhammad Bilal</span>
        </h1>
      </header>
      <div className="body-section pt-5">{children}</div>
    </div>
  );
};

export default Layout;
