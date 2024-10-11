import { ReactNode } from "react";

const Callout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="my-6 flex items-center rounded-md border-4">
      <div>{children}</div>
    </div>
  );
};

export default Callout;
