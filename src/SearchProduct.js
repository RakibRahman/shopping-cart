function SearchProduct({ search, setSearch }) {
  return (
    <form onSubmit={(e) => e.preventDefault()} style={{ marginBottom: "10px" }}>
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Search Products..."
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
    </form>
  );
}

export default SearchProduct;
