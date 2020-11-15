import React from 'react';


class ImageViewer extends React.Component{
     
    constructor(props){
        super(props);
        this.imgArr = [];
        this.id = '';
        this.elementindex = 0
        this.image = null;
        this.leftImage = null;
        this.rightImage = null;
        this.imageJSX = null;
       
    }
    buildImageArray(){
        if(this.props.imgArray.length<12){
            this.imgArr = this.props.imgArray;
        }else{
            this.imgArr = this.props.imgArray.slice(0,12).concat(this.props.imgArray.slice(24))
        }
    }
    findImage(){
        let i = 0;
        this.imgArr.forEach(element => {
            if(element.id === this.id){
                this.image = element;
                this.elementindex = i;
            }
            i+=1;
        });
        this.imageJSX = <img src={this.image['urls']['full']}></img>
        this.setState({})
    }
    componentDidMount(){
        this.id = this.props.id;
        this.buildImageArray();
        this.findImage();
        console.log(this.image['urls']['full'])
        
    }

    changeImage(dir){
        if(dir === 'left'){
            if(this.elementindex!=0){
                this.elementindex-=1;
                this.image = this.imgArr[this.elementindex];
                this.imageJSX = <img src={this.image['urls']['full']}></img>
                this.setState({})
            }
        }else{
            if(this.elementindex<this.imgArr.length){
                this.elementindex+=1;
                this.image = this.imgArr[this.elementindex];
                this.imageJSX = <img src={this.image['urls']['full']}></img>
                this.setState({})
            }
        }
        
    }

    render(){
        return(
            <div className="img-view-box">
                <div className="img-button-cont">
                    <i onClick={this.changeImage.bind(this,'left')} class="fas fa-arrow-left"></i>
                </div>
                <div className="img-viewer">
                    {this.imageJSX}
                </div>
                <div className="img-button-cont">
                    <i onClick={this.changeImage.bind(this,'right')} class="fas fa-arrow-right"></i>
                </div>
            </div>
        )   
    }
}

export default ImageViewer;