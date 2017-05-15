import React from 'react';

class Light extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      image:'/static/red-green.jpg',
      text:'You can go in!'
    };
}
  render() {
    return (
        <div className="light">
          <img className="image" src={this.state.image}/>
          <p className="light-text">{this.state.text}</p>
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


export default Light;
