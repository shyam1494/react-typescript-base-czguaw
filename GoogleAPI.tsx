
import React from 'react';
var map;
class GoogleAPI extends React.Component {
  constructor(props) {
    super(props);
    this.renderMap = this.renderMap.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      input: " "
    };
  }

  componentDidMount() {
    // ADD API KEY HERE
    if (
      !document.querySelectorAll(
        `[src="${"https://maps.googleapis.com/maps/api/js?key="}"]`
      ).length
    ) {
      document.body.appendChild(
        Object.assign(document.createElement("script"), {
          type: "text/javascript",
          // ADD API KEY HERE
          src:
            "https://maps.googleapis.com/maps/api/js?key=",
          onload: () => this.renderMap()
        })
      );
    }
  }

  renderMap() {
    const coords = { lat: 41.375885, lng: 2.177813 };
    const el = document.getElementById("map");

    if (el) {
      map = new google.maps.Map(el, {
        zoom: 16,
        center: {
          lat: coords.lat,
          lng: coords.lng
        }
      });

      return map;
    } else {
      return null;
    }
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleClick(event) {
    const geocoder = new google.maps.Geocoder();
    this.codeAddress(geocoder);
    event.preventDefault();
  }

  // THIS CRASHES if you comment it out //

  codeAddress(geocoder) {
    var address = this.state.input;
    geocoder.geocode({ address: address }, function(results, status) {
      console.log(results);
      if (status === "OK") {
        map.setCenter(results[0].geometry.location);
        const marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location
        });
        return marker;
      } else {
        return null;
      }
    });
  }

  render() {
    return (
      <section className="partial-book-slider">
        <input
          id="input"
          name="input"
          value={this.state.input}
          onChange={this.handleInputChange}
        />
        <button id="submit" onClick={this.handleClick}>
          {" "}
          Search
        </button>

        <div className="card map-holder">
          <div id="map" />
        </div>
      </section>
    );
  }
}
/*
 * Render the above component into the div#app
 */
 export default GoogleAPI;
