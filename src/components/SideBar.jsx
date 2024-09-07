import { createQueryObject } from '../helpers/Helper';
import { FaListUl } from 'react-icons/fa6';
import styles from "./SideBar.module.css"
import { categories } from '../constants/list';


function SideBar({query,setQuery}) {
    const categoryHandler=(event)=>{
        const {tagName} = event.target
        if(tagName !== "LI") return;
        setQuery(query=>createQueryObject(query,{category:event.target.innerText.toLocaleLowerCase()}))
    }
  return (
    <div className={styles.sidebar}>
        <div>
            <FaListUl/>
            <p>Categories</p>
        </div>
        <ul onClick={categoryHandler}>
            {categories.map(category =>(
                <li key={category.title} 
                className={(query.category===category.title.toLocaleLowerCase())?styles.selected:null}>
                    {category.title}
                </li>
            ))  
            }
        </ul>  
    </div>
  )
} 

export default SideBar