import React, { FC, useEffect } from "react";
import kleeURL from "./klee.png";

const createMetaTag = (name: string, content: string) => {
  const meta = document.createElement("meta");
  meta.setAttribute("property", name);
  meta.content = content;
  return meta;
};

export const App: FC = () => {
  useEffect(() => {
    const metaTags: HTMLMetaElement[] = [];
    metaTags.push(createMetaTag("og:title", "Klee"));
    metaTags.push(createMetaTag("og:image", kleeURL));
    metaTags.push(createMetaTag("og:description", "Fleeing Sunlight"));
    metaTags.push(createMetaTag("og:url", window.location.href));
    document.head.append(...metaTags);
  }, []);
  return (
    <div>
      <img src={kleeURL} alt="klee" />
    </div>
  );
};
