import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { Radar } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    LineElement,
    PointElement,
    Tooltip,
    Legend,
    RadialLinearScale,
    Filler,
} from 'chart.js'

ChartJS.register(
    LineElement,
    PointElement,
    Tooltip,
    Legend,
    RadialLinearScale,
    Filler,
)

function ProfileCard({ id, name, position, personxskill, avatar}) {

    var labelss = []
    var datass = []

    for (var i in personxskill){
        labelss.push(i)
        datass.push(personxskill[i])
    }

    var data = {
        labels: labelss,
        datasets: [{
            label: 'Expertise',
            data: datass,
            backgroundColor: '#434D57',
            borderColor: '#434D57',
        }], 
    }

    var options = {}

    const ExpandMore = styled((props) => {
        const { expand, ...other } = props;
        return <IconButton {...other} />;
    })(({ theme, expand }) => ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    }));

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{ maxWidth: 280 }} id="profile_card">
            <CardMedia
                sx={{ height: 180 }}
                image={avatar}
                title="avatar"
            />
            <CardContent>
                <Typography gutterBottom component="li">
                    <b>Name:</b> {name}
                </Typography>
                <Typography gutterBottom component="li">
                    <b>Position:</b> {position}
                </Typography>
            </CardContent>
            <CardActions id='collapse'>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <BsFillArrowDownCircleFill />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit id='collapse'>
                <CardContent>
                    <Typography paragraph>
                        <Radar data={data} options={options}></Radar>
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    )
}

export default ProfileCard