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

    this.props.handleChange();
  }

  render() {
    return (
        <div>
        <div id="warp">
          <br/>
          <label for="check"><input id="check" type="checkbox" onClick={this.handleSubmit}></input><span class="strip"></span>
          </label><br/></div>
          <style jsx>{`
                #warp{
                  width:400px;
                  position: relative;
                  margin:0 auto;
                  display: block;
                  padding: 0 0%;
                  background-color:gray;
                }
                input{
                  -webkit-appearance: none;
                  -moz-appearance: none;
                  appearance:none /*remove default appearance */}
                label {
                  width: 180px;
                  height: 60px;
                  margin:0 auto;
                  cursor: pointer;
                  display: block;
                  position: relative;
                  cursor: pointer;
                  border-radius: 10px;
                  background-clip: padding-box;
                  background-color: #111;
                  box-shadow: 1px 1px 0 rgba(255,255,255,.25);
                }
                label:before,
                label:after{
                position: absolute;
                line-height: 64px;
                font-size: 25px;
                font-weight: 600;
                z-index: 0;
                }
                label:before{content: "ON";float: left;left: 15px;}
                label:after{content: "OFF";float: right;right: 15px;}
                label:hover:before{color: #2993e6;}
                label:hover:after{color: #d50c63;}
                input {
                  width: 100px;
                  height: 56px;
                  margin-top: 2px;
                  display: inline-block;
                  position: relative;
                  margin-left: 2px;
                  z-index: 1;
                  pointer-events: all;
                  cursor: pointer;
                  border-radius: 10px;
                  background-clip: padding-box;
                  background-color: #776f6b;
                  background-image: linear-gradient(0deg, #615957 0%, #837b75 19.78%, #736d69 30.44%, #736d69 69.56%, #fdf3eb 89.77%, #aba19b 100%);
                  box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.75),
                    0 30px 20px -20px rgba(0, 0, 0, 0.75),
                    0 50px 40px -25px rgba(0, 0, 0, 0.75);
                transition: margin 0.3s ease-in;
                }
                input:checked{
                margin-left: 78px;
                transition: margin 0.3s ease-out;
                }
                input:before,input:after{
                content: "";
                position: absolute;
                display: inline-block;
                margin-top: 1px;
                }
                input:before {
                  width: 37px;
                  height: 54px;
                  margin-left: 1px;
                  float: left;
                  border-radius: 10px 14px 14px 10px ;
                  background-clip: padding-box;
                  background-color: #857f7d;
                  box-shadow: 1px 0 0 rgba(255,255,248,.7);
                  background-image: linear-gradient(0deg, #978f8d 0%, #817d79 46.44%, #a39b97 100%);
                }
                input:after {
                  width: 41px;
                  height: 54px;
                  float: right;
                  right: 0;
                  z-index: 1;
                  margin-right: 1px;
                  border-radius: 13px 10px 10px 13px ;
                  background-clip: padding-box;
                  background-color: #877f7d;
                  background-image: linear-gradient(0deg, #5b5755 0%, #696561 18.68%, #857f7d 50%, #9b9793 98.22%, #7d7979 100%);
                }
                .strip{
                position: absolute;
                z-index: 10;
                display: inline-block;
                width: 77px;
                margin-left: -88px;
                margin-top: 21px;
                opacity: 0.55;
                }
                .strip:before,
                .strip:after{
                content:"";
                height:18px;
                position: absolute;
                display: inline-block;
                width: 1px;
                background: black;
                box-shadow: -1px 0 0 rgba(255,255,255,0.75),
                    4px 0 0 black,
                    3px 0 0 rgba(255,255,255,0.75),
                    -3px 0 0 black,
                    -4px 0 0 rgba(255,255,255,0.75)}
                .strip:before{float: left;left: 0}
                .strip:after{float: right;right: 0}
                /* Promote */
                img,p{margin:0 ;text-align:center}
              `}</style>
        </div>
    );
  }
}

Switch.propTypes = {
  handleChange: React.PropTypes.func.isRequired,
};


export default Switch;
