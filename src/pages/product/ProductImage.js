import React, {useEffect, useState} from "react";
import {Galleria} from "primereact/galleria";
import {useSelector} from "react-redux";
import {selectProductDetail} from "~/features/productSlice";

function ProductImage() {
    const product = useSelector(selectProductDetail);
    const [images, setImages] = useState([]);
    const imageUrlList = product?.productImageUrlList;
    console.log('product')
    console.log(product)

    const responsiveOptions = [
        {
            breakpoint: "991px",
            numVisible: 4,
        },
        {
            breakpoint: "767px",
            numVisible: 3,
        },
        {
            breakpoint: "575px",
            numVisible: 1,
        },
    ];
    const PhotoService = {
        getData() {
            const subImages = imageUrlList.map(item => {
                return {
                    itemImageSrc: item,
                    thumbnailImageSrc: item,
                }
            })
            return [{itemImageSrc: product.imageUrl, thumbnailImageSrc: product.imageUrl}, ...subImages]
        },

        getImages() {
            return Promise.resolve(this.getData());
        },
    };
    useEffect(() => {
        PhotoService.getImages().then((data) => setImages(data));
    }, []);

    const itemTemplate = (item) => {
        return (
            <img
                src={item.itemImageSrc}
                alt={item.alt}
                style={{width: "100%", display: "block"}}
            />
        );
    };

    const thumbnailTemplate = (item) => {
        return (
            <img
                src={item.thumbnailImageSrc}
                alt={item.alt}
                style={{display: "block"}}
            />
        );
    };

    return (
        <div className="card">
            <Galleria
                value={images}
                responsiveOptions={responsiveOptions}
                numVisible={3}
                // style={{maxWidth: 640}}
                item={itemTemplate}
                thumbnail={thumbnailTemplate}
                circular
                autoPlay={true}
                transitionInterval={2000}
            />
        </div>
    );
}

export default ProductImage