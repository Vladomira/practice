import { Link, useMatch } from "react-router-dom";
import { ReactNode } from "react";

type CustomLinkProp = {
   children: ReactNode;
   to: string;
};
export const CustomLink = ({ children, to, ...props }: CustomLinkProp) => {
   const match = useMatch(to);

   return (
      <Link
         to={to}
         {...props}
         style={{ color: match ? "orange" : "white", marginLeft: "30px" }}
      >
         {children}
      </Link>
   );
};
