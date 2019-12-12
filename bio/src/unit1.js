import React, { Component } from 'react';

class unit1 extends Component {
  constructor() {
    super();
    this.state = {
      show: ["none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none"]
    }
    this.toggleSection = this.toggleSection.bind(this);
  }

  toggleSection (sectionId) {
    let show = this.state.show;
    if (show[sectionId - 1] === "none") {
      show[sectionId - 1] = "inline-block";
    }
    else {
      show[sectionId - 1] = "none";
    }
    this.setState( {show: show} );
  }

  render() {

    return (
      <div className="App">
        <h1 id="heading-1" onClick={() => this.toggleSection("1")}>Characteristics of Life</h1>
        <div id="section-1" style={{display: this.state.show[0]}}>
          The 8 characteristics of life are as follows:
          <ul>
            <li>Has a genetic code</li>
            <li>Is able to grow and develop</li>
            <li>Is able to evolve</li>
            <li>Is able to reproduce as a species</li>
            <li>Is made of cells</li>
            <li>Maintains homeostasis</li>
            <li>Has a metabolism</li>
            <li>Is able to adapt/respond to the environment</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default unit1;
