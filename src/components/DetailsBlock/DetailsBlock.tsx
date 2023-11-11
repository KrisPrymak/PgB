import { useEffect } from "react";
import styles from "./DetailsBlock.module.scss";

const mockData = [
  {
    id: 1,
    month: "September",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ornare, quam at tempus scelerisque, quam libero rutrum nunc, a consequat tortor leo eu nibh. Ut consectetur tincidunt est, ut dictum diam. Fusce id rhoncus turpis. Nam turpis orci, pretium eget nunc ut, bibendum maximus sem. Sed porttitor rutrum diam et lacinia.",
    isDefaultOpen: true,
  },
  {
    id: 2,
    month: "October",
    text: "Donec id commodo risus, a pretium ipsum. Curabitur turpis elit, dignissim eu arcu vel, posuere lacinia ipsum. Vivamus egestas id tellus nec pellentesque. In dapibus rhoncus massa, in fringilla libero sagittis sed. Aenean sit amet sapien vitae tortor placerat facilisis a non enim. Nulla nec facilisis risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dignissim est mi. Aliquam erat volutpat. Suspendisse et orci eu enim sodales ullamcorper.",
    isDefaultOpen: false,
  },
];

export const DetailsBlock = () => {

  useEffect(() => {

  }, [])
  return (
    <div className={styles.container}>
      {mockData.map((data) => {
        return (
          <details key={data.id} open={data.isDefaultOpen}>
            <summary>{data.month}</summary>
            {data.text}
          </details>
        );
      })}
    </div>
  );
};
