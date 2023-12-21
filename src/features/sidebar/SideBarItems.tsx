import { Avatar, Typography, Button } from "@mui/material";
interface SidBarItemsProps {
  titleName: string;
  isMobile?: boolean;
}
const SideBarItems: React.FC<SidBarItemsProps> = ({ titleName, isMobile }) => {
  const titleNameArr = titleName.split(" ");
  var avatarText;
  if (titleNameArr.length > 1) {
    avatarText =
      titleNameArr[0].charAt(0).toUpperCase() +
      titleNameArr[1].charAt(0).toUpperCase();
  } else {
    avatarText = titleName.substring(0, 2).toUpperCase();
  }
  return (
    <>
      <Button
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <Avatar
          sx={{
            width: 36,
            height: 36,
            fontSize: 14,
            fontWeight: "bold",
          }}
        >
          {avatarText}
        </Avatar>
        <Typography
          variant="body1"
          sx={{ display: { sm: "block", xs: "none" }, ml: 2 }}
        >
          {titleName}
        </Typography>
      </Button>
    </>
  );
};

export default SideBarItems;
