import './sass/main.scss'
import logo from './img/logo.png';
import user from './img/user.jpg'
import searchIcon from './img/SVG/magnifying-glass.svg';
import bookmarkIcon from './img/SVG/bookmark.svg';
import chatIcon from './img/SVG/chat.svg';
import homeIcon from './img/SVG/home.svg';
import keyIcon from './img/SVG/key.svg';
import AeroplaneIcon from './img/SVG/aircraft-take-off.svg';
import LocationIcon from './img/SVG/location-pin.svg'
import Hotel1 from './img/hotel-1.jpg';
import Hotel2 from './img/hotel-2.jpg';
import Hotel3 from './img/hotel-3.jpg';
import StarIcon from './img/SVG/star.svg';
import User1 from './img/user-1.jpg';
import User2 from './img/user-2.jpg';
import User3 from './img/user-3.jpg';
import User4 from './img/user-4.jpg';
import User5 from './img/user-5.jpg';
import User6 from './img/user-6.jpg';



function App() {
  return (
    <div className="container">
      <div className="header">
        <img src={logo} alt='trillo logo' className='logo'   />

        <form action="#" className='search'>
          <input type='text' className='search__input' placeholder='Search hotels' />
          <button className='search__button'>
            <img src={searchIcon} className='search__icon'/>
          </button>
      
        </form>
        
        <nav className='user-nav'>

          <div className='user-nav__icon-box'>
          <img src={bookmarkIcon} className='user-nav__icon'/>
          <span className='user-nav__notification'>7</span>
          </div>
          

          <div className='user-nav__icon-box'>
          <img src={chatIcon} className='user-nav__icon'/>
          <span className='user-nav__notification'>13</span>
          </div> 
          

          <div className='user-nav__user'>
          <img src={user} className='user-nav__user-photo'/>
          <span className='user-nav__user-name'>Talha</span>
          </div>

         

        </nav>
      </div>
      <div className="content"> 

        <div className='sidebar'>
        <ul className='side-nav'>

          <li className='side-nav__item side-nav__item--active'  >
            <a href='#' className='side-nav__link' >
              <img src={homeIcon} alt='icon' className='side-nav__icon' />
              <span>Hotel</span>
            </a>
          </li>

          <li className='side-nav__item' >
            <a href='#' className='side-nav__link' >
              <img src={AeroplaneIcon} alt='icon' className='side-nav__icon' />
              <span>Flight</span>
            </a>
          </li>


          <li className='side-nav__item' >
            <a href='#' className='side-nav__link' >
              <img src={keyIcon} alt='icon' className='side-nav__icon' />
              <span>Car Rentals</span>
            </a>
          </li>


          <li className='side-nav__item' >
            <a href='#' className='side-nav__link' >
              <img src={LocationIcon} alt='icon' className='side-nav__icon' />
              <span>Tours</span>
            </a>
          </li>

        </ul>

        <div className='legal'>
            &copy; 2017 by Talha. All rights reserved
        </div>
        </div>

        <div className='hotel-view'> 

          <div className='gallery'>
            <div className='gallery__item'>
              <img className='gallery__photo' src={Hotel1} alt="Pic of hotel 1" />
            </div>

            <div className='gallery__item'>
              <img className='gallery__photo' src={Hotel2} alt="Pic of hotel 2" />
            </div>

            <div className='gallery__item'>
              <img className='gallery__photo' src={Hotel3} alt="Pic of hotel 3" />
            </div>
          </div>

          <div className='overview'>
            <h1 className='overview__heading'>
              Hotel Las Palmas
            </h1>

            <div className='overview__stars'>
              <img src={StarIcon} alt='Star photo' className="overview__stars--icon"/>
              <img src={StarIcon} alt='Star photo' className="overview__stars--icon"/>
              <img src={StarIcon} alt='Star photo' className="overview__stars--icon"/>
              <img src={StarIcon} alt='Star photo' className="overview__stars--icon"/>
              <img src={StarIcon} alt='Star photo' className="overview__stars--icon"/>
            </div>

            <div className='overview__location'>
            <img src={LocationIcon} alt='location photo' className="overview__location--icon"/>
            <button className='btn'>Albuferia, Portugal </button>
            </div>

            <div className='overview__rating'>
              <div className='overview__rating--average'>8.6</div>
              <div className='overview__rating--count'>429 votes</div>
            </div>
          </div>

          <div className='detail'>
              <div className='description'>
                <p className='paragraph'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.
                </p>
                <p className='paragraph'>
                Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate delectus, inventore iure aliquid aliquam.
                </p>
                <ul className='list'>
                    <li className='list__item'>Close to the beach</li>
                    <li className='list__item'>Breakfast included</li>
                    <li className='list__item'>Free airport shuttle</li>
                    <li className='list__item'>Free wifi in all rooms </li>
                    <li className='list__item'>Air conditioning and heating</li>
                    <li className='list__item'>Pets allowed</li>
                    <li className='list__item'>We speak all language</li>
                    <li className='list__item'>Perfect for families</li>

                </ul>
                <div className='recommend'>
                  <p className='recommend__count'>Lucy and three other friends recommend this hotel.</p>
                  <div className='recommend__friends'>
                      <img src={User3} alt='Recommend Photo' className='recommend__photo' />
                      <img src={User4} alt='Recommend Photo' className='recommend__photo' />
                      <img src={User5} alt='Recommend Photo' className='recommend__photo' />
                      <img src={User6} alt='Recommend Photo' className='recommend__photo' />

                  </div>
                </div>
              </div>

              <div className='reviews'>
                <div className='review'>
                    <p className='review__text'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi, totam, itaque officia ex.
                    </p>
                    <div className='review__user'>
                      <img src={User1} alt='User photo' className='review__photo'/>
                      <div className='review__user-box'>
                        <p className='review__user-name'>Nick Smith</p>
                        <p className='review__user-date'>Feb 23rd,2017</p>
                      </div>
                      <p className='review__rating'>7.8</p>
                      
                    </div>
                </div>

                <div className='review'>
                    <p className='review__text'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi, totam, itaque officia ex.
                    </p>
                    <div className='review__user'>
                      <img src={User2} alt='User photo' className='review__photo'/>
                      <div className='review__user-box'>
                        <p className='review__user-name'>Marry Thomas</p>
                        <p className='review__user-date'>Sep 13th,2016</p>
                      </div>
                      <p className='review__rating'>9.3</p>
                      
                    </div>
                </div>
                <button className="btn-inline">
                    Show all <span>&rarr;</span>  
                </button>
              </div>
          </div>

          <div className='cta'>
            <h2 className='cta__book-now'>Good news!We have 4 free rooms for your selected dates!</h2>
            <button className='cta__btn'>
              <span className='cta__btn-visible'>Book Now</span>
              <span className='cta__btn-invisible'>Only 4 rooms left</span>
            </button>
          </div> 
        </div>
      </div>
    </div>
  );
}

export default App;
