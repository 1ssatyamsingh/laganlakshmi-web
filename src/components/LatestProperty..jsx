import PropertyCard from "./PropertyCard";

export default function LatestProperty() {
  return (
    <section className="property-section spad">
      <div className="container">
        <div className="section-title">
          <h4>Latest Property</h4>
        </div>

        <div className="row">
          <PropertyCard
            image="/assets/img/property/property-1.jpg"
            title="Godrej Palm Retreat"
            location="Noida"
          />
          <PropertyCard
            image="/assets/img/property/property-2.jpg"
            title="DLF King's Court"
            location="Delhi"
          />
          <PropertyCard
            image="/assets/img/property/property-3.jpg"
            title="Lodha World One"
            location="Mumbai"
          />
        </div>
      </div>
    </section>
  );
}
