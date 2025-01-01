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
import authorsTableData from "./data/authorsTableData";
import { Modal, Box, Button, Typography, LinearProgress, TextField } from "@mui/material";
import * as React from "react";
import { Formik, Form, Field } from "formik";
import Icon from "@mui/material/Icon";
import { useState } from "react";
function Staff() {
  const { columns, rows } = authorsTableData();
  const [isOpen, setOpen] = useState(false);
  const [Name, setName] = React.useState("");
  const [Designation, setDesignation] = React.useState("");
  const [iqamaId, setIqamaId] = React.useState("");
  const [country, setCountry] = React.useState("");
  const handleChange = (event) => {
    setName(event.target.value);
  };
  const handleDesignationChange = (event) => {
    setDesignation(event.target.value);
  };
  const handleIqamaChange = (event) => {
    setIqamaId(event.target.value);
  };
  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };
  return (
    <DashboardLayout>
      <DashboardNavbar navtitle={"شحنة"} />
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
                  <Grid item lg={11}>
                    <MDTypography variant="h6" color="white">
                      Staff
                    </MDTypography>
                  </Grid>
                  <Grid item lg={1} onClick={() => setOpen(true)} sx={{ cursor: "pointer" }}>
                    <MDTypography variant="h6" color="white">
                      Add Staff +
                    </MDTypography>
                  </Grid>
                </Grid>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns, rows }}
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
            width: 1000,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <Typography id="modal-title" variant="h6" component="h2" sx={{ marginBottom: 3 }}>
            Add New Staff
          </Typography>
          <Formik
            initialValues={{
              Name: "",
              Designation: "",
              iqamaId: null,
              country: "",
            }}
            validate={(values) => {
              const errors = {};

              // Validate staff selection
              if (!values.Name) {
                errors.staffName = "Please select a staff member";
              }

              // Validate vehicle selection
              if (!values.Designation) {
                errors.vehicle = "Please select a vehicle";
              }

              // Validate date selection
              if (!values.iqamaId) {
                errors.selectedDate = "Date is required";
              }

              // Validate items array
              if (!values.country) {
                errors.items = "At least one item must be added";
              } else {
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
                  <Grid container lg={12} sx={{ display: "flex", gap: 9, justifyItems: "center" }}>
                    <Grid item lg={5.5}>
                      <TextField
                        value={Name}
                        placeholder="Enter Staff Name"
                        variant="outlined"
                        fullWidth
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item lg={5.5}>
                      <TextField
                        value={Designation}
                        placeholder="Enter Staff Designation"
                        variant="outlined"
                        fullWidth
                        onChange={handleDesignationChange}
                      />
                    </Grid>
                  </Grid>
                  <Grid container lg={12} sx={{ display: "flex", gap: 9, justifyItems: "center" }}>
                    <Grid item lg={5.5}>
                      <TextField
                        value={iqamaId}
                        placeholder="Enter Iqama Number"
                        variant="outlined"
                        fullWidth
                        onChange={handleIqamaChange}
                      />
                    </Grid>
                    <Grid item lg={5.5}>
                      <TextField
                        value={country}
                        placeholder="Enter Country"
                        variant="outlined"
                        fullWidth
                        onChange={handleCountryChange}
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
                    Submit{" "}
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

export default Staff;
