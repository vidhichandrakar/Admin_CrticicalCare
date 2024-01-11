import React from "react";
import CourseHeader from "../../Courses/CoursesHeader";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchBar from "../../../Util/SearchBar";

function Testimonial() {
  return (
    <div className="main-container">
      <div className="m20">
        <CourseHeader />
        <div className="TestPortalSearchBarSection">
          <div className="searchnfilter">
            
            <SearchBar mt ="2%" />
            
            <button className="filterButton">
              <FilterAltIcon /> Filter
            </button>
          </div>
          <button className="addTestimonialButton"> + Add Testimonial </button>
        </div>

        <table className="testimonialCompleteTable">
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
