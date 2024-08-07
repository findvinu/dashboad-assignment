
import {
    Typography,
    Box,
    Avatar,
  } from "@mui/material";

  import StarRating from "../StarRating/StarRating";

import './Feedback.scss';

const Feedback = ({userImg, name, rating, feedback}) => {
    return ( <div className="customer-feedback">
        <Box className="feedbackUser">
          <Avatar src={userImg} className="userImg" />
          <Typography>{name}</Typography>
        </Box>
        <Box>
          <Box className="feedbackStar">
            <StarRating initialRating={rating} />
          </Box>
          <Typography variant="subtitle2" className="bodyText">
            {feedback}
          </Typography>
        </Box>
      </div> );
}
 
export default Feedback;