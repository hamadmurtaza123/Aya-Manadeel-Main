import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

// Data
import projectsTableData from "./data/projectsTableData";
import { useState } from "react";

import { Modal, Box, Button, Typography, LinearProgress, TextField } from "@mui/material";
import * as React from "react";
import { Formik, Form, Field } from "formik";
function Inventory() {
  const { columns: pColumns, rows: pRows } = projectsTableData();
  const [isOpen, setOpen] = useState(false);
  const [Name, setName] = React.useState("");
  const [quantity, setQuantity] = React.useState();
  const [price, setPrice] = React.useState();
  const handleChange = (event) => {
    setName(event.target.value);
  };
  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };
  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };
  return (
    <DashboardLayout>
      <DashboardNavbar navtitle={"جرد"} />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <Grid container>
                  <Grid item lg={11} md={10} sm={10} xs={8}>
                    <MDTypography variant="h6" color="white">
                      معلومات المخزون
                    </MDTypography>
                  </Grid>
                  <Grid
                    item
                    lg={1}
                    md={2}
                    sm={2}
                    xs={4}
                    onClick={() => setOpen(true)}
                    sx={{ cursor: "pointer" }}
                  >
                    <MDTypography variant="h6" color="white">
                      إضافة المخزون +
                    </MDTypography>
                  </Grid>
                </Grid>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns: pColumns, rows: pRows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Modal
        open={isOpen}
        onClose={() => {
          setOpen(false);
        }}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        {/* Content inside the modal */}
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "80%",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <Typography id="modal-title" variant="h6" component="h2" sx={{ marginBottom: 3 }}>
            إضافة مخزون جديد
          </Typography>
          <Formik
            initialValues={{
              Name: "",
              quantity: null,
              price: null,
            }}
            validate={(values) => {
              const errors = {};

              // Validate staff selection
              if (!values.Name) {
                errors.staffName = "Please select a staff member";
              }

              // Validate vehicle selection
              if (!values.quantity) {
                errors.vehicle = "Please select a vehicle";
              }

              // Validate date selection
              if (!values.price) {
                errors.selectedDate = "Date is required";
              }

              // Validate items array
              else {
                errors.items = values.items
                  .map((item, index) => {
                    const itemErrors = {};
                    if (!item.itemName) {
                      itemErrors.itemName = "Item name is required";
                    }
                    if (!item.quantity || item.quantity <= 0) {
                      itemErrors.quantity = "Quantity must be greater than zero";
                    }
                    return Object.keys(itemErrors).length > 0 ? itemErrors : null;
                  })
                  .filter(Boolean); // Remove null entries
              }

              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                setSubmitting(false);
                alert(JSON.stringify(values, null, 2));
              }, 500);
            }}
          >
            {({ submitForm, isSubmitting }) => (
              <Form>
                <Grid container sx={{ gap: 3 }}>
                  <Grid
                    container
                    lg={12}
                    sx={{ display: "flex", gap: { xs: 2, lg: 11, md: 9 }, justifyItems: "center" }}
                  >
                    <Grid item lg={12} md={12} xs={12}>
                      <TextField
                        value={Name}
                        placeholder="أدخل اسم العنصر"
                        variant="outlined"
                        fullWidth
                        onChange={handleChange}
                      />
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    lg={12}
                    sx={{ display: "flex", gap: { xs: 2, lg: 11, md: 11 }, justifyItems: "center" }}
                  >
                    <Grid item lg={5} xl={5.5} md={5} sm={5} xs={12}>
                      <TextField
                        type="number"
                        placeholder="أدخل الكمية"
                        value={quantity}
                        variant="outlined"
                        fullWidth
                        onChange={(e) => {
                          const value = e.target.value;
                          if (/^\d*$/.test(value)) {
                            // Allow only numbers
                            handleQuantityChange();
                          }
                        }}
                        InputProps={{
                          inputProps: { min: 0 }, // Optional: Prevent negative numbers
                        }}
                      />
                    </Grid>
                    <Grid item lg={5} xl={5.5} md={5} sm={5} xs={12}>
                      <TextField
                        type="number"
                        placeholder="أدخل سعر الوحدة"
                        value={price}
                        variant="outlined"
                        fullWidth
                        onChange={(e) => {
                          const value = e.target.value;
                          if (/^\d*$/.test(value)) {
                            // Allow only numbers
                            handlePriceChange();
                          }
                        }}
                        InputProps={{
                          inputProps: { min: 0 }, // Optional: Prevent negative numbers
                        }}
                      />
                    </Grid>
                  </Grid>
                </Grid>

                {isSubmitting && <LinearProgress />}
                <br />
                <Button
                  variant="contained"
                  color="primary"
                  disabled={isSubmitting}
                  onClick={() => {
                    setOpen(false);
                    submitForm();
                  }}
                >
                  <MDTypography variant="h6" color="white">
                    يُقدِّم{" "}
                  </MDTypography>
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
      </Modal>
    </DashboardLayout>
  );
}

export default Inventory;
