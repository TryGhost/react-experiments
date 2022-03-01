import { useState, useEffect, useRef, useCallback } from "react";
import { useSelector } from "react-redux";
import { useVirtual } from "react-virtual";
import { PageTitle } from "../component-library/common/PageTitle";
import { Table } from "../component-library/table/Table";
import { MemberProfile } from "../component-library/members/MemberProfile";
import { MemberLocation } from "../component-library/members/MemberLocation";
import { useGetMembersQuery } from "../store/adminApi";
import { formatDate, formatTimeAgo } from "../utils/dateTime";
import { formatNumber } from "../utils/lang";
import { TableHeader } from "../component-library/table/TableHeader";
import {
  TableRow,
  TABLE_ROW_HEIGHT,
} from "../component-library/table/TableRow";
import { TableRowPlaceholder } from "../component-library/table/TableRowPlaceholder";
import { TabularPageLayout } from "../component-library/layouts/TabularPageLayout";

export const MemberListPage = () => {
  const siteUrl = useSelector((state) => state.config.siteUrl);

  const [pageNumber, setPageNumber] = useState(1);
  const [members, setMembers] = useState([]);
  const [filters, setFilters] = useState({});
  const { isFetching, data } = useGetMembersQuery({
    page: pageNumber,
    filters,
  });

  const canFetchMore = pageNumber < (data?.meta.pagination.pages || Infinity);

  const parentRef = useRef();
  const virtualizer = useVirtual({
    size: data?.meta.pagination.total || 0,
    parentRef,
    estimateSize: useCallback(() => TABLE_ROW_HEIGHT, []),
  });

  useEffect(() => {
    if (!data) {
      return;
    }

    setMembers((members) => [...members, ...data.members]);
  }, [data]);

  useEffect(() => {
    const [lastItem] = [...virtualizer.virtualItems].reverse();

    if (!lastItem) {
      return;
    }

    if (lastItem.index >= members.length - 1 && canFetchMore && !isFetching) {
      setPageNumber((pageNumber) => pageNumber + 1);
    }
  }, [canFetchMore, isFetching, members, virtualizer.virtualItems]);

  useEffect(() => {
    if (Object.keys(filters).length === 0) {
      return;
    }

    setMembers([]);
    setPageNumber(0);
  }, [filters]);

  return (
    <TabularPageLayout
      pageTitle={
        <PageTitle
          accessories={
            <input
              type="search"
              onChange={(e) =>
                setFilters({
                  ...filters,
                  search: e.target.value,
                })
              }
              placeholder="Search"
            />
          }
        >
          Members
        </PageTitle>
      }
    >
      <Table
        ref={parentRef}
        header={
          <TableHeader
            columns="45% 1fr 1fr 1fr"
            values={[
              `${formatNumber(data?.meta.pagination.total || 0)} Members`,
              "Open rate",
              "Location",
              "Created",
            ]}
          />
        }
        virtualizerTotalSize={virtualizer.totalSize}
      >
        {virtualizer.virtualItems.map((row) => {
          const member = members[row.index];

          if (!member) {
            return (
              <TableRowPlaceholder
                columns="45% 1fr 1fr 1fr"
                style={{
                  height: `${row.size}px`,
                  transform: `translateY(${row.start}px)`,
                }}
                key={row.index}
              >
                Loading...
              </TableRowPlaceholder>
            );
          }

          return (
            <TableRow
              columns="45% 1fr 1fr 1fr"
              link={`${siteUrl}/ghost/#/members/${member.id}`}
              values={[
                <MemberProfile
                  name={member.name}
                  email={member.email}
                  imageUrl={member.avatarImage}
                />,
                member.emailOpenRate || "N/A",
                <MemberLocation geolocationJSON={member.geolocation} />,
                <>
                  {formatDate(member.createdAt)}
                  <br />
                  {formatTimeAgo(member.createdAt)}
                </>,
              ]}
              key={row.index}
              style={{
                height: `${row.size}px`,
                transform: `translateY(${row.start}px)`,
              }}
            />
          );
        })}
      </Table>
    </TabularPageLayout>
  );
};

export default MemberListPage;
