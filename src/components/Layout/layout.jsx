import './layout.scss';
import Header from '../Header/header'
import Route from '../../Route'
import Navbar from '../navbar'
import {useState} from 'react'
// $mobile-width: 767px;
// $tablet-width: 1023px;
function Layout() {  
  
  const useWidth = (setWidth = '1024px') => {
    const width = window.matchMedia(`(min-width: ${setWidth})`)
    const [widthScreen, setWidthScreen] = useState(width.matches)
    width.addEventListener('change', (e) => {
      setWidthScreen(e.matches)
    })
    return widthScreen
  }
  const widthScreen = useWidth()

  return (
    <>
      <Header useWidth={useWidth}/>
      <section id="body">
        <div className="container">
            <Route/>
          {widthScreen && <div className="right-container">
            <Navbar/>
          </div>}
        </div>
      </section>
    </>
  );
}

export default Layout;
