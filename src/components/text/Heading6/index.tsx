import { Typography, styled } from "@mui/material";

interface Props {
  colorname?: string;
  fontWeight?: number | string;
  fontStyle?: string;
  textWrap?: string;
}

const Heading6 = styled(Typography)<Props>`
  font-family: "Montserrat";
  font-style: ${(props) => props.fontStyle || "normal"};
  font-weight: ${(props) => props.fontWeight || 600};
  font-size: 14px;
  line-height: 24px;
  text-wrap: ${(props) => props.textWrap || "wrap"};
  color: ${(props) => `var(${props.colorname || "--eerie-black-00"})`};
`;

export default Heading6;
