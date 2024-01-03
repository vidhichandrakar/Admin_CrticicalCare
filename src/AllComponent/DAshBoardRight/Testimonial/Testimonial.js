import React from "react";
import CourseHeader from "../../Courses/CoursesHeader";
import SearchIcon from "@mui/icons-material/Search";
// import StyledInputBase from '@mui/material/StyledInputBase';
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "20ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
function Testimonial() {
  return (
    <div className="main-container">
      <div className="m20">
        <CourseHeader />
        <div className="TestPortalSearchBarSection">
          <div className="searchnfilter">
            <div>
              <Search className="searchBar">
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  className="w100"
                  placeholder="Search by name"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </div>
            <button className="filterButton">
              {" "}
              <FilterAltIcon /> Filter
            </button>
          </div>
          <button className="addTestimonialButton"> + Add Testimonial </button>
        </div>

        <table className="TestimonialcompleteTable">
          <tr className="tableHeading">
            <th>Comments</th>
            <th>Author</th>
            <th>Actions</th>
          </tr>
          <hr className="TestPortalhrLine" />

          <tr>
            <td>
              <p className="testimonialsComments">
                Can't express the amount of respect to all the members in this
                platform who are working so hard for us. We are so blessed to
                have this lovely platform in our generation!{" "}
              </p>
            </td>
            <td>
              <p>Sheikh Shoeb</p>
            </td>
            <td>
              <MoreVertIcon />
            </td>
          </tr>
          <tr>
            <td>
              <p className="testimonialsComments">
                It was a great experience for me because I was a dropper and had
                only PW as a source for my coaching. I love Alakh sir since
                because of him I cleared the exam with good marks and also made
                my family proud. My experience with PW was full of learning and
                grooming.
              </p>
            </td>
            <td>
              <p>Jitendra Chandrakar</p>
            </td>
            <td>
              <MoreVertIcon />
            </td>
          </tr>
          <tr>
            <td>
              <p className="testimonialsComments">
                It aws a great experience for me because I was a dropper and had
                only PW as a source for my coaching. I love Alakh sir since
                bacause of him I clearedthe exam with good marks and also made
                my family proud. My experience with PW was full of learning and
                grooming.
              </p>
            </td>
            <td>
              <p>Jitendra Chandrakar</p>
            </td>
            <td>
              <MoreVertIcon />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Testimonial;
