import IconButton from "@mui/material/IconButton";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Divider, Stack, Box } from "@mui/material";
import classes from "./styles.module.scss";
import { useState } from "react";
import ParagraphBody from "components/text/ParagraphBody";
import TextTitle from "components/text/TextTitle";
import NotificationItem from "./component/NotificationItem";
const HeaderNotification = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <IconButton
        className={classes.notification}
        onClick={handleClick}
        aria-controls={open ? "notification-menu" : undefined}
        aria-haspopup='true'
        aria-expanded={open ? "true" : undefined}
      >
        <NotificationsIcon sx={{ color: "white" }} />
      </IconButton>
      <Menu
        MenuListProps={{
          "aria-labelledby": "long-button"
        }}
        id='notification-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        slotProps={{
          paper: {
            style: {
              maxHeight: "80dvh",
              width: "400px"
            }
          }
        }}
      >
        <Stack>
          <Box className={classes["notification-title"]}>
            <TextTitle>Thông báo</TextTitle>
          </Box>

          <Divider className={classes["noti-divider"]} />
          <NotificationItem
            className={classes["notification-item"]}
            type='Deadline khóa học'
            content='Bạn còn 1 ngày để hoàn thành bài tập 1'
            time='12/03/2024 11:00:00'
          />
          <NotificationItem
            className={classes["notification-item"]}
            type='Deadline khóa học'
            content='Bạn còn 1 ngày để hoàn thành bài tập 1'
            time='12/03/2024 11:00:00'
          />
          <NotificationItem
            className={classes["notification-item"]}
            type='Deadline khóa học'
            content='Bạn còn 1 ngày để hoàn thành bài tập 1'
            time='12/03/2024 11:00:00'
          />
          <NotificationItem
            className={classes["notification-item"]}
            type='Deadline khóa học'
            content='Bạn còn 1 ngày để hoàn thành bài tập 1'
            time='12/03/2024 11:00:00'
          />
          <NotificationItem
            className={classes["notification-item"]}
            type='Deadline khóa học'
            content='Bạn còn 1 ngày để hoàn thành bài tập 1'
            time='12/03/2024 11:00:00'
          />
          <NotificationItem
            className={classes["notification-item"]}
            type='Deadline khóa học'
            content='Bạn còn 1 ngày để hoàn thành bài tập 1'
            time='12/03/2024 11:00:00'
          />
          <NotificationItem
            className={classes["notification-item"]}
            type='Deadline khóa học'
            content='Bạn còn 1 ngày để hoàn thành bài tập 1'
            time='12/03/2024 11:00:00'
          />
          <NotificationItem
            className={classes["notification-item"]}
            type='Deadline khóa học'
            content='Bạn còn 1 ngày để hoàn thành bài tập 1'
            time='12/03/2024 11:00:00'
          />
          <NotificationItem
            className={classes["notification-item"]}
            type='Deadline khóa học'
            content='Bạn còn 1 ngày để hoàn thành bài tập 1'
            time='12/03/2024 11:00:00'
          />
        </Stack>
      </Menu>
    </>
  );
};

export default HeaderNotification;
