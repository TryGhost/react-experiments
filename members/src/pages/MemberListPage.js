import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { PageTitle } from "../component-library/common/PageTitle";
import { Table } from "../component-library/table/Table";
import { MemberProfile } from "../component-library/members/MemberProfile";
import { MemberLocation } from "../component-library/members/MemberLocation";
import { useGetMembersQuery } from "../store/adminApi";
import { formatDate, formatTimeAgo } from "../utils/dateTime";
import { formatNumber } from "../utils/lang";
import { TableHeader } from "../component-library/table/TableHeader";
import { TableRow } from "../component-library/table/TableRow";
import { Intersection } from "../component-library/utility/Intersection";

export const MemberListPage = () => {
  const siteUrl = useSelector((state) => state.config.siteUrl);

  const [pageNumber, setPageNumber] = useState(1);
  const [members, setMembers] = useState([]);
  const { isFetching, data } = useGetMembersQuery(pageNumber);

  const endReached = pageNumber >= (data?.meta.pagination.pages || 0);

  useEffect(() => {
    if (!data) {
      return;
    }

    setMembers((members) => [...members, ...data.members]);
  }, [data]);

  return (
    <>
      <PageTitle accessories={<>filters</>}>Members</PageTitle>
      <Table columns="45% 1fr 1fr 1fr">
        <TableHeader
          values={[
            `${formatNumber(data?.meta.pagination.total || 0)} Members`,
            "Open rate",
            "Location",
            "Created",
          ]}
        />

        {members.map((member) => (
          <TableRow
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
            key={member.id}
          />
        ))}

        <Intersection
          onIntersect={({ isIntersecting }) => {
            if (isIntersecting && !isFetching && !endReached) {
              setPageNumber(pageNumber + 1);
            }
          }}
        />
      </Table>
    </>
  );
};

export default MemberListPage;
