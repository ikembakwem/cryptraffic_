import { StatsCard } from "./StatsCard";

export const StatsSection = () => {
  return (
    <section className="bg-primary py-12">
      <div className="max-w-container mx-auto p-6">
        <div className="flex flex-col items-center gap-y-6 md:flex-row md:justify-between">
          <StatsCard
            title="25+"
            desc="Over 25 million Crypto transactions completed on Cryptraffic"
          />
          <StatsCard
            title="50+"
            desc="Over 50 million users transacton Cryptraffic"
          />
          <StatsCard
            title="100+"
            desc="More than 100 cryptocurrencies and assets to choose from"
          />
        </div>
      </div>
    </section>
  );
};
