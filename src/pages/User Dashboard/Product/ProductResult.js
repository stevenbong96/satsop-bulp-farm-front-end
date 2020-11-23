import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 300,
        marginTop: "3%",
        margin: "auto",
        marginBottom: "3%",
        width: "50%"
    },
    media: {
        height: 140,
    },
});

function ProductResult(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root} elevation={3}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h6" component="h2">
                        {props.name}
                    </Typography>
                </CardContent>
                <CardMedia
                    className={classes.media}
                    image={props.image}
                    title="product Image"
                />
                <CardContent>
                    <Typography gutterBottom variant="p" component="h2">
                        Category: {props.category}
                    </Typography>
                    <br />
                    <Typography gutterBottom variant="p" component="h2">
                        Color: {props.color.map(element => element.length > 0 ?
                            element + " " : "No Color Found"
                        )}
                    </Typography>
                    <br />
                    <Typography gutterBottom variant="p" component="h2">
                        Planting Season: {props.planting}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="h2">
                        $ {props.price}
                    </Typography>
                </CardContent>
            </CardActionArea>
            {/* <CardActions>
                <Button size="small" color="primary">
                    Product info
                </Button>
            </CardActions> */}
        </Card>
    )
}

export default ProductResult