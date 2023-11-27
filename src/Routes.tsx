// import { Route, Routes } from 'react-router-dom';

import App from "./App";
import { AppBar, Button, DataPicker, DetailsBlock } from "./components";
import { CardsContainer } from "./components/CardsContainer";
import { LsSs } from "./components/LsSs";
import { NotFound } from "./components/NotFound";
import { Route, Routes } from "react-router-dom";
import { Scrollbar } from "react-scrollbars-custom";

export const RoutesApp = () => {
  return (
    <Routes>
      <Route
        path="/"
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
      <Route path={"d"} element={<DataPicker />} />
      <Route path={"q"} element={<AppBar />} />
      <Route path={"e"} element={<DetailsBlock />} />
      <Route path={"w"} element={<Button />} />
      <Route path="/" element={<App />}>
        <Route element={<CardsContainer />} />
        <Route path={"q"} element={<LsSs />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
