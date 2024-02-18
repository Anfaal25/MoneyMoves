import './Navbar.css'

const Navbar= () => {
    return(
      <div className='nav'>
        <div className="nav-logo">Finance</div>
        <ul className="nav-menu">
            <li><a href="/">Home</a></li>
            <li class="nav-contact"><a href="/">About</a></li>
        
        </ul>
  
      </div>
    )
  }
  
  export default Navbar