import React from "react";

import "./styles.css";

interface Props {
  headings: any[];
  children: React.ReactNode;
}
const Table: React.FC<Props> = ({ headings, children }) => {
  return (
    <table>
      <thead>
        <tr>
          {headings.map((heading, index) => (
            <th key={index}>{heading}</th>
          ))}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
};

export default Table;
