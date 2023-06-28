"use client";
import Vimeo from "@u-wave/react-vimeo";
import styles from "./VimeoPlayer.module.scss";

interface VimeoPlayerProps {
  video: string;
  responsive?: boolean;
}

export const VimeoPlayer = ({ video, responsive }: VimeoPlayerProps) => {
  return (
    <div className={styles.player}>
      <Vimeo video={video} responsive />
    </div>
  );
};
