import { TopBarLinks } from './types';
import {
  Container,
  Title,
  LogoContainer,
  Logo,
  SocialNetworkContainer,
  TopBar,
  Greeting,
  BannerContent,
  JobTitle,
  Description,
} from './styles';
import Button from '@/components/Button';
import ContactButton from '@/components/ContactButton';
import ContactModal from '@/components/ContactModal';
import ArrowDownButton from '@/components/ArrowDownButton';

interface BannerProps {
  isContactModalOpen: boolean;
  topBarLinks: TopBarLinks;
  openModal: () => void;
  closeModal: () => void;
}

const Banner = ({
  topBarLinks,
  isContactModalOpen,
  openModal,
  closeModal,
}: BannerProps) => {
  return (
    <Container id="banner">
      <TopBar>
        <Title>
          <LogoContainer>
            <Logo />
          </LogoContainer>
          <span>KevBeltrao</span>
        </Title>

        <SocialNetworkContainer>
          <ul>
            {topBarLinks.map((link) => (
              <li key={link.alt}>
                <a href={link.url} target="_blank" rel="noreferrer">
                  <link.Icon />
                </a>
              </li>
            ))}
          </ul>
        </SocialNetworkContainer>
      </TopBar>

      <BannerContent>
        <Greeting>
          <span className="nowrap">Hello, folks!</span>
          <br />
          <span className="nowrap">
            I am <span className='name'>Kevin Beltrão</span>
          </span>
        </Greeting>

        <JobTitle>Software Engineer</JobTitle>

        <Description>
          I love teaching and am passionate about music.
          I write articles in my free time and also produce YouTube videos.
        </Description>

        <Button tag="a" href="/kevinBeltrao.pdf" target="_blank">my resume</Button>
        
        <ContactButton onClick={openModal} />

        <ContactModal isOpen={isContactModalOpen} closeModal={closeModal} />

        <footer>
          <ArrowDownButton />
        </footer>
      </BannerContent>
    </Container>
  );
};

export default Banner;
