import { Card, CardContent, CardMedia, Typography } from "@mui/material";
interface AppCardProps {
  text: string;
  imgUrl: string;
}
const AppCard: React.FC<AppCardProps> = ({ text, imgUrl }) => {
  // console.log("imgUrl", imgUrl);
  // console.log("text", text);
  return (
    <Card sx={{ maxWidth: 250, maxHeight: 250 }}>
      <CardMedia component="img" width={250} height={200} image={imgUrl} />
      <CardContent sx={{ display: "flex", justifyContent: "center" }}>
        <Typography variant="h6">{text}</Typography>
      </CardContent>
    </Card>
  );
};

export default AppCard;
