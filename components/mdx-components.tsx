"use client";

import { useMDXComponent } from "next-contentlayer/hooks";
interface MdxProps {
  code: string;
}
import Image from "next/image";
import Callout from "./callout";

const components = {
  Image,
  Callout,
};

const Mdx: React.FC<MdxProps> = ({ code }) => {
  const Component = useMDXComponent(code);
  return (
    <div className="prose lg:prose-xl max-w-full">
      <Component components={components} />
    </div>
  );
};

export default Mdx;
