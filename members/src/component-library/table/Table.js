import React from "react";

export const Table = ({ columns, children }) => (
  <div role="table">
    {React.Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, { columns });
      }

      return child;
    })}
  </div>
);
