import { createQueryObject } from '../helpers/Helper';
import { FaListUl } from 'react-icons/fa6';

function SideBar({setQuery}) {
    const categoryHandler=(event)=>{
        const {tagName} = event.target
        if(tagName !== "LI") return;
        setQuery(query=>createQueryObject(query,{category:event.target.innerText.toLocaleLowerCase()}))
    }
  return (
    <div>
        <div>
            <FaListUl/>
            <p>Categories</p>
        </div>
        <ul onClick={categoryHandler}>
            <li>All</li>
            <li>Electronics</li>
            <li>Jewelery</li>
            <li>Men's Clothing</li>
            <li>Women's Clothing</li>
        </ul>  
    </div>
  )
}

export default SideBar