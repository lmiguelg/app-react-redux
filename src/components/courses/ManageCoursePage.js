import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as loadCourses from "../../redux/actions/courseActions";
import * as loadAuthors from "../../redux/actions/authorActions";
import PropTypes from "prop-types";
import CourseForm from "./CourseForm";
import { newCourse } from '../../../tools/mockData'

function ManageCoursePage({ courses, authors, loadAuthors, loadCourses, ...props }) {
  const [course, setCourse ] = useState({ ...props.course });
  
  useEffect(() => {
    if (courses.length === 0) {
      loadCourses().catch((error) => {
        alert("Loading courses failed" + error);
      });
    }

    if (courses.length === 0) {
      loadAuthors().catch((error) => {
        alert("Loading authors failed" + error);
      });
    }
  }, []);

  return (
    <>
      <h2>Manage course</h2>
    </>
  );
}

ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  courses: PropTypes.array.isRequired,
  loadCourses: PropTypes.func.isRequired,
  loadAuthors: PropTypes.func.isRequired,
};

/**
 * 
 define state and action we want to access within our component
 */
function mapStateToProps(state) {
  return {
    course: newCourse,
    courses: state.courses,
    authors: state.authors,
  };
}

const mapDispatchToProps = {
  loadCourses,
  loadAuthors,
};
//****************************************************************************** */
/**
 *
 *connect component to redux
 */
export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
