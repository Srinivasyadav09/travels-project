import { useInView } from "../hooks/useInView";

export default function PackageCard({ pkg, index }) {
  const [cardRef, cardInView] = useInView({ threshold: 0.2 });

  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <div
        ref={cardRef}
        className={`package-card ${cardInView ? "fade-in-card" : ""}`}
        style={{ transitionDelay: `${index * 0.15}s` }}
      >
        <div className="package-image">
          <img src={pkg.image_url} alt={pkg.name} />
        </div>

        <div className="package-content">
          <h4 className="package-name">{pkg.name}</h4>
        </div>
      </div>
    </div>
  );
}
