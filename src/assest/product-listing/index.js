
function Productlisting(props) {
    const { item } = props;
    return (
        <div className="col-3">
            <div className='w-100'>
                <img src={item.img}></img>
                <h5>{item.name}</h5>
                <p>{item.dec}</p>
                <label>{item.price}</label>
            </div>
        </div>
    );
}
export default Productlisting;