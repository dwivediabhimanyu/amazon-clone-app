import React, { useEffect, useState } from "react";
import "./Orders.css";
import { db } from "../firebase";
import { useStateValue } from "../StateProvider";
import OrderProduct from "./OrderProduct";

function Orders() {
  const [{ user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    } else {
      setOrders([]);
    }
  }, [user]);
  return (
    <div className="orders">
      <h1>Your Orders</h1>
      <div className="orders_order">
        {orders ? (
          orders?.map((order) => <OrderProduct order={order} />)
        ) : (
          <p>You Dont have any orders yet</p>
        )}
      </div>
    </div>
  );
}

export default Orders;
