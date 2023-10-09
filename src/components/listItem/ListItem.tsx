import Item from "../item";
import { ItemData } from "@/types/general";
import { Dispatch, SetStateAction, memo } from "react";
import styles from "./index.module.scss";

const ListItem = ({ data }: { data: ItemData[] }) => {
  return (
    <ul className={styles.ListItem}>
      {data.map((item) => (
        <Item data={item} key={item.id} />
      ))}
    </ul>
  );
};

export default memo(ListItem);
