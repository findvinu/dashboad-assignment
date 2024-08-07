import {
  Typography,
  Box,
  Avatar,
  Button,
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import User1 from "../../assets/1.jpg";
import User2 from "../../assets/2.jpg";
import User3 from "../../assets/3.jpg";
import User4 from "../../assets/4.jpg";
import User5 from "../../assets/5.jpg";

import "./Table.scss";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(
    <Box className="userName">
      <Avatar src={User1} />
      <Typography className="userNameText">Wade Warren</Typography>
    </Box>,
    15478256,
    "$124.00",
    <Button className="deliveredBtn customBtn">Delivered</Button>
  ),

  createData(
    <Box className="userName">
      <Avatar src={User2} />
      <Typography className="userNameText">Jan Cooper</Typography>
    </Box>,
    48965786,
    "$365.02",
    <Button className="deliveredBtn customBtn">Delivered</Button>
  ),

  createData(
    <Box className="userName">
      <Avatar src={User3} />
      <Typography className="userNameText">Guy Hawkins</Typography>
    </Box>,
    78958215,
    "$45.88",
    <Button className="cancelledBtn customBtn">Cancelled</Button>
  ),
  createData(
    <Box className="userName">
      <Avatar src={User4} />
      <Typography className="userNameText">Kristin Watson</Typography>
    </Box>,
    20965732,
    "$65.00",
    <Button className="pendingBtn customBtn">Pending</Button>
  ),
  createData(
    <Box className="userName">
      <Avatar src={User5} />
      <Typography className="userNameText">Cody Fisher</Typography>
    </Box>,
    95705620,
    "$545.00",
    <Button className="deliveredBtn customBtn">Delivered</Button>
  ),
  createData(
    <Box className="userName">
      <Avatar src={User1} />
      <Typography className="userNameText">Savannah Nguyen
      </Typography>
    </Box>,
    78514568,
    "$128.20",
    <Button className="deliveredBtn customBtn">Delivered</Button>
  ),
];

const TableComponent = () => {
  return (
    <TableContainer component={Paper} className="tableWrapper">
      <Table sx={{ minWidth: 650 }} aria-label="simple table" className="table">
        <TableHead>
          <TableRow>
            <TableCell>Customer</TableCell>
            <TableCell>Order No.</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
