import { useState, useEffect, useRef, useCallback } from "react";
import { useSelector } from "react-redux";
import { useVirtual } from "react-virtual";
import { PageTitle } from "../component-library/common/PageTitle";
import { MemberProfile } from "../component-library/members/MemberProfile";
import { MemberLocation } from "../component-library/members/MemberLocation";
import { MemberOpenRate } from "../component-library/members/MemberOpenRate";
import { MemberTimestamp } from "../component-library/members/MemberTimestamp";
import { useGetMembersQuery } from "../store/adminApi";
import { formatNumber } from "../utils/lang";
import { getCountryFromGeolocationJSON } from "../utils/geolocation";
import { formatDate, formatTimeAgo } from "../utils/dateTime";
import { VirtualizedTable } from "../component-library/virtualizedTable/VirtualizedTable";
import { VirtualizedTableHeader } from "../component-library/virtualizedTable/VirtualizedTableHeader";
import {
  VirtualizedTableRow,
  VIRTUALIZED_TABLE_ROW_HEIGHT,
} from "../component-library/virtualizedTable/VirtualizedTableRow";
import { VirtualizedTableRowPlaceholder } from "../component-library/virtualizedTable/VirtualizedTableRowPlaceholder";
import { TabularPageLayout } from "../component-library/layouts/TabularPageLayout";
import { Input } from "../component-library/form/Input";

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
    estimateSize: useCallback(() => VIRTUALIZED_TABLE_ROW_HEIGHT, []),
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

    virtualizer.scrollToIndex(0);
  }, [filters]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <TabularPageLayout
      pageTitle={
        <PageTitle
          accessories={
            <Input
              type="search"
              onChange={(e) =>
                setFilters({
                  ...filters,
                  search: e.target.value,
                })
              }
              placeholder="Search"
              noBottom
            />
          }
        >
          Members
        </PageTitle>
      }
    >
      <VirtualizedTable
        ref={parentRef}
        header={
          <VirtualizedTableHeader
            columns="50% 1fr 1fr 1fr"
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
              <VirtualizedTableRowPlaceholder
                columns="50% 1fr 1fr 1fr"
                key={row.index}
                style={{
                  height: `${row.size}px`,
                  transform: `translateY(${row.start}px)`,
                }}
              >
                Loading...
              </VirtualizedTableRowPlaceholder>
            );
          }

          return (
            <VirtualizedTableRow
              columns="50% 1fr 1fr 1fr"
              link={`${siteUrl}/ghost/#/members/${member.id}`}
              values={[
                <MemberProfile
                  name={member.name}
                  email={member.email}
                  imageUrl={member.avatarImage}
                />,
                <MemberOpenRate openRate={member.emailOpenRate} />,
                <MemberLocation
                  country={getCountryFromGeolocationJSON(member.geolocation)}
                />,
                <MemberTimestamp
                  timestamp={formatDate(member.createdAt)}
                  timeAgo={formatTimeAgo(member.createdAt)}
                />,
              ]}
              key={row.index}
              style={{
                height: `${row.size}px`,
                transform: `translateY(${row.start}px)`,
              }}
            />
          );
        })}
      </VirtualizedTable>
    </TabularPageLayout>
  );
};

export default MemberListPage;
