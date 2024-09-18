import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import { SiOpenproject } from "react-icons/si";
import { IoMdPricetag } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa";
import styles from "./ProductPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../features/product/productsSlice";

function ProductPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const product = useSelector((store) => {
    store.product.products.find((p) => p.id === id);
    console.log(store.products);
  });

  if (!product) return <Loader />;

  return (
    <div className={styles.container}>
      <img src={product.image} alt={product.title} />
      <div className={styles.information}>
        <h3 className={styles.title}>{product.title}</h3>
        <p className={styles.description}>{product.description}</p>
        <p className={styles.category}>
          <SiOpenproject />
          {product.category}
        </p>
        <div>
          <span className={styles.price}>
            <IoMdPricetag />
            {product.price} $
          </span>
          <Link to="/products">
            <FaArrowLeft />
            <span>Back to Shop</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
