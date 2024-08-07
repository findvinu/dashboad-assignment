import { useState } from "react";
import {
    IconButton,
    Avatar,
    ListItem,
    ListItemAvatar,
    ListItemText,
  } from "@mui/material";
  import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import './ListItem.scss';

const ListItemComponent = ({className, icon, title}) => {    
  const [secondary, setSecondary] = useState(false);

    return ( 
        <ListItem
        secondaryAction={
          <IconButton edge="end" aria-label="button">
            <KeyboardArrowRightIcon />
          </IconButton>
        }
        className={className}
      >
        <ListItemAvatar>
          <Avatar className={`${className}Icon listIcon`}>
            {icon}
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={title}
          secondary={secondary ? "Secondary text" : null}
        />
      </ListItem>
     );
}
 
export default ListItemComponent;