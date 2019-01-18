import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = { spans: 0};
        //ref is how we get take a jsx element and are able to reference the actual DOM element
        this.imageRef = React.createRef();
    }

    componentDidMount(){
        //reference the image and add event listener for when the image actually loads
        this.imageRef.current.addEventListener('load', this.setSpans)
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;

        const spans = Math.ceil(height / 10);

        this.setState({ spans });
    }
    render () {
        //destructured
        const { description, urls } = this.props.image;
        return <div style={{ gridRowEnd: `span ${this.state.spans}`}}>
            <img 
            ref={this.imageRef}
            alt={description}
            src={urls.regular}
            />
        </div>
    }
}

export default ImageCard;