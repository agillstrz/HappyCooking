import { Helmet } from "react-helmet";
import "./App.css";
import { SetUpRouters } from "./routers";

function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Hcooking</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <SetUpRouters />
    </>
  );
}

export default App;
