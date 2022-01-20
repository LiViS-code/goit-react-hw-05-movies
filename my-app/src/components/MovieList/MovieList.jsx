import PropTypes from "prop-types";
import { ListItem, LinkTo, List } from "../../App.styled";

export default function MovieList({ movieData }) {
  return (
    <>
      <List>
        {movieData ? (
          movieData.map(({ id, original_title }) => {
            return (
              <ListItem key={id}>
                <LinkTo to={`/movies/${id}`}>{original_title}</LinkTo>
              </ListItem>
            );
          })
        ) : (
          <p>No data found</p>
        )}
      </List>
    </>
  );
}

MovieList.propTypes = {
  movieData: PropTypes.array.isRequired,
};
