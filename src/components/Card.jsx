const Card = (props) => {
    return (
        <div className= 'card'>
            <div className= 'card-body'>
                <h4 className='card-title'>{props.color}</h4>
                <p className="card-text">lorem</p>
            </div>
        </div>
    );   
};

export default Card;