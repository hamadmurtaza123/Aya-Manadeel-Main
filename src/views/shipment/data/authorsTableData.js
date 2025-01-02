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
      { Header: "كمية", accessor: "quantity", align: "center" },
      { Header: "رقم السيارة", accessor: "vehicle", align: "center" },
      { Header: "حالة", accessor: "status", align: "center" },
      { Header: "تاريخ", accessor: "date", align: "center" },
      { Header: "فعل", accessor: "action", align: "center" },
    ],

    rows: [
      {
        author: <Author image={team2} name="حماد مرتضى" email="john@creative-tim.com" />,
        function: <Job title="مدير" description="Organization" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="متصل" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        quantity: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            100
          </MDTypography>
        ),
        vehicle: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            LEZ 1020
          </MDTypography>
        ),
        date: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            23/04/18
          </MDTypography>
        ),
        action: <Action />,
      },
      {
        author: <Author image={team2} name="علي حمزة" email="alexa@creative-tim.com" />,
        function: <Job title="مدير" description="Developer" />,
        quantity: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            200
          </MDTypography>
        ),
        vehicle: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            LEB 1380
          </MDTypography>
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="غير متصل" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        date: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            11/01/19
          </MDTypography>
        ),
        action: <Action />,
      },
      {
        author: <Author image={team4} name="إبراهيم خالد" email="laurent@creative-tim.com" />,
        function: <Job title="تنفيذي" description="Projects" />,
        quantity: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            500
          </MDTypography>
        ),
        vehicle: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            LZB 4520
          </MDTypography>
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="متصل" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        date: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            19/09/17
          </MDTypography>
        ),
        action: <Action />,
      },
      {
        author: <Author image={team2} name="أبو السعود" email="michael@creative-tim.com" />,
        function: <Job title="تَعَب" description="Developer" />,
        quantity: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            100
          </MDTypography>
        ),
        vehicle: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            LEZ 1020
          </MDTypography>
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="متصل" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        date: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            24/12/08
          </MDTypography>
        ),
        action: <Action />,
      },
    ],
  };
}
