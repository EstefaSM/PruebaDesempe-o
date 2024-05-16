import PropTypes from 'prop-types';

function Products(props){
    return(
        <div class="products">
            <div className='product'>
                <ol>
                    {/* <li><img src={imgOne} alt="" /></li> */}
                    <li>Nombre: {props.name}</li>
                    <li>Categoría: {props.category}</li>
                    <li>Unidades: {props.unids}</li>
                    <li>Precio: {props.price}</li>
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