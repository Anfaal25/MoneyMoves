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
            The ultimate portal for navigating the financial landscape as an international student. Embarking on your educational journey abroad is thrilling, yet managing finances in a new country can be daunting. That's where we come in. Our platform is meticulously designed to offer you all the essential information and tools you need to make informed banking and financial decisions. From choosing the right bank that meets your unique needs, to understanding how to maximize your savings, manage expenses, and send money across borders efficiently and affordably, we've got you covered. 
            </p>
            <div className="hero-explore">
            <a href="http://localhost:5173">Get Started<img src={arrow_btn} alt="" /></a>
            </div>
        </div>
  
      </div>
    )
  }
  
  export default Hero