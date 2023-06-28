import Link from "next/link";
import Image from "next/image";
import styles from "./RelatedCreators.module.scss";

interface RelatedCreatorsProps {
  data: Item[];
}

interface Item {
  id: string;
  username: string;
}

export const RelatedCreators = ({ data }: RelatedCreatorsProps) => {
  return (
    <div className={styles.RelatedCreators}>
      {data.slice(0, 5).map((item: Item) => {
        const creatorAvatar =
          "https://dz59t6y8jvnrr.cloudfront.net/profile/" + item.id + ".jpg";
        return (
          <Link
            href={`/creator/${item.username}`}
            className={styles.creator}
            key={item.id}
          >
            <Image
              src={creatorAvatar}
              alt={item.username}
              width={100}
              height={100}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default RelatedCreators;
