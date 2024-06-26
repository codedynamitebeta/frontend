import { Box } from "@mui/material";
import images from "config/images";
import classes from "./styles.module.scss";
import Heading3 from "components/text/Heading3";
import Heading4 from "components/text/Heading4";

const NotFoundPage = () => {
  return (
    <Box className={classes.boxWrap}>
      <Box className={classes.notFoundImgBox}>
        <img src={images.error.notFoundError} alt='Not found img' />
      </Box>
      <Heading3>Không tìm thấy trang</Heading3>
      <Heading4>Trang bạn đang tìm không tồn tại hoặc đã bị xóa</Heading4>
    </Box>
  );
};

export default NotFoundPage;
