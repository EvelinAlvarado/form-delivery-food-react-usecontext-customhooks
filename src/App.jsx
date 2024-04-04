import { MainSpace, ImageSpace, FormSpace, GlobalStyle } from "./styles";
import Form from "./Form";

function App() {
  return (
    <>
      <GlobalStyle />
      <MainSpace>
        <ImageSpace />
        <FormSpace>
          <Form />
        </FormSpace>
      </MainSpace>
    </>
  );
}

export default App;
