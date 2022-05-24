import LinkedinIcon from '../icons/LinkedinIcon'
import GithubIcon from '../icons/GithubIcon'
import GoogleIcon from '../icons/GoogleIcon'
import './SocialMediaList.scss'

export default function SocialMediaList() {
  return (
    <div className='social-media__container'>
      <ul>
        <li><LinkedinIcon href="https://www.linkedin.com/in/luciano-madro%C3%B1al-correa-1a32931a0/" /></li>
        <li><GithubIcon href="https://github.com/lucianoumc1"/></li>
        <li><GoogleIcon href="mailto: lucianoumc1@gmail.com "/></li>
      </ul>
    </div>
  )
}
