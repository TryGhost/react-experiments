import { useSelector } from "react-redux";
import { styled } from "../stitches";

const Wrapper = styled("a", {
  display: "grid",
  height: 80,
  alignItems: "center",
  borderTop: "1px $seperator solid",
  textDecoration: "none",
  color: "$text",
});

export const TableRow = ({ id, columns, values = [] }) => {
  const siteUrl = useSelector((state) => state.config.siteUrl);

  return (
    <Wrapper
      href={`${siteUrl}/ghost/#/members/${id}`}
      style={{ gridTemplateColumns: columns }}
    >
      {values.map((value) => (
        <div>{value}</div>
      ))}
    </Wrapper>
  );
};
