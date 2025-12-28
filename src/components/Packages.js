import { useEffect, useState } from "react";
import { getPackages } from "../components/api/userApi";
import PackageCard from "./PackageCard";

export default function Packages() {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    loadPackages();
  }, []);

  const loadPackages = async () => {
    try {
      const res = await getPackages();
      setPackages(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section id="packages" className="packages-section py-5">
      <div className="container">
        <div className="text-center mb-5">
          <span className="site-title-tagline">PACKAGES</span>
          <h2 className="site-title">Our Best Packages For You</h2>
          <div className="heading-divider mx-auto"></div>
        </div>

        <div className="row">
          {packages.map((pkg, index) => (
            <PackageCard key={index} pkg={pkg} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
