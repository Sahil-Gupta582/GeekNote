import React from "react";
import "./BlogFooter.css";

function BlogFooter() {
  return (
    <React.Fragment>
      <div className="outer_div">
        <div className="left_div">
          <div className="left_div_text_out">
            <h1 className="text_left_div_in"> Publish Your </h1>
            <h1 className="text_left_div_in"> Own Blog </h1>
            <h1 className="text_left_div_in"> with us. </h1>
          </div>
        </div>

        <div className="right_div">
          <div className="right_div_in">
            <p className="rd_text">Start Now</p>
            <div className="button_of_div_2">
              <button className="btn btn-link">
                <p>Link</p>
              </button>
              <button className="btn btn-link">
                <p>Blogs</p>
              </button>
              <button className="btn btn-link">
                <p>Edit</p>
              </button>
              <button className="btn btn-link">
                <p>Dashboard</p>
              </button>
            </div>

            <p className="rd_bottom">Register Now</p>
            <p className="rd_bottom_text">
              Already Registered ?
              <button
                className="btn btn-link"
                style={{ marginTop: "-1%", paddingLeft: "2%" }}
              >
                <p>Login here</p>
              </button>
            </p>
            <p className="rd_bottom_most_text">
              Have any query ?
              <button
                className="btn btn-link"
                style={{ marginTop: "-1%", paddingLeft: "2%" }}
              >
                <p>Contact Us</p>
              </button>
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default BlogFooter;
