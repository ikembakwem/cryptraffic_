export const StatsCard = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <div className="flex flex-col text-center text-white p-4 max-w-lg">
      <div className="text-5xl font-bold">{title}</div>
      <div className="text-lg leading-tighter mt-4">{desc}</div>
    </div>
  );
};
