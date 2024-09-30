import AdCard from "./AdCard";
import ads from "../data/ads.json";

function RecentAds() {
  return (
    <>
      <main className="main-content">
        <h2>Annonces récentes</h2>
        <section className="recent-ads">
          {ads.map((ad) => (
            <AdCard
              key={ad.url}
              image={ad.image}
              name={ad.name}
              url={ad.url}
              price={ad.price}
            />
          ))}
        </section>
      </main>
    </>
  );
}

export default RecentAds;
