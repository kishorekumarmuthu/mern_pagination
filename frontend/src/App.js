import './App.css';
import {useState, useEffect} from "react"
import axios from "axios"
import ReactPaginate from 'react-paginate';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {

  const [data, setData] = useState([])

  function Items({ currentItems }) {
    return (
      <>
      <div className='container'>
        <table className="table table-striped">
          <thead className='thead-light'>
            <tr>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
            </tr>
          </thead>
          <tbody>
            {currentItems &&
              currentItems.map((item, index) => (
                <tr>
                  <td>{item.firstName}</td>
                  <td>{item.lastName}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }

  function PaginatedItems({ itemsPerPage }) {
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);
  
    // Simulate fetching items from another resources.
    // (This could be items from props; or items loaded in a local state
    // from an API endpoint with useEffect and useState)
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = data.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(data.length / itemsPerPage);
  
    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % data.length;
      console.log(
        `User requested page number ${event.selected}, which is offset ${newOffset}`
      );
      setItemOffset(newOffset);
    };
    return (
      <>
        <Items currentItems={currentItems} />
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          marginPagesDisplayed={2}
          containerClassName="pagination justify-content-center"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          activeClassName="active"
        />
      </>
    );
  }

  useEffect(()=>{
    axios.get("http://localhost:5551/api/doctors", {}).then((response)=>{
      setData(response.data.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  }, [])

  return (
    <div className="App">
      <h1>Doctors List</h1>
      <header className="App-header">
      <PaginatedItems itemsPerPage={4} />
      </header>
    </div>
  );
}

export default App;
