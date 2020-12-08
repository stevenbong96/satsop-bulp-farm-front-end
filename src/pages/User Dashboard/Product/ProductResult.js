import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import ProductModal from "./ProductModal";

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    marginTop: "3%",
    margin: "auto",
    marginBottom: "3%",
    width: "100%",
    height: 475,
  },
  media: {
    height: 140,
  },
});

function ProductResult(props) {
  const addProduct = async () => {
    let obj = await props.props;
    props.addToCart(obj);
  };

  const classes = useStyles();
console.log(props.props)
  const showModals = (event) => {
    document.querySelector(`.modal${props.props._id}`).className = `modal is-active modal${props.props._id}`
}


  return (
    

    <Grid item xs={12} sm={6} md={3}>
      <ProductModal props={props} />
      <Card className={classes.root} elevation={3}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h6" component="h2">
              {props.props.name}
            </Typography>
          </CardContent>
          <CardMedia
            className={classes.media}
            image={props.props.image}
            title="product Image"
            onClick={showModals}
            />
          <CardContent className="cardComponents">
            {/* <Typography gutterBottom variant="p" component="h2">
              Category: {props.props.category}
              </Typography>
            <br /> */}
            <Typography gutterBottom variant="p" component="h2">
              Color:{" "}
              {props.props.color.map((element) =>
                element.length > 0 ? element + " " : "No Color Found"
                )}
            </Typography>
            <br />
            {/* <Typography gutterBottom variant="p" component="h2">
              Planting Season: {props.props.planting}
              </Typography>
            <br /> */}
            <Typography gutterBottom variant="p" component="h2">
              Description: {props.props.description}
            </Typography>
            <br />
            <Typography gutterBottom variant="h6" component="h2">
              $ {props.props.price.toFixed(2)}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className="cardComponents">
          {props.props.inStock === true ? (
            <Button size="small" color="primary" onClick={addProduct}>
              Add to Shopping Cart
            </Button>
          ) : null}
        </CardActions>
      </Card>
    </Grid>



  );
}

export default ProductResult;
