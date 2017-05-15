
import Light from '../components/Light.js';
import Switch from '../components/Switch.js';
import React from 'react';

class Index extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        lightImage:'/static/red-green.jpg',
        lightText:'You Can go In!'
      };
      this.handleChange = this.handleChange.bind(this);
  }

  handleChange(){
    console.log(this.state.lightImage === '/static/red-green.jpg');
    this.setState({lightIamge: this.state.lightImage === '/static/red-green.jpg' ? '/static/red-light.jpg' : '/static/red-green.jpg',
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
            background: #FFFAFA;
          }
        `}</style>
    </div>
    );
  }
}
export default Index;





