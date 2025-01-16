/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import Icon from "@mui/material/Icon";

export default function data() {
  const Author = ({ image, name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
      </MDBox>
    </MDBox>
  );

  const Job = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
    </MDBox>
  );
  const Action = () => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        <Icon fontSize="small">visibility</Icon>
      </MDTypography>
      <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        <Icon fontSize="small">edit</Icon>
      </MDTypography>
      <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        <Icon fontSize="small">delete</Icon>
      </MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "معرف البيع", accessor: "salesid", width: "20%", align: "left" },
      { Header: "اسم المتجر", accessor: "shop", align: "left" },
      { Header: "طريقة الدفع", accessor: "paymentmethod", align: "center" },
      { Header: "السعر الاجمالي", accessor: "amount", align: "center" },
    ],

    rows: [
      {
        salesid: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            sales001
          </MDTypography>
        ),
        shop: (
          <MDTypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          ></MDTypography>
        ),
        paymentmethod: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            cash
          </MDTypography>
        ),
        amount: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            1000
          </MDTypography>
        ),
      },
      {
        salesid: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            sales002
          </MDTypography>
        ),
        shop: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            shop test
          </MDTypography>
        ),
        paymentmethod: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            credit
          </MDTypography>
        ),
        amount: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            200
          </MDTypography>
        ),
      },
    ],
  };
}
