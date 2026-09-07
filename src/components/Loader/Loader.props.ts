import type { CSSProperties } from "styled-components";

export type LoaderProps = {
  visible: boolean;
  height: string;
  width: string;
  ariaLabel: string;
  wrapperStyle?: CSSProperties;
  wrapperClass: string;
};
