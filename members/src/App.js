import { DrawerLayout } from "./component-library/layouts/DrawerLayout";
import { HomeLink } from "./component-library/drawer/HomeLink";
import { Logo } from "./component-library/drawer/Logo";
import { AuthPage } from "./pages/AuthPage";
import { MemberListPage } from "./pages/MemberListPage";
import { useGetSiteQuery } from "./store/adminApi";
import { useSelector } from "react-redux";
import { AuthLayout } from "./component-library/layouts/AuthLayout";

const Drawer = () => {
  const { data: siteData, isLoading: siteIsLoading } = useGetSiteQuery();

  return (
    <HomeLink>
      <Logo />
      {!siteIsLoading && siteData?.site?.title}
    </HomeLink>
  );
};

export const App = () => {
  const { siteUrl, staffAccessToken } = useSelector((state) => state.config);

  if (!siteUrl || !staffAccessToken) {
    return (
      <AuthLayout>
        <AuthPage />
      </AuthLayout>
    );
  }

  return (
    <DrawerLayout drawer={<Drawer />}>
      <MemberListPage />
    </DrawerLayout>
  );
};
