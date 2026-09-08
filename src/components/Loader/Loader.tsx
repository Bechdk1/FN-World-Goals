import { DNA } from "react-loader-spinner";
import type { LoaderProps } from "./Loader.props";
import { LoaderStyled } from "./Loader.styled";

export const Loader = ({
  visible,
  height,
  width,
  ariaLabel,
  wrapperStyle,
  wrapperClass,
}: LoaderProps) => {
  return (
    <LoaderStyled>
      <DNA
        visible={visible}
        height={height}
        width={width}
        ariaLabel={ariaLabel}
        wrapperStyle={wrapperStyle}
        wrapperClass={wrapperClass}
      />
    </LoaderStyled>
  );
};
