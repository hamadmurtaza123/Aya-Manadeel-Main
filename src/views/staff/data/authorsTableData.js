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
      { Header: "Staff Name", accessor: "author", width: "20%", align: "left" },
      { Header: "Designation", accessor: "function", align: "left" },
      { Header: "Sold PCS", accessor: "selling", align: "center" },
      { Header: "remaining amount", accessor: "amount", align: "center" },
      { Header: "status", accessor: "status", align: "center" },
      { Header: "Target", accessor: "target", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: [
      {
        author: <Author image={team2} name="Hamad Murtaza" email="john@creative-tim.com" />,
        function: <Job title="Manager" description="Organization" />,
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
            <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
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
        author: <Author image={team4} name="Ali Hamza" email="alexa@creative-tim.com" />,
        function: <Job title="Programator" description="Developer" />,
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
            <MDBadge badgeContent="offline" color="dark" variant="gradient" size="sm" />
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
        author: <Author image={team4} name="Ibrahim khalid" email="laurent@creative-tim.com" />,
        function: <Job title="Executive" description="Projects" />,
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
            <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
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
        author: <Author image={team2} name="Abu Saud" email="michael@creative-tim.com" />,
        function: <Job title="Programator" description="Developer" />,
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
            <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
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
