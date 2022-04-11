import logo from '../../assets/images/motchill.png'
import './header.scss'

import {Link} from 'react-router-dom'
import {useState, useContext} from 'react'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faRightToBracket, faUsers, faBookmark, faBars, faCircleArrowRight} from '@fortawesome/free-solid-svg-icons'
import {GetData} from '../providerContext'

function Header() {
  const [input, setInput] = useState('')
  const windowWidth = window.innerWidth
  const getValue = useContext(GetData)

  const handleMobileMenu = (e) => {
    const a = document.querySelector('li.menu-item>a')
    const menu = document.querySelector('ul.container')
    const menuchild = document.querySelectorAll('.main-menu-mobile ul.list-menu-child')
    const checkHaveUl = e.target.parentNode.childNodes[1]
    if(checkHaveUl && checkHaveUl.classList.contains('list-menu-child')) {
      checkHaveUl.classList.toggle('active-menu-child')
    }else if((a && !checkHaveUl) || e.target.classList.contains('overlay-mobile')) {
      menu.classList.remove('active')
      menuchild.forEach(menu => menu.classList.remove('active-menu-child'))
    }
    
  }
  
  const handleSearchMobile = () => {
    setInput('')
    document.querySelector('.mobile-search .search-box').classList.remove('active')
  }

  return (
      <header>
      <div className="container">
          <div className="body-header">
            {windowWidth < 768 &&<div className="main-menu-mobile">
              <div className="btn-burger" 
                onClick={() => {document.querySelector('ul.container').classList.add('active')}}>
                    <FontAwesomeIcon icon={faBars} size="2x"/>
              </div>
              <ul className="container" onClick={e => handleMobileMenu(e)}>
                <li className="menu-item active"><Link to="/">Trang chủ</Link></li>
                <li className="menu-item">
                  <a>Thể loại</a>
                    <ul className="list-menu-child">
                      <li className="menu-item"><Link to="phim-hoat-hinh">Hoạt Hình</Link></li>
                      <li className="menu-item"><Link to="phim-hanh-dong">Hành Động</Link></li>
                      <li className="menu-item"><Link to="phim-kinh-di">Kinh Dị</Link></li>
                      <li className="menu-item"><Link to="phim-hai-kich">Hài Kịch</Link></li>
                      <li className="menu-item"><Link to="phim-lang-man">Lãng Mạn</Link></li>
                    </ul>
                </li>
                <li className="menu-item"><Link to="xem-nhieu-nhat">Xem nhiều</Link></li>
                <li className="menu-item">
                  <a>Phim mới</a>
                  <ul className="list-menu-child" onClick={e => getValue.setValue(e.target.innerText)}>
                    <li className="menu-item"><Link to="/year/2022">2022</Link></li>
                    <li className="menu-item"><Link to="/year/2021">2021</Link></li>
                    <li className="menu-item"><Link to="/year/2020">2020</Link></li>
                    <li className="menu-item"><Link to="/year/2019">2019</Link></li>
                    <li className="menu-item"><Link to="/year/2018">2018</Link></li>
                  </ul>
                </li>
                <li className="menu-item"><Link to="phim-viet-nam">Phim Việt Nam</Link></li>
                <li className="menu-item"><Link to="phim-my">Phim Mỹ</Link></li>
                <div className="overlay-mobile"></div>
              </ul>
              
            </div>}
            <div className="left-header">
              <a href="/">
                <img src={logo} alt="logo.png"></img>
              </a>
            </div>
            {windowWidth >= 768 &&<div className="right-header">
              <div className="search-box">
                  <form method="get">
                      <input 
                          className="search"
                          value={input}
                          placeholder="V.d: tên phim, tên diễn viên..."
                          onChange={(e)=> setInput(e.target.value)}
                      ></input>
                      <div className="icon-search">
                        <Link to={`/search/${input.replaceAll(' ','%20')}`}><FontAwesomeIcon icon={faMagnifyingGlass} size="lg" onClick={()=> setInput('')}/></Link>
                      </div>
                  </form>
              </div>
              <div className="user-menu-box">
                  <ul>
                      <li>
                          <div className="icon login">
                          <FontAwesomeIcon icon={faRightToBracket} />
                          </div>
                          <a onClick={() => alert('chưa cập nhật')}>Đăng nhập</a>
                      </li>
                      <li>
                          <div className="icon register">
                          <FontAwesomeIcon icon={faUsers} />
                          </div>
                          <a onClick={() => alert('chưa cập nhật')} >Đăng ký</a>
                      </li>
                      <li>
                          <div className="icon bookmark">
                          <FontAwesomeIcon icon={faBookmark} />
                          </div>
                          <a onClick={() => alert('chưa cập nhật')}>Bookmark</a>
                      </li>
                  </ul>
              </div>
              <div className="note">
                <p>Công cụ tìm kiếm phim.</p>
              </div>
            </div>}
            {windowWidth < 768 &&<div className="mobile-search">
              <div className="search-icon" onClick={() => document.querySelector('.mobile-search .search-box').classList.toggle('active')}>
                <FontAwesomeIcon icon={faMagnifyingGlass} size='xl'/>
              </div>
              <div className="search-box">
                <form method="get">
                  <input 
                    className="search"
                    value={input}
                    placeholder="V.d: tên phim, tên diễn viên..."
                    onChange={(e)=> setInput(e.target.value)}
                  ></input>
                  <div className="icon-search">
                    <Link to={`/search/${input.replaceAll(' ','%20')}`}><FontAwesomeIcon icon={faCircleArrowRight} size="xl" onClick={handleSearchMobile}/> </Link>
                  </div>
                </form>
                <div className="overlay-mobile"></div>
              </div>
            </div>}
            <div className="clear" style={{clear:'both'}}></div>
          </div>
      </div>
      {windowWidth >= 768 &&<div className="main-menu">
        <ul className="container">
          <li className="menu-item active"><Link to="/">Trang chủ</Link></li>
          <li className="menu-item">
            <a>Thể loại</a>
              <ul className="list-menu-child">
                <li className="menu-item"><Link to="phim-hoat-hinh">Phim hoạt hình</Link></li>
                <li className="menu-item"><Link to="phim-hanh-dong">Phim hành động</Link></li>
                <li className="menu-item"><Link to="phim-kinh-di">Phim kinh dị</Link></li>
                <li className="menu-item"><Link to="phim-hai-kich">Phim hài kịch</Link></li>
                <li className="menu-item"><Link to="phim-lang-man">Phim lãng mạn</Link></li>
              </ul>
          </li>
          <li className="menu-item"><Link to="xem-nhieu-nhat">Xem nhiều</Link></li>
          <li className="menu-item">
            <a>Phim mới</a>
            <ul className="list-menu-child" onClick={e => getValue.setValue(e.target.innerText)}>
              <li className="menu-item"><Link to="/year/2022">2022</Link></li>
              <li className="menu-item"><Link to="/year/2021">2021</Link></li>
              <li className="menu-item"><Link to="/year/2020">2020</Link></li>
              <li className="menu-item"><Link to="/year/2019">2019</Link></li>
              <li className="menu-item"><Link to="/year/2018">2018</Link></li>
            </ul>
          </li>
          <li className="menu-item"><Link to="phim-viet-nam">Phim Việt Nam</Link></li>
          <li className="menu-item"><Link to="phim-my">Phim Mỹ</Link></li>
        </ul>
      </div>}
    </header>
  )
}

export default Header 