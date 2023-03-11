import { OrbitControls } from '@react-three/drei';
import { Physics } from '@react-three/rapier';
import { Container, MakeItRainButton, StyledCanvas, Title } from './Scenes/styles';
import Lights from './Scenes/Lights';
import Macbook from './Scenes/Macbook';
import Table from './Scenes/Table';
import Guitar from './Scenes/Guitar';
import RubiksCube from './Scenes/RubiksCube';
import BoloDeRolo from './Scenes/BoloDeRolo';

interface ArticleProps {
  coffeeBeans: JSX.Element[];
  addBeans: () => void;
}

const Articles = ({ coffeeBeans, addBeans }: ArticleProps) => {
  return (
    <Container id="articles">
      <Title>Articles</Title>

      <StyledCanvas camera={{ position: [0, 0.75, -3] }}>
        <Lights />

        <Physics>
          {coffeeBeans}

          <Macbook />

          <RubiksCube />
          <BoloDeRolo />

          <Table />
        </Physics>

        <Guitar />

        <OrbitControls enableZoom={true} />
      </StyledCanvas>

      <MakeItRainButton onClick={addBeans}>
        Make it rain
      </MakeItRainButton>
    </Container>
  );
};
 
export default Articles;
