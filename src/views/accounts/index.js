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
import Webcam from "react-webcam";
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

function Accounts() {
  const { columns, rows } = authorsTableData();
  const [isOpen, setOpen] = useState(false);
  const [shopName, setShopName] = React.useState("");
  const [paymentMethod, setPaymentMethod] = React.useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [Item, setItem] = useState([]);
  const [isAddSales, setAddSales] = useState(false);
  const [contact, setContact] = useState("");
  const [preview, setPreview] = useState(null);
  const [Sales, setSales] = useState([
    {
      shopname: "",
      paymentMethod: "Cash",
      amount: "1000",
    },
    {
      shopname: "Shop Test",
      paymentMethod: "Credit",
      amount: "200",
    },
  ]);
  const handleFileChange = (event) => {
    const file = event.target.files[0]; // Get the selected file
    if (file) {
      const reader = new FileReader(); // Create a FileReader to read the file
      reader.onloadend = () => {
        setPreview(reader.result); // Set the preview to the file's data URL
      };
      reader.readAsDataURL(file); // Read the file as a data URL
    }
  };
  const handleShopName = (event) => {
    setShopName(event.target.value);
  };
  const price = [
    { itemName: "Large Aya Mandeel", price: 25 },
    { itemName: "Small Aya Mandeel", price: 15 },
  ];
  const handlePayment = (event) => {
    setPaymentMethod(event.target.value);
  };
  const handleContact = (event) => {
    setContact(event.target.value);
  };

  const handleInputChange = (index, field, value) => {
    setItem((prev) => {
      const updatedItems = [...prev];
      updatedItems[index] = { ...updatedItems[index], [field]: value };
      return updatedItems;
    });
  };

  const formatDate = (date) => {
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, "0");
    const month = String(d.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
    const year = d.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <DashboardLayout>
      <DashboardNavbar navtitle={"الحسابات"} />
      <Grid container xs={12} gap={2}>
        <Grid item>
          <Button onClick={() => setAddSales(true)} variant="contained">
            <MDTypography variant="h6" color="white">
              Add Sales +
            </MDTypography>
          </Button>
        </Grid>
        <Grid item>
          <Button onClick={() => setOpen(true)} variant="contained">
            <MDTypography variant="h6" color="white">
              Close Sales
            </MDTypography>
          </Button>
        </Grid>
      </Grid>
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
                      مبيعات اليوم ({formatDate(selectedDate)})
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
        open={isAddSales}
        onClose={() => {
          setAddSales(false);
          setShopName("");
          setItem([]);
          setPaymentMethod("");
          setPreview(null);
          setContact("");
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
            إضافة مبيعات جديدة{" "}
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
                  <Grid
                    container
                    lg={12}
                    sx={{ display: "flex", gap: { xs: 2, lg: 9, md: 9 }, justifyItems: "center" }}
                  >
                    <Grid
                      item
                      lg={5}
                      xl={5.5}
                      md={5}
                      sm={5}
                      xs={12}
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
                          إضافة تفاصيل العنصر +
                        </MDTypography>
                      </Button>
                    </Grid>
                  </Grid>
                  {Item.length > 0 && (
                    <Grid container sx={{ width: "100%", overflowX: "auto" }}>
                      <TableContainer>
                        <Table>
                          <TableRow>
                            <TableCell align="left">اسم العنصر</TableCell>
                            <TableCell align="left">كمية</TableCell>
                            <TableCell align="left">سعر الوحدة</TableCell>
                            <TableCell align="left">السعر الاجمالي</TableCell>
                          </TableRow>
                          {Item?.map((a, index) => (
                            <TableRow key={index}>
                              <TableCell
                                align="left"
                                sx={{
                                  width: { lg: "25%", md: "30%", xs: "100%" }, // Take full width on small screens
                                  minWidth: 150, // Ensures text is readable
                                }}
                              >
                                <FormControl
                                  fullWidth
                                  sx={{
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
                              <TableCell
                                align="left"
                                sx={{
                                  width: { lg: "20%", md: "25%", xs: "100%" },
                                  minWidth: 100,
                                }}
                              >
                                <TextField
                                  type="number"
                                  value={a.quantity || ""}
                                  placeholder="إضافة كمية"
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
                              <TableCell
                                align="left"
                                sx={{
                                  width: { lg: "25%", md: "25%", xs: "100%" },
                                  minWidth: 120,
                                }}
                              >
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
                              <TableCell
                                align="left"
                                sx={{
                                  width: { lg: "30%", md: "20%", xs: "100%" },
                                  minWidth: 140,
                                }}
                              >
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
                  <Grid
                    container
                    lg={12}
                    sx={{ display: "flex", gap: { xs: 2, lg: 9, md: 9 }, justifyItems: "center" }}
                  >
                    <Grid item lg={5} xl={5.5} md={5} sm={5} xs={12}>
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
                          value={paymentMethod}
                          onChange={handlePayment}
                          displayEmpty
                          fullWidth
                        >
                          <MenuItem value="">حدد طريقة الدفع</MenuItem>
                          <MenuItem value={1}>الدفع نقدا</MenuItem>
                          <MenuItem value={2}>ائتمان</MenuItem>
                          <MenuItem value={3}>الدفع عن طريق البنك/البطاقة</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item lg={5} xl={5.5} md={5} sm={5} xs={12}>
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
                  </Grid>
                  {paymentMethod == 2 && (
                    <>
                      <Grid
                        container
                        lg={12}
                        sx={{
                          display: "flex",
                          gap: { xs: 2, lg: 9, md: 9 },
                          justifyItems: "center",
                        }}
                      >
                        <Grid item lg={5} xl={5.5} md={5} sm={5} xs={12}>
                          <TextField
                            value={shopName}
                            placeholder="أدخل اسم المتجر"
                            variant="outlined"
                            fullWidth
                            onChange={handleShopName}
                          />
                        </Grid>
                        <Grid item lg={5} xl={5.5} md={5} sm={5} xs={12}>
                          <TextField
                            value={contact}
                            placeholder="أدخل رقم الهاتف المحمول للعميل"
                            variant="outlined"
                            fullWidth
                            onChange={handleContact}
                          />
                        </Grid>
                      </Grid>
                      <Grid
                        container
                        lg={12}
                        sx={{
                          display: "flex",
                          gap: { xs: 2, lg: 9, md: 9 },
                          justifyItems: "center",
                        }}
                      >
                        <Grid item lg={5} xl={5.5} md={5} sm={5} xs={12}>
                          <input
                            accept="image/*"
                            id="capture-image"
                            type="file"
                            style={{ display: "none" }}
                            onChange={handleFileChange}
                          />
                          <label htmlFor="capture-image">
                            <Button variant="contained" color="primary" component="span">
                              <MDTypography variant="h6" color="white">
                                أضف صورة للمتجر +{" "}
                              </MDTypography>{" "}
                            </Button>
                          </label>
                        </Grid>
                        {preview && (
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              width: "200px",
                              height: "200px",
                              borderRadius: "8px",
                              overflow: "hidden",
                              background: "#f0f0f0", // Optional: Add a background color
                            }}
                          >
                            <img
                              src={preview}
                              alt="Preview"
                              style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                              }}
                            />
                          </div>
                        )}
                      </Grid>
                    </>
                  )}
                  {paymentMethod == 3 && (
                    <Grid
                      container
                      lg={12}
                      sx={{ display: "flex", gap: { xs: 2, lg: 9, md: 9 }, justifyItems: "center" }}
                    >
                      <Grid item lg={5.5}>
                        <input
                          accept="image/*"
                          id="capture-image"
                          type="file"
                          style={{ display: "none" }}
                          onChange={handleFileChange}
                        />
                        <label htmlFor="capture-image">
                          <Button variant="contained" color="primary" component="span">
                            <MDTypography variant="h6" color="white">
                              صورة الإيصال +
                            </MDTypography>{" "}
                          </Button>
                        </label>
                      </Grid>
                      {preview && (
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "200px",
                            height: "200px",
                            borderRadius: "8px",
                            overflow: "hidden",
                            background: "#f0f0f0", // Optional: Add a background color
                          }}
                        >
                          <img
                            src={preview}
                            alt="Preview"
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                            }}
                          />
                        </div>
                      )}
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
                    setAddSales(false);
                    setShopName("");
                    setItem([]);
                    setPaymentMethod("");
                    setPreview(null);
                    setContact("");
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
            اغلاق مبيعات اليوم{" "}
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
                  {Sales.length > 0 && (
                    <Grid container lg={12}>
                      <TableContainer>
                        <Table>
                          <TableRow>
                            <TableCell align="left" sx={{ width: "27%" }}>
                              معرف البيع
                            </TableCell>
                            <TableCell align="left" sx={{ width: "28%" }}>
                              اسم المتجر
                            </TableCell>
                            <TableCell align="left" sx={{ width: "23%" }}>
                              طريقة الدفع{" "}
                            </TableCell>
                            <TableCell align="left" sx={{ width: "22%" }}>
                              السعر الاجمالي
                            </TableCell>
                          </TableRow>
                          {Sales?.map((a, index) => (
                            <TableRow key={index}>
                              <TableCell align="left" sx={{ width: "27%" }}>
                                <TextField
                                  value={`sale00${index + 1}`}
                                  variant="outlined"
                                  fullWidth
                                  onChange={handleContact}
                                />
                              </TableCell>
                              <TableCell align="left" sx={{ width: "28%" }}>
                                <TextField
                                  value={a.shopname}
                                  variant="outlined"
                                  fullWidth
                                  onChange={handleContact}
                                />
                              </TableCell>
                              <TableCell align="left" sx={{ width: "23%" }}>
                                <TextField
                                  value={a.paymentMethod}
                                  variant="outlined"
                                  fullWidth
                                  onChange={handleContact}
                                />
                              </TableCell>
                              <TableCell align="left" sx={{ width: "22%" }}>
                                <TextField
                                  value={a.amount}
                                  variant="outlined"
                                  fullWidth
                                  onChange={handleContact}
                                />
                              </TableCell>
                            </TableRow>
                          ))}
                        </Table>
                      </TableContainer>
                    </Grid>
                  )}

                  <Grid
                    container
                    lg={12}
                    sx={{ display: "flex", gap: { xs: 2, lg: 9, md: 9 }, justifyItems: "center" }}
                  >
                    <Grid item lg={5.5}>
                      <input
                        accept="image/*"
                        id="capture-image"
                        type="file"
                        style={{ display: "none" }}
                        onChange={handleFileChange}
                      />
                      <label htmlFor="capture-image">
                        <Button variant="contained" color="primary" component="span">
                          <MDTypography variant="h6" color="white">
                            أدخل صورة العناصر المتبقية +
                          </MDTypography>
                        </Button>
                      </label>
                    </Grid>
                    {preview && (
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          width: "200px",
                          height: "200px",
                          borderRadius: "8px",
                          overflow: "hidden",
                          background: "#f0f0f0", // Optional: Add a background color
                        }}
                      >
                        <img
                          src={preview}
                          alt="Preview"
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                    )}
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

export default Accounts;
