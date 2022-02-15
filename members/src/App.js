import { DrawerLayout } from "./component-library/layouts/DrawerLayout";
import { HomeLink } from "./component-library/drawer/HomeLink";
import { Logo } from "./component-library/drawer/Logo";
import { MemberListPage } from "./pages/MemberListPage";

export const App = () => (
  <DrawerLayout
    drawer={
      <>
        <HomeLink>
          <Logo />
          Josh Demo
        </HomeLink>
      </>
    }
  >
    <MemberListPage />
  </DrawerLayout>
);
