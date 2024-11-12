import './img.css';

function Img({className, src, alt, width, height}) {
    return(
        <img className={className}src={src} alt={alt} width={width} height={height}></img>
    )

};

export default Img;