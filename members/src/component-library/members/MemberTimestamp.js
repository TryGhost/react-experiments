import { styled } from "../stitches";

const Timestamp = styled("div", {
  fontSize: "$13",
});

const TimeAgo = styled(Timestamp, {
  color: "$washedOut",
});

export const MemberTimestamp = ({ timestamp, timeAgo }) => (
  <>
    <Timestamp>{timestamp}</Timestamp>
    <TimeAgo>{timeAgo}</TimeAgo>
  </>
);
