import { CartWidget } from '../CartWidget/CartWidget';
import './NavBar.css';

function NavBar() {
    return(
       <div classname="menu">
        <ul>
           <li classname="menu-item"><a className='menu-item a' href="#acerca">Acerca</a></li>
           <li classname="menu-item"><a href="#contacto">Contacto</a></li>
           <li classname="menu-item"><a href="#historial">Historial</a></li>
           <li classname="menu-item"><a href="#ayuda">Ayuda</a></li>
           <li classname="menu-item"><a href="#categoria">Categoria</a></li>
           <CartWidget/>
         </ul>
        </div>     
   )

}
export default NavBar;