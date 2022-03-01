import { formatDate, formatTimeAgo } from "../../utils/dateTime";
import { styled } from "../stitches";

const Timestamp = styled("div", {
  fontSize: "$13",
});

const TimeAgo = styled(Timestamp, {
  color: "$washedOut",
});

export const MemberTimestamp = ({ createdAt }) => (
  <>
    <Timestamp>{formatDate(createdAt)}</Timestamp>
    <TimeAgo>{formatTimeAgo(createdAt)}</TimeAgo>
  </>
);
