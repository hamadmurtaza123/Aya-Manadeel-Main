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
  FormControl,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import * as React from "react";
import { Formik, Form, Field } from "formik";
import Icon from "@mui/material/Icon";
import { useState } from "react";

function Shipment() {
  const { columns, rows } = authorsTableData();
  const [isOpen, setOpen] = useState(false);
  const [Name, setName] = React.useState("");
  const [vehicle, setVehicle] = React.useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [Item, setItem] = useState([]);

  const handleChange = (event) => {
    setName(event.target.value);
  };
  const price = [
    { itemName: "آية منديل صغيرة", price: 15 },
    { itemName: "آية منديل كبيرة", price: 25 },
  ];
  const handleVehicleChange = (event) => {
    setVehicle(event.target.value);
  };
  const handleInputChange = (index, field, value) => {
    setItem((prev) => {
      const updatedItems = [...prev];
      updatedItems[index] = { ...updatedItems[index], [field]: value };
      return updatedItems;
    });
  };
  console.log(Item);
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
                      تفاصيل الشحنة
                    </MDTypography>
                  </Grid>
                  <Grid item lg={1} onClick={() => setOpen(true)} sx={{ cursor: "pointer" }}>
                    <MDTypography variant="h6" color="white">
                      إضافة شحنة +
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
          setItem([]);
          setVehicle("");
          setName("");
          setSelectedDate(null);
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
            إضافة تفاصيل الشحنة الجديدة
          </Typography>
          <Formik
            initialValues={{
              staffName: "",
              vehicle: "",
              selectedDate: null,
              items: [], // Assuming the `Item` array is stored as `items`
            }}
            validate={(values) => {
              const errors = {};

              // Validate staff selection
              if (!values.staffName) {
                errors.staffName = "Please select a staff member";
              }

              // Validate vehicle selection
              if (!values.vehicle) {
                errors.vehicle = "Please select a vehicle";
              }

              // Validate date selection
              if (!values.selectedDate) {
                errors.selectedDate = "Date is required";
              }

              // Validate items array
              if (!values.items || values.items.length === 0) {
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
                      <FormControl
                        fullWidth
                        sx={{
                          minWidth: 200, // Adjust width
                          ".MuiOutlinedInput-root": {
                            height: 50, // Adjust height
                          },
                        }}
                      >
                        <Select
                          labelId="demo-customized-select-label"
                          id="demo-customized-select"
                          value={Name}
                          onChange={handleChange}
                          displayEmpty
                          fullWidth
                        >
                          <MenuItem value="">اختر الموظفين</MenuItem>
                          <MenuItem value={1}>حماد مرتضى</MenuItem>
                          <MenuItem value={2}>علي حمزة</MenuItem>
                          <MenuItem value={3}>صفدر علي</MenuItem>
                          <MenuItem value={3}>ابو السعود</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item lg={5.5}>
                      <FormControl
                        fullWidth
                        sx={{
                          minWidth: 200, // Adjust width
                          ".MuiOutlinedInput-root": {
                            height: 50, // Adjust height
                          },
                        }}
                      >
                        <Select
                          labelId="demo-customized-select-label"
                          id="demo-customized-select"
                          value={vehicle}
                          onChange={handleVehicleChange}
                          displayEmpty
                          fullWidth
                        >
                          <MenuItem value="">اختر السيارة</MenuItem>
                          <MenuItem value={1}>LEX 7820</MenuItem>
                          <MenuItem value={2}>XEZ 8020</MenuItem>
                          <MenuItem value={3}>ENJ 5050</MenuItem>
                          <MenuItem value={3}>ENJ 5050</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                  </Grid>
                  <Grid container lg={12} sx={{ display: "flex", gap: 9, justifyItems: "center" }}>
                    <Grid item lg={5.5}>
                      <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                          value={selectedDate}
                          onChange={(newValue) => setSelectedDate(newValue)}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              fullWidth
                              sx={{
                                ".MuiOutlinedInput-root": {
                                  height: 50, // Adjust height
                                },
                                ".MuiInputLabel-root": {
                                  // color: "blue", // Adjust label color
                                },
                              }}
                            />
                          )}
                        />
                      </LocalizationProvider>
                    </Grid>
                    <Grid
                      item
                      lg={5.5}
                      justifyContent="flex-end" // Aligns the button to the end of the Grid
                      alignItems="flex-end"
                    >
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => {
                          setItem((prev) => [
                            ...prev,
                            {
                              id: `id-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
                              itemName: "",
                              quantity: "",
                            },
                          ]);
                        }}
                      >
                        <MDTypography variant="h6" color="white">
                          إضافة عنصر +
                        </MDTypography>
                      </Button>
                    </Grid>
                  </Grid>
                  {Item.length > 0 && (
                    <Grid container lg={12}>
                      <TableContainer>
                        <Table>
                          <TableRow>
                            <TableCell align="left" sx={{ width: "27%" }}>
                              اسم العنصر
                            </TableCell>
                            <TableCell align="left" sx={{ width: "28%" }}>
                              كمية
                            </TableCell>
                            <TableCell align="left" sx={{ width: "23%" }}>
                              سعر الوحدة
                            </TableCell>
                            <TableCell align="left" sx={{ width: "22%" }}>
                              السعر الاجمالي
                            </TableCell>
                          </TableRow>
                          {Item?.map((a, index) => (
                            <TableRow key={index}>
                              <TableCell align="left" sx={{ width: "27%" }}>
                                <FormControl
                                  fullWidth
                                  sx={{
                                    minWidth: 200,
                                    ".MuiOutlinedInput-root": {
                                      height: 45,
                                    },
                                  }}
                                >
                                  <Select
                                    labelId="demo-customized-select-label"
                                    id={`select-${index}`}
                                    value={a.itemName || ""}
                                    onChange={(e) =>
                                      handleInputChange(index, "itemName", e.target.value)
                                    }
                                    displayEmpty
                                    fullWidth
                                  >
                                    <MenuItem value="">حدد العنصر</MenuItem>
                                    <MenuItem value="Large Aya Mandeel">آية منديل كبيرة</MenuItem>
                                    <MenuItem value="Small Aya Mandeel">آية منديل صغيرة</MenuItem>
                                  </Select>
                                </FormControl>
                              </TableCell>
                              <TableCell align="left" sx={{ width: "28%" }}>
                                <TextField
                                  type="number"
                                  value={a.quantity || ""}
                                  variant="outlined"
                                  fullWidth
                                  onChange={(e) => {
                                    const value = e.target.value;
                                    if (/^\d*$/.test(value)) {
                                      // Allow only numbers
                                      handleInputChange(
                                        index,
                                        "quantity",
                                        value ? parseInt(value, 10) : ""
                                      );
                                    }
                                  }}
                                  InputProps={{
                                    inputProps: { min: 0 }, // Optional: Prevent negative numbers
                                  }}
                                />
                              </TableCell>
                              <TableCell align="left" sx={{ width: "23%" }}>
                                <TextField
                                  value={
                                    price.find((e) => e.itemName === a.itemName)?.price || "" // Find the matching price or return an empty string
                                  }
                                  variant="outlined"
                                  fullWidth
                                  InputProps={{
                                    readOnly: true, // Make the field read-only
                                  }}
                                />
                              </TableCell>
                              <TableCell align="left" sx={{ width: "22%" }}>
                                <TextField
                                  value={
                                    a.quantity && price.find((e) => e.itemName === a.itemName)
                                      ? a.quantity *
                                        price.find((e) => e.itemName === a.itemName).price
                                      : ""
                                  }
                                  variant="outlined"
                                  fullWidth
                                  InputProps={{
                                    readOnly: true, // Makes the field read-only
                                  }}
                                />
                              </TableCell>
                            </TableRow>
                          ))}
                        </Table>
                      </TableContainer>
                    </Grid>
                  )}
                </Grid>

                {isSubmitting && <LinearProgress />}
                <br />
                <Button
                  variant="contained"
                  color="primary"
                  disabled={isSubmitting}
                  onClick={() => {
                    setOpen(false);
                    setItem([]);
                    setVehicle("");
                    setName("");
                    setSelectedDate(null);
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

export default Shipment;
