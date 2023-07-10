import React from "react";
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
    return (
        <>
        <div className="container ">
            <div className="row">
            <div className="col-md-6">
            <div className="card bg-primary-subtle">
              <div className="card-header">
                <h2>Organization</h2>
              </div>
              <div className="card-body">
                <h3>Go-Ed</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                  architecto tempore adipisci deserunt exercitationem esse
                  cumque, minus repellendus, omnis soluta officiis aliquid quo
                  animi nam.
                </p>
              </div>
              <div className="card-footer">
                <button className="btn btn-lg btn-outline-dark">
                  Read more
                </button>
              </div>
              </div>
            </div>

            <div className="col-md-6">
            <div className="card bg-primary-subtle">
              <div className="card-header">
                <h2>Address</h2>
              </div>
              <div className="card-body">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                  architecto tempore adipisci deserunt exercitationem esse
                  cumque, minus repellendus, omnis soluta officiis aliquid quo
                  animi nam.
                </p>
              </div>
              <div className="card-footer">
                <button className="btn btn-lg btn-outline-dark">
                  Maps
                </button>
              </div>
              </div>
            </div>
          </div>
          
        </div>
        </>
    );
};
export default About;