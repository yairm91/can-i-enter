
import Light from '../components/Light.js';
import Switch from '../components/Switch.js';
import React from 'react';

class Index extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        lightImage:'green',
        lightText:'You Can go In!'
      };
      this.handleChange = this.handleChange.bind(this);
  }

  handleChange(){
    this.setState({lightImage: this.state.lightImage === 'green' ? 'red' : 'green',
                    lightText: this.state.lightText === 'You Can go In!' ? "Wait! Don't go in yet" : 'You Can go In!'});
  }
  render() {
    return (
    <div className="container">
      <Light image={this.state.lightImage} text={this.state.lightText}/>
      <Switch handleChange={this.handleChange}/>
      <style jsx>{`
          .container {
            display: flex;
            align-items: center;
            justify-content: center
          }
        `}</style>
    <style global jsx>{`
          body {
          width:100%;
          color:#bababa;
          background:url(http://subtlepatterns.com/patterns/bo_play_pattern.png) repeat;
          font-family: "helvetica",sans-serif;
          box-shadow:inset 0 0 200px black;
          }
        `}</style>
    </div>
    );
  }
}
export default Index;





