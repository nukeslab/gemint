import React, { Component } from "react";
import AccountNav from "./accountnav";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  Table,
  TableContainer,
  Paper,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";

export default function purchasesTable(props) {
  const userBreaks = props.userBreaks;

  return (
    <div>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Order No.</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userBreaks.map((order) => {
              return (
                <TableRow>
                  <Link to={`/browse/${order.items[0].productId}`}>
                    <TableCell>{order.items[0].productName}</TableCell>
                    <TableCell>{order.orderAmount}</TableCell>
                    <TableCell>{order.orderId}</TableCell>
                  </Link>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
