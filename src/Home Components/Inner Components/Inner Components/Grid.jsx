import React from "react";

function Grid() {
  return (
    <>
      <div className="container">
        <h2> OUR PRIORITY </h2>
        </div>
      <div className="bestsellers">
        <div className="card-container">
          <div className="card" id="pics">
            <img
              src="https://i.pinimg.com/564x/6c/83/88/6c8388a37212e64bac75079bcf613d0f.jpg"
              className="card-img-top"
              alt="..."
              height="500"
            />

            <h2>Trees</h2>
            <p>
            Preserving the purity of mountain environments is essential to
              protect the delicate ecosystems that exist at high altitudes,
              where even small amounts of pollution result in significant
              impact on flora and fauna. Pollution in mountain regions can lead
              to the contamination of freshwater sources, threatening the health
              of communities downstream who rely on these pristine waters for
              drinking and agriculture. 
            </p>
          </div>

          <div className="card" id="pics">
            <img
              src="https://i.pinimg.com/564x/a9/ec/8f/a9ec8fbc6420332f98be67ddfa697caf.jpg"
              className="card-img-top"
              alt="..."
              height="500"
            />

            <h2>Rivers</h2>
            <p>
            Preserving the purity of mountain environments is essential to
              protect the delicate ecosystems that exist at high altitudes,
              where even small amounts of pollution result in significant
              impact on flora and fauna. Pollution in mountain regions can lead
              to the contamination of freshwater sources, threatening the health
              of communities downstream who rely on these pristine waters for
              drinking and agriculture.
            </p>
          </div>
          <div className="card" id="pics">
            <img
              src="https://i.pinimg.com/564x/4e/80/f3/4e80f369a3d99f24756e380f5f0a6022.jpg"
              className="card-img-top"
              alt="..."
              height="500"
            />

            <h2>Mountains</h2>
            <p>
              Preserving the purity of mountain environments is essential to
              protect the delicate ecosystems that exist at high altitudes,
              where even small amounts of pollution result in significant
              impact on flora and fauna. Pollution in mountain regions can lead
              to the contamination of freshwater sources, threatening the health
              of communities downstream who rely on these pristine waters for
              drinking and agriculture. 
            </p>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Grid;
