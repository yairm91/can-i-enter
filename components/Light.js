import React from 'react';

class Light extends React.Component {
  constructor(props) {
    super(props);
}

  render() {
    return (
        <div className="light">
          <img className="image" src={this.props.image}/>
          <p className="light-text">{this.props.text}</p>
          <style jsx>{`
                .image {
                    width:50%;
                    height:50%;
                    display: block;
                    margin-left: auto;
                    margin-right: auto;
                }
                .light-text {
                    font-size: 40px;
                    z-index: 1;
                    top: -120px;
                    position: relative;
                    color: blue;
                    text-align: center;
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
