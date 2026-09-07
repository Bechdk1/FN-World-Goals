import { DNA } from "react-loader-spinner";
import type { LoaderProps } from "./Loader.props";

export const Loader = ({
  visible,
  height,
  width,
  ariaLabel,
  wrapperStyle,
  wrapperClass,
}: LoaderProps) => {
  return (
    <DNA
      visible={visible}
      height={height}
      width={width}
      ariaLabel={ariaLabel}
      wrapperStyle={wrapperStyle}
      wrapperClass={wrapperClass}
    />
  );
};
