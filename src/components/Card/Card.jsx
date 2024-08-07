import { Typography, Card, CardContent, Grid } from "@mui/material";
import './Card.scss';

const CardComponent = ({
  title,
  count,
  icon,
  upIcon,
  downIcon,
  percentage,
}) => {
  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card className="card">
        <CardContent className="cardContent">
          <img src={icon} alt="total order" />
          <Typography className="cardText" variant="subtitle2">
            {title}
          </Typography>
          <div className="cardFooter">
            <Typography variant="h5" fontWeight="bold">
              {count}
            </Typography>
            <span className={`${upIcon?'up': 'down'} percent`}>
              {upIcon ? upIcon : downIcon} {percentage}%
            </span>
          </div>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default CardComponent;
