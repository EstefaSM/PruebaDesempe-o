import PropTypes from 'prop-types';
import '../App.css';

function Products(props){
    return(
        <div class="products">
            <div className='product'>
                <ol>
                    {/* <li><img src={imgOne} alt="" /></li> */}
                    <li><strong>Nombre:</strong> {props.name}</li>
                    <li><strong>Categoría:</strong> {props.category}</li>
                    <li><strong>Unidades:</strong> {props.unids}</li>
                    <li><strong>Precio:</strong> {props.price}</li>
                </ol>
            </div>
        </div>
    );
}

Products.propTypes ={
    name: PropTypes.string,
    category: PropTypes.string,
    unids: PropTypes.number,
    price: PropTypes.number,
}

export default Products;