import React from "react";

const Banner = () => {
  return (
    <div class="container ">
      <div class="row mt-2 ">
        <div class="col-md-9 m-0 p-0">
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-bs-ride="true"
          >
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
            </div>
            <div class="carousel-inner" style={{ height: '640px' }}>
              <div class="carousel-item active">
                    <img
                    src=" /img/bn.jpg"
                    class="d-block w-100"
                    alt="..."
                    />
              </div>
              <div class="carousel-item ">
                <img src="img/bn5.jpg" class="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div class="col-md-3 m-0">
          <img class="img-fluid w-100" src="img/bn2.jpg" alt="" />
          <img class="img-fluid mt-2" src="img/bn3.jpg" alt="" />
          <img class="img-fluid mt-2" src="img/bn4.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
