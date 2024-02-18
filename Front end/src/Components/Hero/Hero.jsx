import arrow_btn from "../../assets/arrow_btn.png"
import './Hero.css'
const Hero= ({heroData,setHeroCount,setPlayStatus,PlayStatus}) => {
    return(
      <div className='Hero'>
        <div className="hero-text">
            <p>{heroData.text1}</p>
            <p>{heroData.text1}</p>

        </div>

        <div className="hero-c">
            <p>
            Money Moves is the go-to platform for international students managing finances abroad. It simplifies banking, saving, and sending money, ensuring you make informed decisions. Our tailored tools help you choose the right bank, maximize savings, and manage expenses effectively and affordably.            </p>
            <div className="hero-explore">
            <a href="http://localhost:5173">Explore<img src={arrow_btn} alt="" /></a>
            </div>
        </div>
  
      </div>
    )
  }
  
  export default Hero