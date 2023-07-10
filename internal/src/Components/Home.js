import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

const Home = () => {
  return (
    <>
      <div className="container">
        <img
          src="https://csrbox.org/news/1633521512banner.jpg"
          alt="Loading"
        ></img>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfUwfN9tH_yOA-y0qByUHOf7n06Ev8HEaCCmNvYBh5QA&s"
                  alt="Error"
                />
                <div className="card-header">
                  <h3>Our Motto</h3>
                </div>
                <div className="card-text">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et
                    magni accusamus hic suscipit quis laborum, molestias
                    laudantium quae vero voluptas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
