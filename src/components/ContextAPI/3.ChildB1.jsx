import ChildB2 from "./4.ChildB4";
import { TatSkyConsumer } from "./Context/userContext";


const ChildB1 = () => {
  return (
    <TatSkyConsumer>
      {(data) => {
        return (
          <div>
            <p>PD ChildB1: {data.uName}</p>
            <ChildB2 />
          </div>
        );
      }}
    </TatSkyConsumer>
  );
};

export default ChildB1;