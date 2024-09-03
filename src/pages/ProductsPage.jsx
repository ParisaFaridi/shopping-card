import { useProducts } from '../context/ProductsContext'
import styles from "./ProductsPage.module.css"
import Card from "../components/Card"
import Loader from '../components/Loader';


function ProductsPage() {
 
  const products =useProducts();
  return (

    <div className={styles.container}>
      
        {!products.length && <Loader/>}
        
        <div className={styles.products}>
          {products.map((p)=>(
            <Card key={p.id} data={p}/>
          ))}
          </div>
      <p>sidebar</p>
    </div>  
  )
}

export default ProductsPage