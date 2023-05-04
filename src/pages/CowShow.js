import { useParams } from "react-router-dom";

const CowShow = ({ cows }) => {
  const { id } = useParams();
  let selectedCow = cows.find((cow) => cow.id === +id);

  return (
    <main>
      {selectedCow && (
        <>
          <img alt="send mooods" src={selectedCow.image} />
          <h3>
            {selectedCow.name} likes {selectedCow.enjoys}
          </h3>
        </>
      )}
    </main>
  );
};

export default CowShow;
