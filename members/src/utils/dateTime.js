import { format, formatDistanceToNowStrict } from "date-fns";

export const formatDate = (date) => format(new Date(date), "d MMM yyyy");

export const formatTimeAgo = (date) =>
  `${formatDistanceToNowStrict(new Date(date))} ago`;
