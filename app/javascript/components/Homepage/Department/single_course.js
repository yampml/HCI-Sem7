import React from "react";

class Single_course extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div className={this.props.arr_style}>
        <div className="single_department">
          <div className="dpmt_icon">
            <img src={this.props.icon} alt />
          </div>
          <h4>{this.props.course_name}</h4>
        </div>
      </div>
    );
  }
}

export default Single_course;