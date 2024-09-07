import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useProducts } from '../context/ProductsContext'
import styles from "./ProductsPage.module.css"
import Card from "../components/Card"
import Loader from '../components/Loader';
import { searchProducts,filterProductsByCategory,getInitialQuery } from '../helpers/Helper';
import Search from '../components/Search';
import SideBar from '../components/SideBar';

function ProductsPage() {
 
  const products =useProducts();
  const [filteredProducts,setFilteredProducts]=useState([])
  const [query,setQuery]=useState({})
  const [search,setSearch]=useState("");
  const [searchParams,setSearchParams]=useSearchParams();
  
  useEffect(()=>{
    setFilteredProducts(products)
    setQuery(getInitialQuery(searchParams))
  },[products])

  useEffect(()=>{
    setSearchParams(query)
    let finalProducts=searchProducts(products,query.search)
    finalProducts = filterProductsByCategory(finalProducts,query.category)
    setFilteredProducts(finalProducts)
    setSearch(query.search || "")
  },[query])
  
  return (
    <>
    <Search search={search} setSearch={setSearch} setQuery={setQuery}/>
    <div className={styles.container}>
        <div className={styles.products}>
          {!filteredProducts.length && <Loader/>}
          {filteredProducts.map((p)=>(
            <Card key={p.id} data={p}/>
          ))}
          </div>
          <SideBar setQuery={setQuery} query={query}/>
    </div>  
    </>
  )
}

export default ProductsPage