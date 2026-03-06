import PropertyCard from "./PropertyCard";
import "../assets/css/PropertySection.css";

import p1 from "../assets/img/property/property-1.jpg";
import p2 from "../assets/img/property/property-2.jpg";
import p3 from "../assets/img/property/property-3.jpg";

export default function PropertySection() {
  return (
    <section className="property-section">
      <div className="container">
        <div className="section-title">
          <h4>Latest Property</h4>
        </div>

        <div className="property-grid">
          <PropertyCard
            image={p1}
            title="Godrej Palm Retreat"
            location="Sector 150, Noida"
          />
          <PropertyCard
            image={p2}
            title="DLF King's Court"
            location="New Delhi"
          />
          <PropertyCard image={p3} title="Lodha World One" location="Mumbai" />
        </div>
      </div>
    </section>
  );
}
