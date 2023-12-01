import styled from "styled-components"

const Poster = styled.div`
    background-color: rgb(76, 76, 126);
    margin: 10px;
    width: 150px;
    height: 260px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    border-radius: 3px;
    position: relative;
  }
`;
const Img = styled.img`
    width: 100%;
    height: 75%;
`;
const Text = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 85%;
    height: 25%;
    color: white;
    font-size: 10px;
    font-weight: 700;
`;
const Average = styled.div`
    margin-left: auto;
`;
function TvStyle(props) {
  const PosterUrl = `https://image.tmdb.org/t/p/w1280/${props.item.poster_path}`;
  return (
    <Poster>
      <Img src={PosterUrl} alt="poster"></Img>
      <Text>
        <div>{props.item.name}</div>
          <Average>{props.item.vote_average}</Average>
      </Text>
    </Poster>
  );
}

export default TvStyle;


