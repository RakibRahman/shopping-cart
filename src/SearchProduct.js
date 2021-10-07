import { useEffect, useRef } from "react";
function SearchProduct({ search, setSearch }) {
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <form onSubmit={(e) => e.preventDefault()} style={{ marginBottom: "10px" }}>
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Search Products..."
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        ref={inputRef}
      />
    </form>
  );
}

export default SearchProduct;
