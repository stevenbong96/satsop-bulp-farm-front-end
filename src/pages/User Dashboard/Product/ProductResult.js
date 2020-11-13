import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 300,
        marginTop: "5%",
        margin: "auto",
        marginBottom: "5%"
    },
    media: {
        height: 140,
    },
});

function ProductResult() {
    const classes = useStyles();

    return (
        <Card className={classes.root} elevation={3}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image="https://image.freepik.com/free-vector/coming-soon-message-illuminated-with-light-projector_1284-3622.jpg"
                    title="product Image"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Name of Product
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Product info
                </Button>
            </CardActions>
        </Card>
    )
}

export default ProductResult