export default function Header() {
    return (  <div className="hero_area">
   
    <header className="header_section">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg custom_nav-container ">
          <a className="navbar-brand" href="index.html">
            <span>Hostit</span>
          </a>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className=""> </span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="about.html"> About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="service.html">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="price.html">Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="contact.html">Contact Us</a>
              </li>
            </ul>
            <div className="quote_btn-container">
              <form className="form-inline">
                <button className="btn   nav_search-btn" type="submit">
                  <i className="fa fa-search" aria-hidden="true"></i>
                </button>
              </form>
              <a href="">
                <i className="fa fa-phone" aria-hidden="true"></i>
                <span>
                  Call : +01 123455678990
                </span>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
   
    <section className="slider_section ">
      <div id="customCarousel1" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container ">
              <div className="row">
                <div className="col-md-6">
                  <div className="detail-box">
                    <h1>
                      Fast & Secure <br />
                      Web Hosting
                    </h1>
                    <p>
                      Anything embarrassing hidden in the middle of text. All the Lorem Ipsuanything embarrassing hidden in the middle of text. All the Lorem Ipsumm </p>
                    <div className="btn-box">
                      <a href="" className="btn-1">
                        Read More
                      </a>
                      <a href="" className="btn-2">
                        Contact Us
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="row">
                    <div className=" col-lg-10 mx-auto">
                      <div className="img-box">
                        <img src="images/slider-img.png" alt=""/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container ">
              <div className="row">
                <div className="col-md-6">
                  <div className="detail-box">
                    <h1>
                      Fast & Secure <br />
                      Web Hosting
                    </h1>
                    <p>
                      Anything embarrassing hidden in the middle of text. All the Lorem Ipsuanything embarrassing hidden in the middle of text. All the Lorem Ipsumm </p>
                    <div className="btn-box">
                      <a href="" className="btn-1">
                        Read More
                      </a>
                      <a href="" className="btn-2">
                        Contact Us
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="row">
                    <div className=" col-lg-10 mx-auto">
                      <div className="img-box">
                        <img src="images/slider-img.png" alt=""/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container ">
              <div className="row">
                <div className="col-md-6">
                  <div className="detail-box">
                    <h1>
                      Fast & Secure <br />
                      Web Hosting
                    </h1>
                    <p>
                      Anything embarrassing hidden in the middle of text. All the Lorem Ipsuanything embarrassing hidden in the middle of text. All the Lorem Ipsumm </p>
                    <div className="btn-box">
                      <a href="" className="btn-1">
                        Read More
                      </a>
                      <a href="" className="btn-2">
                        Contact Us
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="row">
                    <div className=" col-lg-10 mx-auto">
                      <div className="img-box">
                        <img src="images/slider-img.png" alt=""/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel_btn-box">
          <a className="carousel-control-prev" href="#customCarousel1" role="button" data-slide="prev">
            <i className="fa fa-angle-left" aria-hidden="true"></i>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#customCarousel1" role="button" data-slide="next">
            <i className="fa fa-angle-right" aria-hidden="true"></i>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </section>
   
  </div>

    )
}