import PropTypes from "prop-types";
import { ListItem, List } from "App.styled";
import { Link } from "components/Link/Link";
export default function MovieList({ movieData, location }) {
  return (
    <>
      <List>
        {movieData.map(({ id, original_title }) => {
          return (
            <ListItem key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {original_title}
              </Link>
            </ListItem>
          );
        })}
      </List>
    </>
  );
}

MovieList.propTypes = {
  movieData: PropTypes.array.isRequired,
  location: PropTypes.object.isRequired,
};
