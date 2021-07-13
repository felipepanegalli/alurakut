import Box from '../Box';
import {AlurakutProfileSidebarMenuDefault} from '../../lib/AlurakutCommons';

export default function ProfileSidebar(props) {
    return (
      <Box as="aside" >
          <img src={`https://github.com/${props.githubUser}.png`} style={{borderRadius: '8px'}}/>
          <hr className='hr'/>
          <p>
              <a href={`https://github.com/${props.githubUser}`} className="boxLink">
                  @{props.githubUser}
              </a>
          </p>
          <hr/>
          <AlurakutProfileSidebarMenuDefault/>
      </Box>
    );
}