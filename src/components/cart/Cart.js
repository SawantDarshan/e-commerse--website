import React from "react";
import CartItem from "./cartItem/CartItem";
import { Container, Typography, Button, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import useStyles from "./styles";
import { CardTravel } from "@material-ui/icons";


const Cart = ({
  cart,
  handleEmptyCart,
  handleRemoveFromCart,
  handleUpdateCartQty,
}) => {
  const classes = useStyles();

  const EmptyCart = () => (
    <Typography variant="subtitle1">
      You have no items in your shopping cart,
      <Link to="/" className={classes.link}>
        Start Adding Some
      </Link>
    </Typography>
  );

  const FilledCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((item) => {
          return (
            <Grid key={item.id} item xs={12} sm={4}>
              <CartItem
                item={item}
                onUpdateCartQty={handleUpdateCartQty}
                onRemoveFromCart={handleRemoveFromCart}
              />
            </Grid>
          );
        })}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h7">
          Subtotal:{cart.subtotal.formatted_with_symbol}
        </Typography>
        <div>
          <Button
            className={classes.emptyButton}
            size="small"
            type="button"
            variant="contained"
            color="secondary"
            onClick={() => handleEmptyCart()}
          >
            Empty cart
          </Button>
          <Button
            component={Link}
            to="/checkout"
            className={classes.checkoutButton}
            size="small"
            type="button"
            variant="contained"
            color="primary"
          >
            Checkout
          </Button>
        </div>
      </div>
    </>
  );

  if (!cart.line_items) return "...Loading";

  return (
    <Container>
      <div className={classes.toolbar} />
      
      <h1 className="display-4 my-3 heading1">
        <CardTravel style={{ fontSize: "1em" }} /> Your Shopping Cart
      </h1>
      <div className={classes.toolbar} />

      {cart.line_items.length ? <FilledCart /> : <EmptyCart />}
    </Container>
  );
};

export default Cart;
