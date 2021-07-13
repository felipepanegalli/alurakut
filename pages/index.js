import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';
import {AlurakutMenu, OrkutNostalgicIconSet} from '../src/lib/AlurakutCommons';
import {ProfileRelationsBoxWrapper} from '../src/components/ProfileRelations';
import ProfileSidebar from '../src/components/ProfileSidebar';
import {useState} from 'react';

export default function Home() {
    const githubUser = 'felipepanegalli';
    const [comunidades, setComunidades] = useState([{
        title: 'Eu odeio acordar cedo',
        image: 'https://alurakut.vercel.app/capa-comunidade-01.jpg',
    }]);
    const pessoasFavoritas = [
        'juunegreiros',
        'omariosouto',
        'peas',
        'rafaballerini',
        'marcobrunodev',
        'felipefialho',
    ];

    function handleSubmitCommunity(e) {
        e.preventDefault();
        const data = new FormData(e.target);
        const comunidade = {
            title: data.get('title'),
            image: data.get('image'),
        };
        setComunidades([...comunidades, comunidade]);
    }

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
                  <Box>
                      <h2 className='subTitle'>O que você deseja fazer?</h2>
                      <form onSubmit={handleSubmitCommunity}>
                          <div>
                              <input
                                type="text"
                                placeholder='Qual vai ser o nome da sua comunidade?'
                                name='title'
                                aria-label='Qual vai ser o nome da sua comunidade?'
                              />
                          </div>
                          <div>
                              <input
                                type="text"
                                placeholder='Coloque uma URL para usar de capa'
                                name='image'
                                aria-label='Coloque uma URL para usar de capa'
                              />
                          </div>
                          <button>
                              Criar comunidade
                          </button>
                      </form>
                  </Box>
              </div>
              <div className={'profileRelationsArea'} style={{gridArea: 'profileRelationsArea'}}>
                  <ProfileRelationsBoxWrapper>
                      <h2 className="smallTitle">Meus Amigos ({pessoasFavoritas.length})</h2>
                      <ul>
                          {pessoasFavoritas.map((githubUser) => {
                              return (
                                <li key={githubUser}>
                                    <a href={`/users/${githubUser}`}>
                                        <img src={`https://github.com/${githubUser}.png`} alt={githubUser}/>
                                        <span>{githubUser}</span>
                                    </a>
                                </li>
                              );
                          })}
                      </ul>
                  </ProfileRelationsBoxWrapper>

                  <ProfileRelationsBoxWrapper>
                      <h2 className="smallTitle">Comunidades ({comunidades.length})</h2>
                      <ul>
                          {comunidades.map((comunidade, i) => {
                              return (
                                <li key={i}>
                                    <a href={`/users/${comunidade.title}`}>
                                        <img src={comunidade.image} alt={comunidade.title}/>
                                        <span>{comunidade.title}</span>
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
