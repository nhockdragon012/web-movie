import './layout.scss';
import Header from '../Header/header'
import Route from '../../Route'
import Navbar from '../navbar'

// $mobile-width: 767px;
// $tablet-width: 1023px;
function Layout() {  
  const windowWidth = window.innerWidth 
  return (
    <>
      <Header/>
      <section id="body">
        <div className="container">
            <Route/>
          {windowWidth >= 1024 && <div className="right-container">
            <Navbar/>
          </div>}
        </div>
      </section>
    </>
  );
}

export default Layout;
