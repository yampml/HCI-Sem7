import React from "react";
import SingleEvent from "./SingleEvent";

class EventArea extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="events_area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="main_title">
                <h2>Upcoming Events</h2>
                <p>
                  There is a moment in the life of any aspiring astronomer that
                  it is time to buy that first telescope. It’s exciting to think
                  about setting up your own viewing station.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            {
              this.props.event_name.map((item, index) => (
                <SingleEvent 
                  name={item} 
                  image={this.props.event_img[this.props.event_name.indexOf(item)]} 
                  init_day={this.props.init_day[this.props.event_name.indexOf(item)]} 
                  key={index}
                />
              ))
            }
          </div>
        </div>
      </div>
    );
  }
}

export default EventArea;
