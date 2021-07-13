import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';
import {AlurakutMenu, OrkutNostalgicIconSet} from '../src/lib/AlurakutCommons';
import {ProfileRelationsBoxWrapper} from '../src/components/ProfileRelations';

function ProfileSidebar(props) {
    return (
      <Box>
          <img src={`https://github.com/${props.githubUser}.png`} style={{borderRadius: '8px'}}/>
      </Box>
    );
}

export default function Home() {

    const githubUser = 'felipepanegalli';
    const pessoasFavoritas = [
        'juunegreiros',
        'omariosouto',
        'peas',
        'rafaballerini',
        'marcobrunodev',
        'felipefialho',
    ];

    return (
      <>
          <AlurakutMenu githubUser={githubUser}/>
          <MainGrid>
              <div className={'profileArea'} style={{gridArea: 'profileArea'}}>
                  <ProfileSidebar githubUser={githubUser}/>
              </div>
              <div className={'welcomeArea'} style={{gridArea: 'welcomeArea'}}>
                  <Box>
                      <h1 className="title">
                          Bem vindo(a)
                      </h1>
                      <OrkutNostalgicIconSet/>
                  </Box>
              </div>
              <div className={'profileRelationsArea'} style={{gridArea: 'profileRelationsArea'}}>
                  <ProfileRelationsBoxWrapper>
                      <h2 className="smallTitle">Meus Amigos ({pessoasFavoritas.length})</h2>
                      <ul>
                          {pessoasFavoritas.map((githubUser) => {
                              return (
                                <li>
                                    <a href={`/users/${githubUser}`} key={githubUser}>
                                        <img src={`https://github.com/${githubUser}.png`} alt={githubUser}/>
                                        <span>{githubUser}</span>
                                    </a>
                                </li>
                              );
                          })}
                      </ul>
                  </ProfileRelationsBoxWrapper>
              </div>
          </MainGrid>
      </>
    );
}
