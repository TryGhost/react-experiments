import { styled } from "../stitches";

const Wrapper = styled("div", {
  backgroundColor: "$errorBackground",
  color: "$errorText",
  borderRadius: "$error",
  border: "1px $errorBorder solid",
  padding: "$error",
  marginBottom: 15,

  ul: {
    listStyleType: "initial",
    marginLeft: "1rem",
  },
});

export const ErrorSummary = ({ errors }) => {
  const entries = Object.entries(errors);

  if (entries.length === 0) {
    return null;
  }

  return (
    <Wrapper>
      <ul>
        {entries.map(([key, error]) => (
          <li key={key}>{error.message}</li>
        ))}
      </ul>
    </Wrapper>
  );
};
