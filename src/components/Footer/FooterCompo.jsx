import './footer.css'
import iconGit from '../../assets/icons_images/github.png'
import iconLinked from '../../assets/icons_images/linkedin.png'
import iconGmail from '../../assets/icons_images/gmail.png'
import iconDiscord from '../../assets/icons_images/discord.png'
import Banner from '../Banner/Banner.jsx'

export default function Footer(){
    return(
        <>
        <div className='footer'>
            <div className='banners__'>
                <Banner/>
                <Banner/>
                <Banner/>
                <Banner/>
            </div>
            
           
            <div className='footer_box_icons'>

                    <a href="">
                        <img src={iconGit} alt="" />
                    </a>
                    <a href="">
                        <img src={iconLinked} alt="" />
                    </a>
                    <a href="">
                        <img src={iconGmail} alt="" />
                    </a>
                    <a href="">
                        <img src={iconDiscord} alt="" />
                    </a>
            </div>
            <h4 className='footerDesing'>
                    ® Developed by David Silva ®
            </h4>
            
           
        </div>
        </>
    )
}