import { GetServerSideProps } from "next";

type Props = {};

const StartPage = () => {
  // const time = Date.now();
  const elapsedTime = 33;

  const handelStartTimer = () => {
    // ... how should this work ...
  };

  const handelStopTimer = () => {
    // ... how should this work ...
  };

  return (
    <div>
      <div>Elapsed time: {elapsedTime}</div>

      <button onClick={handelStartTimer}>Start Timer</button>

      <button onClick={handelStopTimer}>Stop Timer</button>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  return {
    props: {},
  };
};

export default StartPage;
