import { Home } from "./routes/home";
import App from "./App";
import { LsSs } from "./components/LsSs";
import { NotFound } from "./components/NotFound";
import { Route, Routes } from "react-router-dom";
import { Scrollbar } from "react-scrollbars-custom";
import { Group } from "./routes/group/group";

export const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="group" element={<Group />} />
      <Route path="localStorage" element={<LsSs />} />
      <Route
        path="qq"
        element={
          <Scrollbar
            noDefaultStyles={false}
            noScroll={false}
            style={{ height: 200, width: 200, marginTop: 30 }}
            thumbYProps={{ className: "thumbY" }}
            trackXProps={{ className: "trackX" }}
          >
            <p>Hello world!</p>
          </Scrollbar>
        }
      />
      <Route path="33" element={<App />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
