import { PageTitle } from "../component-library/common/PageTitle";
import { Table } from "../component-library/table/Table";
import { MemberProfile } from "../component-library/members/MemberProfile";
import { useGetMembersQuery } from "../store/adminApi";
import { getCountryFromGeolocationJSON } from "../utils/geolocation";
import { formatDate, formatTimeAgo } from "../utils/dateTime";
import { formatNumber } from "../utils/lang";
import { TableHeader } from "../component-library/table/TableHeader";
import { TableRow } from "../component-library/table/TableRow";

export const MemberListPage = () => {
  const { data, loading, error } = useGetMembersQuery();

  return (
    <>
      <PageTitle accessories={<>filters</>}>Members</PageTitle>
      <Table columns="1fr 1fr">
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
              values={[
                <MemberProfile {...member} />,
                member.emailOpenRate || "N/A",
                getCountryFromGeolocationJSON(member.geolocation) || "Unknown",
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
