export const SearchMovie = ({ onSubmit }) => {
  const handleSubmit = event => {
    event.preventDefault();
    const { value } = event.target.elements.query;
    onSubmit(value);
    event.target.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="query" required />
      <button type="submit">Search Movie</button>
    </form>
  );
};
