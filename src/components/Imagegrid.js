import React from 'react';
import ImageViwer from './ImageViewer'


class ImageGrid extends React.Component{
     
    constructor(props){
        super(props);
        this.result = [];
        this.first = 0;
        this.id = '';
        this.openImgBool = false;
        this.didImageViwerOpen = 0;
    }
    getsize(obj) {
        var size = 0, key;
        for (key in obj) {
            if (obj.hasOwnProperty(key)) size++;
        }
        return size;
    };

   
    componentDidMount(){
        for(var i = 0 ; i < 12 ; i++){
            this.result.push(<div className="image-box"><img onClick={this.openImg.bind(this,this.props.imgArr[i]['id'])} key={this.props.imgArr[i]['id']} alt={this.props.imgArr[i]['alt_description']} src={this.props.imgArr[i]['urls']['small'] } ></img></div>) 
        }
        this.setState({...this.props});
    }

    openImg(id){
        if(id!==null){
            this.id = id;
        }
        this.setState({})
        this.openImgBool = !this.openImgBool;
        this.didImageViwerOpen+=1        
    }
    componentDidUpdate(){
        if(this.first===0){
            this.first=1;
        }else{
            if(this.didImageViwerOpen===0){
                for(var i = 0 ; i < this.state.imgArr.length ; i++){
                    this.result.push(<div  className="image-box"><img  onClick={this.openImg.bind(this,this.props.imgArr[i]['id'])} key={this.props.imgArr[i]['id']} alt={this.props.imgArr[i]['alt_description']} src={this.props.imgArr[i]['urls']['small']}  ></img></div>) 
                }
            }else{
                this.didImageViwerOpen=0        
            }
            
        }
        
    }

    render(){
        return(
            <div className="grid-scroll-container">
                <div id="scroll-cont" className="image-scroll-grid">
                    {
                    this.openImgBool ? 
                        <div className="image-view-cont" >
                            <div className="close-btn-cont">
                                <i onClick={this.openImg.bind(this,null)} class="fas fa-times-circle"></i>
                            </div>
                           <ImageViwer id={this.id} imgArray={this.props.fullArr}/>
                        </div>
                        :this.result
                    }
                </div>
             
            </div>
        )   
    }
}

export default ImageGrid;