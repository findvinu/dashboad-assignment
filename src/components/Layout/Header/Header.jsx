import { AppBar, Toolbar, IconButton, TextField, Avatar } from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SearchIcon from "@mui/icons-material/Search";
import StarIcon from "@mui/icons-material/Star";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import useMediaQuery from "@mui/material/useMediaQuery";
import AvatarImg from "../../../assets/avatar.jpg";
import "./Header.scss";

const Header = () => {
  const matches = useMediaQuery("(min-width:600px)");

  return (
    <AppBar position="static" className="header">
      <Toolbar className="headerInner">
        <TextField
          className="searchInput"
          variant="outlined"
          size="small"
          style={{width: matches ? '25%' : 'inherit'}}
          placeholder="Search"
          InputProps={{
            startAdornment: (
              <IconButton>
                <SearchIcon />
              </IconButton>
            ),
            style: { color: "white" },
          }}
        />
        <div className="header-icon">
          <IconButton color="inherit">
            <EmailOutlinedIcon />
          </IconButton>
          <IconButton color="inherit">
            <SettingsOutlinedIcon />
          </IconButton>
          <IconButton color="inherit">
            <NotificationsNoneOutlinedIcon />
            <span className="notify"></span>
          </IconButton>
          <Avatar src={AvatarImg} alt="Profile" className="profile-pic" />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
