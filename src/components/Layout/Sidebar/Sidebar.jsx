import { IconButton, Box } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import InsertChartOutlinedIcon from "@mui/icons-material/InsertChartOutlined";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import SidebarBtn from "../../../assets/sidebar_btn.jpg";
import Logo from "../../../assets/react.svg";


import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img className="logo" src={Logo} alt="logo" />
      <Box>
        <IconButton color="inherit">
          <HomeOutlinedIcon />
        </IconButton>
        <IconButton color="inherit">
          <InsertChartOutlinedIcon />
        </IconButton>
        <IconButton color="inherit">
          <AssignmentTurnedInOutlinedIcon />
        </IconButton>
        <IconButton color="inherit">
          <AccountBalanceWalletOutlinedIcon />
        </IconButton>
        <IconButton color="inherit">
          <ShoppingBagOutlinedIcon />
        </IconButton>
      </Box>
      <IconButton>
        <img src={SidebarBtn} alt="sidebar" />
      </IconButton>
    </div>
  );
};

export default Sidebar;
