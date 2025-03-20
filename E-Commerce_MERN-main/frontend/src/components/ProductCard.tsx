import { useCart } from "../context/Cart/CartContext";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Chip from "@mui/joy/Chip";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import IconButton from '@mui/joy/IconButton';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
interface Props {
  _id: string;
  title: string;
  image: string;
  price: string;
}

export default function ProductCard({ _id, title, image, price }: Props) {
  const { addItemToCart } = useCart();

  return (
    // <Card sx={{ p: 1, mt: 3 }}>
    //   <CardMedia sx={{ height: 250 }} image={image} />
    //   <CardContent>
    //     <Box sx={{ p: 1, mt: 3 }}>
    //       <Stack
    //         direction="row"
    //         sx={{ justifyContent: "space-between", alignItems: "center" }}
    //       >
    //         <Typography gutterBottom variant="h5" component="div">
    //           {title}
    //         </Typography>
    //         <Typography gutterBottom variant="h6" component="div">
    //           {price} DZD
    //         </Typography>
    //       </Stack>
    //       <Typography variant="body2" sx={{ color: "text.secondary" }}>
    //         Pinstriped cornflower blue cotton blouse takes you on a walk to the
    //         park or just down the hall.
    //       </Typography>
    //     </Box>
    //   </CardContent>
    //   <CardActions>
    //     <Button
    //       variant="contained"
    //       size="small"
    //       onClick={() => addItemToCart(_id)}
    //     >
    //       Add to Cart
    //     </Button>

    //   </CardActions>
    // </Card>
    <Card sx={{ width: 320, maxWidth: "100%", boxShadow: "lg" }}>
      <CardOverflow>
      <AspectRatio ratio="1" sx={{ width: "100%" }}>
  <img src={image} alt={title} loading="lazy" style={{ objectFit: "contain" , backgroundColor: "white" }} />
</AspectRatio>

      </CardOverflow>
      <CardContent>
        <Typography level="body-xs">Category</Typography>
        <Link
          href="#product-card"
          color="neutral"
          textColor="text.primary"
          overlay
          endDecorator={<ArrowOutwardIcon />}
          sx={{ fontWeight: "md" }}
        >
          {title}
        </Link>

        <Typography
          level="title-lg"
          sx={{ mt: 1, fontWeight: "xl" }}
          endDecorator={
            <Chip component="span" size="sm" variant="soft" color="success">
              Lowest price
            </Chip>
          }
        >
          {price} DZD
        </Typography>
        <Typography level="body-sm">
          (Only <b>7</b> left in stock!)
        </Typography>
      </CardContent>
      <CardOverflow>
        <Button
          variant="solid"
          color="primary"
          size="lg"
          onClick={() => addItemToCart(_id)}
        >
          Add to cart
        </Button>

      </CardOverflow>
    </Card>
  );
}
