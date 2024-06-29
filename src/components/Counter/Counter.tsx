import React from "react";

interface CounterProps {

}

const Counter: React.FC<CounterProps> = () => {
  return (
    <section id="counter_area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="counter_area_wrapper">
              <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                  <div className="counter_item">
                    <img src="assets/img/icon/camp2.png" alt="icon" />
                    <h2 className="counter">29</h2>
                    <p>Total campaign</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                  <div className="counter_item">
                    <img src="assets/img/icon/hand.png" alt="icon" />
                    <h2 className="counter">1000+</h2>
                    <p>Satisfied donors</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                  <div className="counter_item">
                    <img src="assets/img/icon/mone.png" alt="icon" />
                    <h2 className="counter">6</h2>
                    <p>Year</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                  <div className="counter_item">
                    <img src="assets/img/icon/camp.png" alt="icon" />
                    <h2 className="counter">600</h2>
                    <p>Happy volunteers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
