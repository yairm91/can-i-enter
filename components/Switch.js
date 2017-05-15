import React from 'react';

class Switch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonState:'on',
      image:'/static/on-switch.jpg'
    };
    this.handleSubmit = this.handleSubmit.bind(this);
}

  handleSubmit(){
    this.setState({image: this.state.buttonState === 'on' ? '/static/off-switch.jpg' : '/static/on-switch.jpg',
                    buttonState: this.state.buttonState === 'on' ? 'off' : 'on'});
    this.props.handleChange();
  }

  render() {
    return (
        <div>
          <input type="image" className="switch" src={this.state.image} onClick={this.handleSubmit}/>
          <style jsx>{`
                .switch {
                    width:25%;
                    height:15%;
                    z-index: 1;
                    top: 500px;
                    left: 500px;
                    position: absolute;
                    color: blue;
                }
              `}</style>
        </div>
    );
  }
}

Switch.propTypes = {
  handleChange: React.PropTypes.func.isRequired,
};


export default Switch;
