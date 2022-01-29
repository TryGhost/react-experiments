import { HomeLink } from "./components/drawer/HomeLink";
import { Drawer } from "./components/layout/Drawer";
import { TwoPane } from "./components/layout/TwoPane";

export const App = () => (
  <TwoPane>
    <Drawer>
      <HomeLink />
    </Drawer>
    <div>yo</div>
  </TwoPane>
);
