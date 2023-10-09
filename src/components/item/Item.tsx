import { Dispatch, SetStateAction, memo } from "react";
import { ItemData } from "@/types/general";
// import { HTTP_DELETE } from "@/pages/utils/fn";
import styles from "./index.module.scss";

const Item = ({ data }: { data: ItemData }) => {
  const { id, content } = data;

  // const onHandleClick = async () => {
  //   HTTP_DELETE("/api/deleteItemList", id);
  // };

  return (
    // <li onClick={onHandleClick} className={styles.Item}>
    <li className={styles.Item}>{content}</li>
  );
};

export default memo(Item);
