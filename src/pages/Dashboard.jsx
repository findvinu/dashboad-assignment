import React, { useState } from "react";
import {
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Box,
  Avatar,
  List,
} from "@mui/material";

import RoomServiceOutlinedIcon from "@mui/icons-material/RoomServiceOutlined";
import AdjustIcon from "@mui/icons-material/Adjust";
import ArrowDropUpOutlinedIcon from "@mui/icons-material/ArrowDropUpOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import BarChart from "../components/Chart/Bar/Bar";

import PercentChart from "../components/Chart/Gauge/Gauge";
import CardComponent from "../components/Card/Card";
import Select from "../components/Form/Select/Select";
import Table from "../components/Table/Table";
import ListItemComponent from "../components/ListItem/ListItem";
import Feedback from "../components/Feedback/Feedback";

import User1 from "../assets/1.jpg";
import User2 from "../assets/2.jpg";
import User3 from "../assets/3.jpg";
import TotalOrder from "../assets/total_order.jpg";
import TotalDelivered from "../assets/total_delivered.jpg";
import TotalCancelled from "../assets/total_cancelled.jpg";
import TotalRevenue from "../assets/total_revenue.jpg";

import "./Dashboard.scss";


const cardData = [
  {
    id: 1,
    title: "Total Orders",
    count: 75,
    icon: TotalOrder,
    upIcon: <ArrowDropUpOutlinedIcon />,
    percentage: 3,
  },
  {
    id: 2,
    title: "Total Delivered",
    count: 70,
    icon: TotalDelivered,
    downIcon: <ArrowDropDownOutlinedIcon />,
    percentage: 3,
  },
  {
    id: 3,
    title: "Total Cancelled",
    count: "05",
    icon: TotalCancelled,
    upIcon: <ArrowDropUpOutlinedIcon />,
    percentage: 3,
  },
  {
    id: 4,
    title: "Total Revenue",
    count: "$12k",
    icon: TotalRevenue,
    downIcon: <ArrowDropDownOutlinedIcon />,
    percentage: 3,
  },
];

const listItemData = [
  {id:1, icon: <AdjustIcon />, title: 'Goals', className: 'goals'},
  {id:2, icon: <RoomServiceOutlinedIcon />, title: 'Popular Dishes', className: 'dishes'},
  {id:3, icon: <RoomServiceOutlinedIcon />, title: 'Menus', className: 'menus'},
]

const feedbackData = [
  {id:1, userImg: User1, name: 'Jenny Wilson', rating:4, feedback: 'The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.'},
  {id:2, userImg: User2, name: 'Dianne Russell', rating:5, feedback: ' We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service'},
  {id:3, userImg: User3, name: 'Devon Lane', rating:4, feedback: 'Normally Wings are wings. but theirs are lean meaty and tender. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.'},
]

const Dashboard = () => {
  const [dense, setDense] = useState(false);

  return (
    <Container maxWidth={false} className="contentArea">
      <Typography variant="h4" className="dashboard-heading" fontWeight="bold">
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Grid container spacing={3}>
            {cardData.map((card) => (
              <CardComponent key={card.id} {...card} />
            ))}

            <Grid item xs={12}>
              <Card className="card activityChart">
                <CardContent>
                  <div className="charHead">
                    <Typography variant="h6" fontWeight="bold">
                      Activity
                    </Typography>
                    <Select />
                  </div>
                  <BarChart />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card className="card">
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">
                    Recent Orders
                  </Typography>
                  <Table />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>

        {/* Right side */}
        <Grid item xs={12} md={4}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Card className="card net-profit">
                <CardContent className="profitChartWrapper">
                  <Box className="profitChartContent">
                    <Typography variant="subtitle2" className="netProfitText">
                      Net Profit
                    </Typography>

                    <Typography variant="h4" fontWeight="bolder">
                      $ 6759.25
                    </Typography>
                    <span className="up percent">
                      <ArrowDropUpOutlinedIcon /> 3%
                    </span>
                  </Box>
                  <Box className="profitChart">
                    <PercentChart />
                    <span>*The values here has been rounded off. </span>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card className="card">
                <CardContent>
                  <List dense={dense} className="goalList">
                    {listItemData.map(item => (
                      <ListItemComponent key={item.id} {...item} />
                    ))}                   
                  </List>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12}>
              <Card className="card feedbackWrapper">
                <CardContent>
                  <Box className="feedback-heading">
                    <Typography variant="h6" fontWeight="bold">
                      Customer's Feedback
                    </Typography>
                  </Box>
                  <Box className="feedback">
                    {feedbackData.map(feedback => (
                      <Feedback key={feedback.id} {...feedback} />
                    ))}                 
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
