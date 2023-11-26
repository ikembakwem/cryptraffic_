type PageLink = {
  label: string;
  url: string;
};

type PageLinkBlock = {
  title: string;
  links: PageLink[];
};

export type LinksData = PageLinkBlock | PageLinkBlock[];

type PageLinksProps = {
  data: LinksData;
};

export const PageLinks = ({ data }: PageLinksProps) => {
  if (Array.isArray(data)) {
    return (
      <div className="flex flex-col gap-y-6 pb-6 leading-6">
        {data.map((data) => (
          <div key={data.title} className="flex flex-col px-2">
            <h2 className="font-semibold pb-2">{data.title}</h2>
            <ul className="flex flex-col pb-6">
              {data.links.map((link) => (
                <li
                  key={link.label}
                  className="flex text-slateBlue font-normal"
                >
                  <a href={link.url}>
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-y-6 pb-6 leading-6">
      <div className="flex flex-col px-1">
        <h2 className="font-semibold pb-2">{data.title}</h2>
        <ul className="flex flex-col">
          {data.links.map((link) => (
            <li key={link.label} className="flex text-slateBlue">
              <a href={link.url}>
                <span>{link.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
