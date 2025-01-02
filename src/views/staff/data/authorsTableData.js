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
      { Header: "اسم الموظف", accessor: "author", width: "20%", align: "left" },
      { Header: "تعيين", accessor: "function", align: "left" },
      { Header: "العناصر المباعة", accessor: "selling", align: "center" },
      { Header: "المبلغ المتبقي", accessor: "amount", align: "center" },
      { Header: "حالة", accessor: "status", align: "center" },
      { Header: "هدف", accessor: "target", align: "center" },
      { Header: "فعل", accessor: "action", align: "center" },
    ],

    rows: [
      {
        author: <Author image={team2} name="حماد مرتضى" email="john@creative-tim.com" />,
        function: <Job title="مدير" description="Organization" />,
        selling: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            1250
          </MDTypography>
        ),
        amount: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            850 SAR
          </MDTypography>
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="متصل" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        target: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            3500
          </MDTypography>
        ),
        action: <Action />,
      },
      {
        author: <Author image={team4} name="علي حمزة" email="alexa@creative-tim.com" />,
        function: <Job title="مدير" description="Developer" />,
        selling: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            1800
          </MDTypography>
        ),
        amount: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            150 SAR
          </MDTypography>
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="غير متصل" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        target: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            3500
          </MDTypography>
        ),
        action: <Action />,
      },
      {
        author: <Author image={team4} name="ابراهيم خالد" email="laurent@creative-tim.com" />,
        function: <Job title="تنفيذي" description="Projects" />,
        selling: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            3200
          </MDTypography>
        ),
        amount: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            0 SAR
          </MDTypography>
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="متصل" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        target: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            3500
          </MDTypography>
        ),
        action: <Action />,
      },
      {
        author: <Author image={team2} name="أبو السعود" email="michael@creative-tim.com" />,
        function: <Job title="تَعَب" description="Developer" />,
        selling: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            2500
          </MDTypography>
        ),
        amount: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            500 SAR
          </MDTypography>
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="متصل" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        target: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            3500
          </MDTypography>
        ),
        action: <Action />,
      },
    ],
  };
}
