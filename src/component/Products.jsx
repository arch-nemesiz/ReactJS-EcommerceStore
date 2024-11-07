import React, { useState, useEffect } from 'react';
import Skeleton from "react-loading-skeleton";
import './product.css';

export default function Products() {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState(""); // state for the search input

    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
            }

            return () => {
                componentMounted = false;
            }
        }

        getProducts();
    }, []);

    const Loading = () => {
        return (
            <>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
            </>
        )
    }

    // Function to handle the search and filter products by title
    const handleSearch = (e) => {
        setSearch(e.target.value);

        // Filter products by title based on search input
        const filtered = data.filter((product) =>
            product.title.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setFilter(filtered);
    }

    const ShowProducts = () => {
        return (
            <>
                {filter.map((product) => {
                    return (
                        <div className="col-md-3 mb-4 py-4" id="p" key={product.id}>
                            <div className="card h-100 p-4">
                                <img src={product.image} className="card-img-top" alt={product.title} height="275px" />
                                <div className="card-body">
                                    <h5 className="card-title mb-0">{product.title.substring(0, 20)}...</h5>
                                    <p className="card-text lead">${product.price}</p>
                                    <button className="btn btn-dark">ENQUIRE</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </>
        )
    }

    return (
        <div className="home">
            <div>
                {/* Search Box */}
                <div className="row mb-4">
                    <div className="col-md-12 d-flex justify-content-end">
                        <div className="d-flex">
                            <input
                                type="text"
                                placeholder="Search "
                                value={search}
                                onChange={handleSearch}
                                className="form-control me-2" // Add margin right for spacing
                            />
                            <button
                                onClick={() => handleSearch({ target: { value: search } })}
                                className="btn"
                                style={{ backgroundColor: 'black', borderColor: 'black', color: 'white' }}
                            >
                                Search
                            </button>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {loading ? <Loading /> : <ShowProducts />}
                </div>
            </div>
        </div>
    )
}
