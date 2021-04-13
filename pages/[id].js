export const getStaticPaths = async () => {
  const data = await fetch("https://www.balldontlie.io/api/v1/players");
  const players = await data.json();
  const paths = players.data.map((player) => ({
    params: { id: player.id.toString() },
  }));
  console.log(paths);
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async ({ params }) => {
  const data = await fetch(
    `https://www.balldontlie.io/api/v1/players/${params.id}`
  );
  const player = await data.json();
  return {
    props: {
      player,
    },
  };
};
const details = ({ player }) => {
  return (
    <>
      <div className=" rounded bg-blue-200 overflow-hidden shadow-lg  py-6  w-screen text-center mt-20">
        {" "}
        {player.first_name} {player.last_name}
      </div>
      <div className=" rounded bg-blue-200 overflow-hidden shadow-lg  py-6  w-screen text-center mt-20">
        {" "}
        {player.team.full_name}
      </div>

      <div className=" rounded bg-blue-200 overflow-hidden shadow-lg  py-6  w-screen text-center mt-20">
        {" "}
        {player.position}
      </div>

      <div className=" rounded bg-blue-200 overflow-hidden shadow-lg  py-6  w-screen text-center mt-20">
        {" "}
        {player.team.city}
      </div>
    </>
  );
};
export default details;
