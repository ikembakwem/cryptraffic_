export const FeatureCard = ({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) => {
  return (
    <div className="flex flex-col items-center largePhone:flex-row mb-10">
      <div className="flex items-center justify-center shadow-subtle mb-4 largePhone:mb-0 largePhone:-mt-2 largePhone:mr-8 shrink-0 w-featureIcon h-featureIcon rounded-full">
        {icon}
      </div>
      <div className="text-center largePhone:text-start">
        <h2 className="text-xl mb-4 font-medium">{title}</h2>
        <p className="leading-normal text-gray-60">{text}</p>
      </div>
    </div>
  );
};
