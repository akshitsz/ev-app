import React from "react";
import "../styles/Models.css"; 


const Models = () => {
  return (
    <div className="models-page">
      <h2>Explore Our Electric Vehicle Models⚡</h2>

      {/* EV Models Section */}
      <section className="ev-models">
        <div className="model-card">
          <img src='' alt="EV Model 1" />
          <h3>Future Wheels X1</h3>
          <p>⚡ **Range:** 400 miles</p>
          <p>🔋 **Battery:** 75 kWh</p>
          <p>🏎️ **Top Speed:** 200 km/h</p>
          <p>💰 **Price:** $45,000</p>
        </div>

        <div className="model-card">
          <img src='' alt="EV Model 2" />
          <h3>Future Wheels Y3</h3>
          <p>⚡ **Range:** 350 miles</p>
          <p>🔋 **Battery:** 70 kWh</p>
          <p>🏎️ **Top Speed:** 180 km/h</p>
          <p>💰 **Price:** $39,000</p>
        </div>

        <div className="model-card">
          <img src='' alt="EV Model 3" />
          <h3>Future Wheels Z5</h3>
          <p>⚡ **Range:** 500 miles</p>
          <p>🔋 **Battery:** 90 kWh</p>
          <p>🏎️ **Top Speed:** 220 km/h</p>
          <p>💰 **Price:** $55,000</p>
        </div>
      </section>

      {/* EV Parts Section */}
      <h2>EV Engine Parts & Components ⚙️</h2>
      <section className="ev-parts">
        <div className="part-card">
          <img src='' alt="EV Battery" />
          <h3>High-Capacity Battery</h3>
          <p>🔋 Stores energy for long-range driving.</p>
        </div>

        <div className="part-card">
          <img src='' alt="EV Motor" />
          <h3>Electric Motor</h3>
          <p>⚙️ Converts battery power into motion.</p>
        </div>

        <div className="part-card">
          <img src='' alt="EV Wheels" />
          <h3>Regenerative Braking System</h3>
          <p>♻️ Converts braking energy into electricity.</p>
        </div>
      </section>
    </div>
  );
};

export default Models;
