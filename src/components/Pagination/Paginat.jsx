import { useEffect,useState } from "react";
import ReactPaginate from "react-paginate";
import './_pagination.scss'

export default function Paginat(props){
    const { data } = props;
    const [currentItems,setCurrentItems] = useState([]);
    const [pageCount,setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 1;

    useEffect(() =>{
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(data.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(data.length / itemsPerPage));
    },[itemOffset,itemsPerPage,data]);
  

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % data.length;
        setItemOffset(newOffset);
    };

  return (
    <>
        <div className="images">
            <div className="container">
            <div className="row">
            {
              currentItems &&
              currentItems.map(image =>{
                return(
                    <div className="col-lg-4" key={image.id}>
                        <img width='100%' src={image.photoURL} alt=" " />
                    </div>
                )
            })}
            </div>
            </div>
        </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousClassName="page-num"
        nextLinkClassName="page-num"
        activeClassName="active"
      />
    </>
  );
}