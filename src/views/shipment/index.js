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
import {
  Modal,
  Box,
  Button,
  Typography,
  LinearProgress,
  TextField,
  Select,
  MenuItem,
  styled,
  InputBase,
  InputLabel,
} from "@mui/material";

import * as React from "react";
import { Formik, Form, Field } from "formik";
import Icon from "@mui/material/Icon";
import { useState } from "react";
const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}));

function Shipment() {
  const { columns, rows } = authorsTableData();
  const [isOpen, setOpen] = useState(false);
  const [Name, setName] = React.useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };
  return (
    <DashboardLayout>
      <DashboardNavbar />
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
                      Shipment Details
                    </MDTypography>
                  </Grid>
                  <Grid item lg={1} onClick={() => setOpen(true)} sx={{ cursor: "pointer" }}>
                    <MDTypography variant="h6" color="white">
                      Add Shipment +
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
        onClose={() => setOpen(false)}
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
            Add New Shipment Details
          </Typography>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = "Required";
              } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = "Invalid email address";
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
                      <InputLabel id="demo-customized-select-label">Staff</InputLabel>
                      <Select
                        labelId="demo-customized-select-label"
                        id="demo-customized-select"
                        value={Name}
                        onChange={handleChange}
                        input={<BootstrapInput />}
                        fullWidth
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={1}>Hamad Murtaza</MenuItem>
                        <MenuItem value={2}>Ali Hamza</MenuItem>
                        <MenuItem value={3}>Safdar Ali</MenuItem>
                      </Select>
                    </Grid>
                    <Grid item lg={5.5}>
                      <TextField
                        label="Vehicle Number"
                        variant="outlined" // Variants: 'outlined', 'filled', 'standard'
                        fullWidth // Makes the TextField span the full width of its container
                      />
                    </Grid>
                  </Grid>
                  <Grid container lg={12} sx={{ display: "flex", gap: 9, justifyItems: "center" }}>
                    <Grid item lg={5.5}>
                      <TextField
                        label="Date"
                        variant="outlined" // Variants: 'outlined', 'filled', 'standard'
                        fullWidth // Makes the TextField span the full width of its container
                      />
                    </Grid>
                    <Grid item lg={5.5}>
                      <TextField
                        label="Quantity"
                        variant="outlined" // Variants: 'outlined', 'filled', 'standard'
                        fullWidth // Makes the TextField span the full width of its container
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

export default Shipment;
