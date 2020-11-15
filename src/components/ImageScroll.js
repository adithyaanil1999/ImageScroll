import React from 'react';
import unsplash from '../static/unsplashobj';
import ImageGrid from './Imagegrid';
import { toJson } from 'unsplash-js';
class ImageScroll extends React.Component{
     
    constructor(props){
        super(props);
        this.pageno = 1;
        this.state = props;
        this.grid = null;
        this.imgArray = [];
        this.first = 0;

        
    }

    async callAPI(pageNo){
        let result = await unsplash.photos.listPhotos(pageNo, 12, "latest")
        result = await toJson(result);
        return result;

    }
    
    async getImages(pageNo){
        let result = await this.callAPI(pageNo);
        return result;
    }
    async handleScroll(){
        let that = this;
        const element = document.getElementById('scroll-cont');
        if( Math.ceil(element.scrollHeight - element.scrollTop) === element.clientHeight){
            that.pageno+=1;
        
            let result_new = await that.getImages(this.pageno);
            this.imgArray = this.imgArray.concat(result_new);
            if(this.first===0){
                that.setState({imgArr:result_new,full_array:this.imgArray});
                this.handleScroll();
                this.first+=1
            }else
            that.setState({imgArr:result_new,full_array:this.imgArray});
        }
    }

    async componentDidMount(){
        let result = await this.getImages(this.pageno);
        this.imgArray = this.imgArray.concat(result);
        this.setState({imgArr:result,full_array:this.imgArray});
        document.getElementById('scroll-cont').addEventListener("scroll",this.handleScroll.bind(this));
        
    }

    componentDidUpdate(){
        // console.log(this.imgArray)
    }
    

    render(){
        let grid;
        if(this.state.imgArr){
            grid = <ImageGrid fullArr={this.state.full_array} imgArr={this.state.imgArr}/>
        }
        else
            grid = null
        return(
            <div className="image-scroll-container">
                {grid}
            </div>
        )   
    }
}

export default ImageScroll;