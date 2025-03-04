import React from "react";
import "../styles/AboutEVs.css";

// Import PDF file for download (Place the PDF inside public/docs/)
const licenseFile = "/docs/EV_License.pdf"; // File stored in public/docs/

const AboutEVs = () => {
  return (
    <div className="about-evs">
      <h2>Why Choose Electric Vehicles?</h2>
      <p>
        EVs are eco-friendly, cost-effective, and the future of transportation.
        They help reduce carbon emissions and reliance on fossil fuels.
        Electric Vehicles (EVs) have emerged as a revolutionary solution to the
        growing concerns about environmental pollution, rising fuel costs, and
        the need for sustainable transportation.One of the most compelling reasons to adopt EVs is their significant environmental benefits. Unlike conventional internal combustion engine (ICE) vehicles, which emit carbon dioxide (CO₂) and other harmful pollutants, EVs produce zero tailpipe emissions. This helps reduce air pollution and contributes to a cleaner and healthier environment. Cities with high traffic congestion often suffer from poor air quality due to vehicle emissions, and EV adoption can play a crucial role in improving urban air conditions.As smart technology integrates with the automotive industry, EVs are evolving into intelligent vehicles with features such as autonomous driving, AI-powered navigation, and IoT connectivity. Companies like Tesla, Rivian, and traditional automakers are investing in self-driving technology, making EVs more convenient and efficient.

Governments worldwide are also supporting EV adoption through policies that promote sustainable transportation. Investments in EV charging networks, renewable energy sources, and smart grids are helping build the infrastructure needed for mass EV adoption. Countries like Norway, the Netherlands, and China have already made significant progress in transitioning to EV-dominated transportation systems.
      </p>

      <p>
        Unlike traditional gasoline or diesel-powered vehicles, EVs run on
        electricity, significantly reducing carbon emissions and air pollution.
        This makes them an eco-friendly alternative that helps combat climate
        change and improves air quality, especially in urban areas.Additionally, EVs help reduce dependence on fossil fuels, which are non-renewable and contribute to greenhouse gas emissions. By utilizing electricity from renewable energy sources such as solar, wind, and hydroelectric power, EVs further minimize their carbon footprint, making them a key component in the fight against climate change.Beyond environmental benefits, EVs offer significant cost savings to users. Traditional gasoline and diesel vehicles require frequent maintenance, including oil changes, exhaust system repairs, and engine servicing. In contrast, EVs have fewer moving parts, reducing the need for regular maintenance and lowering overall ownership costs. The absence of an internal combustion engine eliminates issues related to fuel injectors, spark plugs, and exhaust systems, making EVs more reliable and cost-effective in the long run.

Moreover, electricity is generally cheaper than gasoline or diesel, making EVs a more affordable option for daily commuting. Many governments also provide incentives, such as tax credits and subsidies, further reducing the upfront cost of purchasing an EV. Additionally, home charging solutions enable users to charge their vehicles overnight, ensuring they wake up to a fully charged battery without the need for frequent trips to the fuel station.
      </p>

      <p>
        As battery technology improves, EVs are becoming more efficient, with
        longer ranges and faster charging capabilities. With advancements in
        smart technology and AI integration, EVs are not just vehicles but a
        step towards a smarter, greener, and more sustainable future.A key factor driving EV adoption is the rapid advancement in battery technology. Modern lithium-ion batteries, which power most EVs, have significantly improved in terms of energy density, charging speed, and lifespan. Innovations such as solid-state batteries and ultra-fast charging technologies are expected to further enhance EV performance, reducing charging times and increasing driving range.

Range anxiety—the fear that an EV will run out of power before reaching a charging station—has been a major concern for potential buyers. However, with improved battery technology, many EVs now offer a range of 300-500 km on a single charge, making them more practical for long-distance travel.Electric vehicles are not just a trend but the future of transportation. They offer a sustainable, cost-effective, and environmentally friendly alternative to traditional vehicles. As battery technology improves and charging infrastructure expands, EVs will become even more practical for everyday use. With governments, automakers, and technology companies working together to drive innovation, the future of mobility is electric. Transitioning to EVs is a crucial step towards a cleaner, greener, and smarter world.
      </p>

      {/* License & Download Section */}
      <div className="license-section">
        <h3>Our Government License & Certification 📜</h3>
        <p>
          Our electric vehicles are **officially licensed** and approved by the
          **Government of India**. Download the certification document below.
        </p>
        <p>The Indian government has taken significant steps to promote electric vehicles (EVs) as part of its strategy to reduce carbon emissions, oil dependence, and urban pollution. Various policies, subsidies, and infrastructure projects have been introduced to accelerate the adoption of EVs. Here are some key initiatives:</p>
        <span>🔹 FAME I (2015-2019)

Focused on demand incentives and charging infrastructure development.
Supported hybrid and electric buses, two-wheelers, three-wheelers, and four-wheelers.
🔹 FAME II (2019-2024) [₹10,000 Crore Budget]

Incentives for EV buyers (₹15,000 per kWh for two-wheelers, ₹20,000 per kWh for four-wheelers).
Subsidies for electric buses in public transport.
Investment in charging infrastructure (2,700+ charging stations planned).
Focus on electric two-wheelers (E2W), three-wheelers (E3W), and commercial EVs.
</span>
        
        {/* Download Button */}
        <p><a href={licenseFile} download="EV_License.pdf" className="btn-download">
          📥 Download License Document
        </a>
        </p>
      </div>
    </div>
  );
};

export default AboutEVs;
