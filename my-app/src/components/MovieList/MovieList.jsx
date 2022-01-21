import PropTypes from "prop-types";
import { ListItem, LinkTo, List } from "../../App.styled";
export default function MovieList({ movieData }) {
  return (
    <>
      <List>
        {movieData.map(({ id, original_title }) => {
          return (
            <ListItem key={id}>
              <LinkTo to={`/movies/${id}`}>{original_title}</LinkTo>
            </ListItem>
          );
        })}
      </List>
    </>
  );
}

MovieList.propTypes = {
  movieData: PropTypes.array.isRequired,
};
