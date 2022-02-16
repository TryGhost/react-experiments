import { PageTitle } from "../component-library/common/PageTitle";
import { Table } from "../component-library/table/Table";
import { MemberProfile } from "../component-library/members/MemberProfile";
import { MemberLocation } from "../component-library/members/MemberLocation";
import { useGetMembersQuery } from "../store/adminApi";
import { formatDate, formatTimeAgo } from "../utils/dateTime";
import { formatNumber } from "../utils/lang";
import { TableHeader } from "../component-library/table/TableHeader";
import { TableRow } from "../component-library/table/TableRow";

export const MemberListPage = () => {
  const { data, loading, error } = useGetMembersQuery();

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

        {!loading &&
          data?.members.map((member) => (
            <TableRow
              id={member.id}
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
            />
          ))}
      </Table>
    </>
  );
};

export default MemberListPage;
