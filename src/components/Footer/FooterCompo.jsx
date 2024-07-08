import './footer.css'
import iconGit from '../../assets/icons_images/github.png'
import iconLinked from '../../assets/icons_images/linkedin.png'
import iconGmail from '../../assets/icons_images/gmail.png'
import iconDiscord from '../../assets/icons_images/discord.png'

export default function Footer(){
    return(
        <>
        <div className='footer'>
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
        </div>
        </>
    )
}