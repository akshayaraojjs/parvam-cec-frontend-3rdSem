import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [displayed, setDisplayed] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [page, setPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setProducts(res.data);
      setDisplayed(res.data);
    });
  }, []);

  useEffect(() => {
    let filtered = [...products];
    if (search) filtered = filtered.filter(p => p.title.toLowerCase().includes(search.toLowerCase()));
    if (sort === "asc") filtered.sort((a, b) => a.price - b.price);
    if (sort === "desc") filtered.sort((a, b) => b.price - a.price);
    setDisplayed(filtered);
  }, [search, sort, products]);

  const paginated = displayed.slice((page - 1) * itemsPerPage, page * itemsPerPage);
  const totalPages = Math.ceil(displayed.length / itemsPerPage);

  return (
    <div>
      <h2 className="text-center mb-4">Products</h2>
      <div className="d-flex justify-content-between mb-3">
        <input
          type="text"
          placeholder="Search..."
          className="form-control w-25"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select className="form-select w-25" onChange={(e) => setSort(e.target.value)}>
          <option value="">Sort by</option>
          <option value="asc">Price: Low → High</option>
          <option value="desc">Price: High → Low</option>
        </select>
      </div>

      <div className="row g-3">
        {paginated.map((p) => (
          <div className="col-md-4" key={p.id}>
            <ProductCard product={p} />
          </div>
        ))}
      </div>

      <div className="d-flex justify-content-center mt-4">
        <button className="btn btn-secondary me-2" disabled={page === 1} onClick={() => setPage(page - 1)}>Prev</button>
        <span className="align-self-center">Page {page} of {totalPages}</span>
        <button className="btn btn-secondary ms-2" disabled={page === totalPages} onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </div>
  );
}