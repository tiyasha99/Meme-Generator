import React from "react"

class MemeGenerator extends React.Component {
  constructor(){
    super()
    this.state ={
      topText: "",
      bottomText: "",
      randomImg: "http://i.imgflip.com/1bij.jpg",
      allMemesImg: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.chooseRandom = this.chooseRandom.bind(this)
  }
  componentDidMount(){
    fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(response => {
            const {memes} = response.data
            this.setState({
                allMemesImg: memes
            })
        })
        
    }
  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
    console.log(e.target)
    
  }
  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
  chooseRandom(){
    let length = this.state.allMemesImg.length;
    let arrayIndex = this.getRandomInt(length - 1);
    console.log("array length", length)
    console.log("Index", arrayIndex);
    this.setState({
        randomImg : this.state.allMemesImg[arrayIndex].url
    })
}
  render(){
    console.log(this.state.allMemesImg)
    return(
      <div>
        <div className="meme-form">
          <input
            name="topText"
            placeholder="Enter top text"
            value={this.state.topText}
            onChange={this.handleChange}
            />
            <input
            name="bottomText"
            placeholder="Enter bottom text"
            value={this.state.bottomText}
            onChange={this.handleChange}
            />
            <button onClick={this.chooseRandom.bind(this)}>
              Generate
            </button>

        </div>
        <div className="meme">
          <img src={this.state.randomImg}></img>
          <h2 className="top">{this.state.topText}</h2>
          <h2 className="bottom">{this.state.bottomText}</h2>
        </div>
      </div>
    )
  }
}
export default MemeGenerator;