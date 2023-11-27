import { FC, useEffect, useRef, useState } from "react";
import { LsSsProps } from "./types";


export const LsSs: FC<LsSsProps> = () => {
  const ref = useRef('hello')
  const [value, setValue] = useState("");
  const [submValueLocal, setSubmValueLocal] = useState("");
  const [submValueSession, setSubmValueSession] = useState("");
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSubmValueLocal(value);
    sessionStorage.setItem("value", value);
    localStorage.setItem("value", value);
    setValue("");
  };

  useEffect(() => {
    const localState = localStorage.getItem("value") || "";
    const sessionState = sessionStorage.getItem("value") || "";
    setSubmValueSession(sessionState);
    setSubmValueLocal(localState);
  });

  const deleteSessionStorage = () => {
    sessionStorage.removeItem("value");

    location.reload();
  };
  const deleteLocalStorage = () => {
    delete localStorage.value;

    location.reload();
  };
  const deleteAllStorages = () => {
    localStorage.clear();
    sessionStorage.clear();

    location.reload();
  };

  const workWithStorage = () => {
    localStorage.value1 = 2;
    console.log("value1: ", localStorage.value1);
    console.log("length: ", localStorage.length);

    localStorage.user = JSON.stringify({ name: "John" });
    let user = JSON.parse(localStorage.user);

    console.log("iteration");
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      key
        ? console.log(`${key}: ${localStorage.getItem(key)}`)
        : console.log("nothing");
    }

    console.log("iteration2");
    let keys = Object.keys(localStorage);
    for (let key of keys) {
      console.log(`${key}: ${localStorage.getItem(key)}`);
    }
  };
  return (
    <div>
      <p>{ref.current}</p>
      <p>localStorage: {submValueLocal}</p>
      <p>sessionStorage: {submValueSession}</p>
      <form onSubmit={handleSubmit}>
        <input onChange={(e) => setValue(e.target.value)} value={value} />
        <button type="submit">submit</button>
      </form>
      <button onClick={deleteSessionStorage} type="reset">
        Delete session storage
      </button>
      <button onClick={deleteLocalStorage} type="reset">
        Delete local storage
      </button>
      <button onClick={deleteAllStorages} type="reset">
        Delete all storages
      </button>
      <button type="button" onClick={workWithStorage}>
        Work with storage
      </button>
    </div>
  );
};
