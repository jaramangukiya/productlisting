import '../product-listing/productlisting.css';
import Productlisting from '../product-listing';

function Productdeatails() {
    const productList = [
        {
            id: 1,
            img: "https://www.rado.com/media/catalog/product/r/g/rgb_cat_true_thinline_420_0015_3_001_3.png?im=AspectCrop=(1980,1980),allowExpansion,location=(0.5,0.5);Resize=(1980,1980),aspect=fill;Crop=(0,0,1980,1980),gravity=Center",
            name: "True Thinline x Great Gardens of the World",
            dec: ' R27015012',
            price: "₹168,800.00",
        },{
            id: 2,
            img: "https://www.rado.com/media/catalog/product/t/r/truethinline_r27121302_sld_web.png?im=Resize=(800,800),aspect=fit;Crop=(0,0,800,800),gravity=Center,allowExpansion",
            name: "True Thinline x Great Gardens of the World",
            dec: ' R27121302',
            price: "₹168,800.00",
        }, {
            id: 3,
            img: "https://www.rado.com/media/catalog/product/t/r/truethinline_r27120402_sld_web.png?im=Resize=(800,800),aspect=fit;Crop=(0,0,800,800),gravity=Center,allowExpansion",
            name: "True Thinline x Great Gardens of the World",
            dec: ' R27120402',
            price: "₹168,800.00",
        },{
            id: 4,
            img: "https://www.rado.com/media/catalog/product/r/g/rgb_cat_true_thinline_420_0005_3_090_3.png?im=AspectCrop=(1980,1980),allowExpansion,location=(0.5,0.5);Resize=(1980,1980),aspect=fill;Crop=(0,0,1980,1980),gravity=Center",
            name: "True Thinline x Great Gardens of the World",
            dec: ' R27005902',
            price: "₹168,800.00",
        }, {
            id: 5,
            img: "https://www.rado.com/media/catalog/product/t/r/truethinline_r27007032_sld_web.png?im=Resize=(800,800),aspect=fit;Crop=(0,0,800,800),gravity=Center,allowExpansion",
            name: "True Thinline x Great Gardens of the World",
            dec: '  R27007032',
            price: "₹168,800.00",
        },
        {
            id: 6,
            img: "https://www.rado.com/media/catalog/product/t/r/truethinline_r27122252_sld_web.png?im=Resize=(800,800),aspect=fit;Crop=(0,0,800,800),gravity=Center,allowExpansion",
            name: "True Thinline x Great Gardens of the World",
            dec: 'R27122252',
            price: "₹168,800.00",
        }, 
    ]
    return (
        <div>
            <div className='container text-center'>
                <div className="row justify-content-center">
                    {productList.map((product, index) => {
                        return (
                            <Productlisting key={`productdetail-${index}`} item={product}></Productlisting>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}
export default Productdeatails;