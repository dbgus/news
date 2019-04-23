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
        width: '100%',
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
const NotLoadImage = 'data:image/png;base64,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'

function NewsCardItem({ classes, data }) {
    return (
        <Card className={classes.card}>
            <CardActionArea className={classes.cardArea}>
                <CardMedia
                    className={classes.media}
                    image={data.urlToImage ? data.urlToImage : NotLoadImage}
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