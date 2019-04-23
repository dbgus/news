import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
        maxWidth: 345,
        marginLeft: 60,
        marginRight: 60,
        marginTop: 40,
    },
    media: {
        width:'100%',
        height: 180,
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    cardArea: {
        height: '100%',
    }
};


function NewsCardItem({ classes, data }) {
    return (
        <Card className={classes.card}>
            <CardActionArea className={classes.cardArea}>
                <CardMedia
                    className={classes.media}
                    image={data.urlToImage}
                />
                <CardContent className={classes.content} >
                    <Typography gutterBottom variant="h5" component="h2">
                        {data.title}
                    </Typography>
                    <Typography component="p">
                        {data.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}
export default withStyles(styles)(NewsCardItem);