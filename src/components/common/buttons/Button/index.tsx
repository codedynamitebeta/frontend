import { memo } from "react";
import { Button as ButtonMUI, ButtonProps as ButtonPropsMUI } from "@mui/material";
import clsx from "clsx";
import classes from "./styles.module.scss";
import ParagraphBody from "components/text/ParagraphBody";

export enum BtnType {
  Primary = "Primary",
  Secondary = "Secondary",
  Outlined = "Outlined",
  Text = "Text"
}

interface ButtonProps extends ButtonPropsMUI {
  btnType?: BtnType;
  width?: string;
  height?: string;
  padding?: string;
  nowrap?: boolean;
  borderRadius?: string;
  margin?: string;
  isTypeSubmit?: boolean;
  colorName?: string;
  backgroundColor?: string;
  boxShadow?: string;
}

const Button = memo((props: ButtonProps) => {
  const {
    width,
    height,
    margin,
    padding,
    className,
    btnType,
    children,
    nowrap,
    borderRadius,
    isTypeSubmit,
    colorName,
    backgroundColor,
    sx = {},
    boxShadow,
    startIcon,
    endIcon,
    ...rest
  } = props;
  return (
    <ButtonMUI
      className={clsx(
        classes.btnRoot,
        {
          [classes.btnPrimary]: btnType === BtnType.Primary,
          [classes.btnSecondary]: btnType === BtnType.Secondary,
          [classes.btnOutlined]: btnType === BtnType.Outlined,
          [classes.btnText]: btnType === BtnType.Text
        },
        className
      )}
      type={isTypeSubmit ? "submit" : "button"}
      {...rest}
      startIcon={startIcon}
      endIcon={endIcon}
      sx={{
        ...sx,
        width: width,
        height: height,
        margin: margin,
        padding: padding,
        whiteSpace: nowrap ? "nowrap" : "unset",
        borderRadius: borderRadius,
        color: colorName,
        backgroundColor: backgroundColor,
        boxShadow: boxShadow,
        gap: startIcon || endIcon ? "10px" : "0"
      }}
    >
      <ParagraphBody>{children}</ParagraphBody>
    </ButtonMUI>
  );
});
export default Button;
