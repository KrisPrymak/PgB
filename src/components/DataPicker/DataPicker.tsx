import dayjs from "dayjs";

export const DataPicker = () => {
  const today = dayjs().toDate().toLocaleDateString();

  return <div>Date: {today}</div>;
};
