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

  // This represents the page number we're currently retrieving from the API
  const [pageNumber, setPageNumber] = useState(1);

  // We'll fill this up with members from the useGetMembersQuery hook as it provides us with results
  const [members, setMembers] = useState([]);

  // This is some state that'll hold any filters we're using on the query – e.g. a search term
  const [filters, setFilters] = useState({});

  // This is the rtk-query hook holding our member data
  const { isFetching, data } = useGetMembersQuery({
    page: pageNumber,
    filters,
  });

  // This determines if it's possible for us to load any more content – i.e. if we're on the final page
  const canFetchMore = pageNumber < (data?.meta.pagination.pages || Infinity);

  // This handles the virtualisation of the list, via react-virtual
  const parentRef = useRef();
  const virtualizer = useVirtual({
    size: data?.meta.pagination.total || 0,
    parentRef,
    estimateSize: useCallback(() => VIRTUALIZED_TABLE_ROW_HEIGHT, []),
  });

  // This effect is run whenever `data` changes – i.e. whenever more content is loaded in from the API –
  // and appends that new data to the `members` state variable
  useEffect(() => {
    if (!data) {
      return;
    }

    setMembers((members) => [...members, ...data.members]);
  }, [data]);

  // This effect triggers the loading of more data when the user scrolls past the end of currently loaded
  // members – it checks to see if the last item in view (found by getting the last item of virtualizer.virtualItems)
  // has an index that is greater than the current number of items in the `members` array. If so, we've scrolled
  // past the end of our loaded data, so it updates the `pageNumber` state variable which in turn triggers a
  // request for fresh data.
  useEffect(() => {
    const [lastItem] = [...virtualizer.virtualItems].reverse();

    if (!lastItem) {
      return;
    }

    if (lastItem.index >= members.length - 1 && canFetchMore && !isFetching) {
      setPageNumber((pageNumber) => pageNumber + 1);
    }
  }, [canFetchMore, isFetching, members, virtualizer.virtualItems]);

  // This effect is used to clear out the members array, reset the virtualizer, and set things up to retrieve fresh
  // data. It's run whenever we change the filters we're using.
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
