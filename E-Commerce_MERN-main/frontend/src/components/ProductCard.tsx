import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useCart } from "../context/Cart/CartContext";
import { Box, Stack } from "@mui/material";

interface Props {
  _id: string;
  title: string;
  image: string;
  price: string;
}

export default function ProductCard({ _id, title, image, price }: Props) {
  const { addItemToCart } = useCart();

  return (
    <Card sx={{ p: 1, mt: 3 }}>
      <CardMedia sx={{ height: 250 }} image={image} />
      <CardContent>
        <Box sx={{ p: 1, mt: 3 }}>
          <Stack
            direction="row"
            sx={{ justifyContent: "space-between", alignItems: "center" }}
          >
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              {price} DZD
            </Typography>
          </Stack>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Pinstriped cornflower blue cotton blouse takes you on a walk to the
            park or just down the hall.
          </Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          size="small"
          onClick={() => addItemToCart(_id)}
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
}
