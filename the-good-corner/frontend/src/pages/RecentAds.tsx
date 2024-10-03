import AdCard, { AdCardProps } from "../components/AdCard";
import { useEffect, useState } from "react";
import axios from "axios";

function RecentAds() {
  const [ads, setAds] = useState<AdCardProps[]>([]);
  async function fetchData() {
    const { data } = await axios.get<AdCardProps[]>(
      "http://localhost:4000/ads"
    );
    setAds(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className="main-content">
      <h2>Annonces récentes</h2>
      <section className="recent-ads">
        {ads.map((ad) => (
          <AdCard
            key={ad.id}
            id={ad.id}
            picture={ad.picture}
            title={ad.title}
            price={ad.price}
          />
        ))}
      </section>
    </main>
  );
}

export default RecentAds;
