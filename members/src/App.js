import React from "react";
import { DrawerLayout } from "./component-library/layouts/DrawerLayout";
import { HomeLink } from "./component-library/drawer/HomeLink";
import { Logo } from "./component-library/drawer/Logo";
import { useGetSiteQuery } from "./store/adminApi";
import { useSelector } from "react-redux";
import { AuthLayout } from "./component-library/layouts/AuthLayout";
import { Suspense } from "react";

const AuthPage = React.lazy(() => import("./pages/AuthPage"));
const MemberListPage = React.lazy(() => import("./pages/MemberListPage"));

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
        <Suspense fallback="Loading...">
          <AuthPage />
        </Suspense>
      </AuthLayout>
    );
  }

  return (
    <DrawerLayout drawer={<Drawer />}>
      <Suspense fallback="Loading...">
        <MemberListPage />
      </Suspense>
    </DrawerLayout>
  );
};
