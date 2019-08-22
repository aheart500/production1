import React from 'react'

class MemeGenerator extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            topText : '',
            bottomText  :'',
            imgSrc : 'http://i.imgflip.com/1bij.jpg',
            allMemeImages : [],
            left : 150,
        }
    }
    componentDidMount(){
        fetch('https://api.imgflip.com/get_memes').then(response => response.json()).then(response => {
            const {memes} = response.data 
            this.setState({allMemeImages : memes })

        })
    }
    formchange = (event) =>{
        const {name,value} = event.target
        this.setState({ [name] : value})
    }
    changeImage = (event) =>{
        event.preventDefault();
        const randNumber = Math.floor(Math.random() * this.state.allMemeImages.length);
        const randImg = this.state.allMemeImages[randNumber].url
        this.setState({imgSrc : randImg })
    }
    textPositionChange = (event) =>{
        event.preventDefault();
        if(event.target.id === 'leftButton'){
            this.setState(prevState => {
                return{
                left : prevState.left -10
                }
            })
        }else{
            this.setState(prevState => {
                return{left : prevState.left +10}
            })
        }
    }
    render(){
        return (
            <div className='meme-generator'>
                <form className='meme-form'>
                    <label>Top Text : </label>
                    <input 
                    type='text'
                    name = 'topText'
                    value ={this.state.topText}
                    placeholder ='Top Text'
                    onChange = {this.formchange}/>
                    <label>Bottom Text : </label>
                    <input 
                    type='text'
                    name = 'bottomText'
                    value ={this.state.bottomText}
                    placeholder ='Bottom Text'
                    onChange = {this.formchange}/><br />
                    <button onClick={this.textPositionChange} id='leftButton'>Left</button>
                    <button onClick={this.textPositionChange} id='rightButton'>Right</button>
                    <button onClick={this.changeImage}>Generate!</button>
                </form>
                <div className='meme-img'>
                    <img src={this.state.imgSrc} alt='' title="Meme Image"/>
                    <h2 className='img-top-text img-text' style={{left: this.state.left}}>{this.state.topText}</h2>
                    <h2 className='img-bottom-text img-text' style={{left: this.state.left}}>{this.state.bottomText}</h2>
                </div>
            </div>
        );
    }
}

export default MemeGenerator;