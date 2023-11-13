// import { AppBar } from './components/AppBar/AppBar';
// import { DetailsBlock } from './components/DetailsBlock/DetailsBlock';
// import { Button } from './components/Button/Button';
// import { CustomForm } from './components/CustomForm/CustomForm';
// import { SignupForm } from './components/Formik';

import {
  AppBar,
  Button,
  CustomForm,
  DetailsBlock,
  SignupForm,
  DataPicker,
} from "./components";
import "./App.scss";
import QuillEditor from "./components/QuillEditor/QuillEditor";
import { usePlatform } from "./shared/hooks";
import { PlatformTypes } from "./shared/hooks/types";
import { useEffect, useState } from "react";
import { Scrollbar } from "react-scrollbars-custom";
import { CardsContainer } from "./components/CardsContainer";

function App() {
  const platform = usePlatform();
  const [toggleFeatureFlag, setToggleFeatureFlag] = useState(false);

  //window.dispatchEvent(new CustomEvent('toggleFeatureFlag'))
  useEffect(() => {
    const handleToggleFeatureFlag = () =>
      setToggleFeatureFlag(!toggleFeatureFlag);
    window.addEventListener("toggleFeatureFlag", handleToggleFeatureFlag);

    return () => {
      window.removeEventListener("toggleFeatureFlag", handleToggleFeatureFlag);
    };
  }, [toggleFeatureFlag]);

  return (
    <div className="App">
      <Scrollbar
        noDefaultStyles={false}
        noScroll={false}
        style={{ height: 200, width: 200, marginTop: 30 }}
        thumbYProps={{ className: "thumbY" }}
        trackXProps={{ className: "trackX" }}
      >
        <p>Hello world!</p>
      </Scrollbar>
      <DataPicker />
      <AppBar />
      <DetailsBlock />
      <Button />
      {toggleFeatureFlag && <CustomForm />}
      <SignupForm />
      {platform === PlatformTypes.Desktop && <QuillEditor />}
      {/* <CardsContainer /> */}
    </div>
  );
}

export default App;
