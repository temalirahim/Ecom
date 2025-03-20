import { CheckCircleOutline } from "@mui/icons-material";
import { Button, Container, Typography, Snackbar, Alert, type SnackbarCloseReason } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";

const OrderSuccessPage = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Vérifie si l'état showSnackbar est présent
    if (location.state?.showSnackbar) {
      setOpen(true);
    }
  }, [location.state]);

  const handleHome = () => {
    navigate("/");
  };

  const handleClose = (
    _event?: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <Container
      fixed
      sx={{
        mt: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
      }}
    >
      <CheckCircleOutline sx={{ color: "green", fontSize: "80px" }} />
      <Typography variant="h4">Thanks for your order.</Typography>
      <Typography>
        We started processing it, and we will get back to you soon.
      </Typography>
      <Button variant="contained" onClick={handleHome}>
        Go to Home
      </Button>

      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Your order has been successfully placed!
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default OrderSuccessPage;
