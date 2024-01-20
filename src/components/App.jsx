import { StickerList } from "./StickerList/StickerList";
import stickerData from './stickerData.json'
import { Container } from "./App.styled";

export function App() {
    return (
      <Container>
        <StickerList stickerData={stickerData}/>
      </Container>
    )
};
