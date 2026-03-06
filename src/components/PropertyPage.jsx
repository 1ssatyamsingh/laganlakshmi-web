import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaChevronRight } from "react-icons/fa";
import PropertyCard from "./PropertyCard";
import "../assets/css/PropertyPage.css";

import heroBg from "../assets/img/hero/hero-2.jpg";

// Agent avatars — reuse posted-by images
import pb1 from "../assets/img/property/posted-by/pb-1.jpg";
import pb2 from "../assets/img/property/posted-by/pb-1.jpg";
import pb3 from "../assets/img/property/posted-by/pb-1.jpg";

// Property images
import p1 from "../assets/img/property/property-1.jpg";
import p2 from "../assets/img/property/property-2.jpg";
import p3 from "../assets/img/property/property-3.jpg";
import p4 from "../assets/img/property/property-4.jpg";
import p5 from "../assets/img/property/property-5.jpg";
import p6 from "../assets/img/property/property-6.jpg";
import p7 from "../assets/img/property/property-1.jpg";
import p8 from "../assets/img/property/property-2.jpg";
import p9 from "../assets/img/property/property-3.jpg";

const ALL_PROPERTIES = [
  {
    id: 1,
    image: p1,
    badge: "FOR RENT",
    badgeColor: "blue",
    title: "Supertech Supernova",
    location: "Sector 94, Noida, UP",
    sqft: "1,450",
    beds: "02",
    baths: "03",
    parking: "01",
    agentImg: pb1,
    agentName: "Priya Sharma",
    agentPhone: "987-123-4567",
  },
  {
    id: 2,
    image: p2,
    badge: "FOR RENT",
    badgeColor: "red",
    title: "DLF King's Court",
    location: "Greater Kailash II, New Delhi",
    sqft: "2,800",
    beds: "03",
    baths: "04",
    parking: "02",
    agentImg: pb2,
    agentName: "Rahul Khanna",
    agentPhone: "981-000-1122",
  },
  {
    id: 3,
    image: p3,
    badge: "FOR RENT",
    badgeColor: "dark",
    title: "ATS Advantage",
    location: "Indirapuram, Ghaziabad",
    sqft: "1,685",
    beds: "02",
    baths: "03",
    parking: "01",
    agentImg: pb3,
    agentName: "Vikas Tyagi",
    agentPhone: "955-444-3322",
  },
  {
    id: 4,
    image: p4,
    badge: "FOR RENT",
    badgeColor: "blue",
    title: "Godrej Palm Retreat",
    location: "Sector 150, Noida, UP",
    sqft: "2,283",
    beds: "03",
    baths: "03",
    parking: "02",
    agentImg: pb1,
    agentName: "Ashton Kutcher",
    agentPhone: "123-455-688",
  },
  {
    id: 5,
    image: p5,
    badge: "FOR RENT",
    badgeColor: "red",
    title: "Lodha World One",
    location: "Lower Parel, Mumbai, MH",
    sqft: "3,100",
    beds: "04",
    baths: "04",
    parking: "02",
    agentImg: pb2,
    agentName: "Simran Kaur",
    agentPhone: "976-333-4455",
  },
  {
    id: 6,
    image: p6,
    badge: "FOR RENT",
    badgeColor: "dark",
    title: "Prestige Lakeside",
    location: "Whitefield, Bangalore, KA",
    sqft: "1,900",
    beds: "03",
    baths: "02",
    parking: "01",
    agentImg: pb3,
    agentName: "Megha Gupta",
    agentPhone: "981-555-6677",
  },
  {
    id: 7,
    image: p7,
    badge: "FOR RENT",
    badgeColor: "blue",
    title: "Embassy Grove",
    location: "Indiranagar, Bangalore, KA",
    sqft: "3,200",
    beds: "04",
    baths: "04",
    parking: "02",
    agentImg: pb1,
    agentName: "Arjun Hegde",
    agentPhone: "804-555-6677",
  },
  {
    id: 8,
    image: p8,
    badge: "FOR RENT",
    badgeColor: "dark",
    title: "Marvel Aurum",
    location: "Koregaon Park, Pune, MH",
    sqft: "2,400",
    beds: "03",
    baths: "03",
    parking: "02",
    agentImg: pb2,
    agentName: "Simran Kaur",
    agentPhone: "976-333-4455",
  },
  {
    id: 9,
    image: p9,
    badge: "FOR RENT",
    badgeColor: "red",
    title: "KW Srishti",
    location: "Raj Nagar Extension, Ghaziabad, UP",
    sqft: "1,350",
    beds: "02",
    baths: "03",
    parking: "01",
    agentImg: pb3,
    agentName: "Megha Gupta",
    agentPhone: "981-555-6677",
  },
];

const PAGE_SIZE = 6;

export default function PropertiesPage() {
  const [visible, setVisible] = useState(PAGE_SIZE);
  const showLoadMore = visible < ALL_PROPERTIES.length;

  return (
    <div className="pp-page">
      {/* ── Hero Banner ── */}
      <div className="pp-hero" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="pp-breadcrumb">
          <h2>PROPERTY GRID</h2>
          <div className="pp-trail">
            <FaHome className="pp-trail-home" />
            <NavLink to="/" className="pp-trail-link">
              Home
            </NavLink>
            <FaChevronRight className="pp-trail-arrow" />
            <span className="pp-trail-current">Property</span>
          </div>
        </div>
      </div>

      {/* ── Main Content ── */}
      <section className="pp-content">
        <div className="container">
          {/* Section title */}
          <div className="pp-section-title">
            <h4>PROPERTY GRID</h4>
          </div>

          {/* Cards grid */}
          <div className="pp-grid">
            {ALL_PROPERTIES.slice(0, visible).map((prop) => (
              <PropertyCard
                key={prop.id}
                image={prop.image}
                badge={prop.badge}
                badgeColor={prop.badgeColor}
                title={prop.title}
                location={prop.location}
                sqft={prop.sqft}
                beds={prop.beds}
                baths={prop.baths}
                parking={prop.parking}
                agentImg={prop.agentImg}
                agentName={prop.agentName}
                agentPhone={prop.agentPhone}
              />
            ))}
          </div>

          {/* Load More */}
          {showLoadMore && (
            <div className="pp-loadmore">
              <button
                className="pp-loadmore-btn"
                onClick={() => setVisible((v) => v + PAGE_SIZE)}
              >
                LOAD MORE
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
