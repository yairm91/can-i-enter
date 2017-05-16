import React from 'react';

class Light extends React.Component {
  constructor(props) {
    super(props);
}

  render() {
    return (
        <div className="light">
          <div className={this.props.image}></div>
          <p className="light-text">{this.props.text}</p>
          <style jsx>{`
                .red{
                  background: red;
                  background-image: radial-gradient(brown, transparent);
                  background-size: 5px 5px;
                  width: 200px;
                  height: 200px;
                  border-radius: 50%;
                  position: absolute;
                  top: 250px;
                  left: 550px;
                  animation: 13s red infinite;
                  border: dotted 2px red;
                  box-shadow:
                    0 0 20px #111 inset,
                    0 0 10px red;
                }
                .green{
                  background: green;
                  background-image: radial-gradient(lime, transparent);
                  background-size: 5px 5px;
                  width: 200px;
                  height: 200px;
                  border-radius: 50%;
                  border: dotted 2px lime;
                  position: absolute;
                  top: 250px;
                  left: 550px;
                  box-shadow:
                    0 0 20px #111 inset,
                    0 0 10px lime;
                  animation: 13s green infinite;
                }
                .light-text {
                    font-family: "helvetica",sans-serif;
                    font-size: 40px;
                    z-index: 1;
                    position: absolute;
                    color: #bababa;
                    text-align: center;
                    top: 150px;
                    left: 510px;
                }
              `}</style>
        </div>
    );
  }
}

Light.propTypes = {
  image: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired,
};


export default Light;
