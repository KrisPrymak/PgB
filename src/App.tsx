import { IntlProvider} from "react-intl";
import { usePlatform } from "./shared/hooks";
import { useEffect, useState } from "react";
import { DiagonalLayout } from "./components/DiagonalLayout";
import { CustomForm, SignupForm } from "./components";
import { PlatformTypes } from "./shared/hooks/types";
import QuillEditor from "./components/QuillEditor/QuillEditor";

const messagesInRu = {
  myMesage: "My message",
};

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
    <IntlProvider messages={messagesInRu} locale="ru" defaultLocale="en">
      <div className="App">
        {/* <Scrollbar
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
      toggleFeatureFlag && <CustomForm />
      <SignupForm />
      {platform === PlatformTypes.Desktop && <QuillEditor />}
      {/* <CardsContainer /> */}
      {/* <LsSs /> */}
      {/* <DiagonalLayout /> */}
      {toggleFeatureFlag && <CustomForm />}
      <SignupForm />
      {platform === PlatformTypes.Desktop && <QuillEditor />}
      </div>
    </IntlProvider>
  );
}

export default App;
