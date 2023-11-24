import PropTypes from "prop-types";
import React, { useEffect, useState } from 'react';
import {
    AiOutlineCaretLeft,
    AiOutlineCaretRight,
} from "react-icons/ai";

const PaginationControl = ({
    items,
    onSuccess,
    moved,
}) => {

    const [tempCurrentPage, setTempCurrentPage] = useState(1);
    const recordsPerPage = 5;
    const npage = Math.ceil(items.length / recordsPerPage);
    const numbers = [...Array(npage + 1).keys()].slice(1);
    
    useEffect(() => {
        onSuccess(handleLoad(items, 1));
    }, [])

    useEffect(() => {
        setTempCurrentPage(1);
    }, [moved])

    const handleLoad = (list, pagenumber) => {
        const last = pagenumber * recordsPerPage;
        const first = last - recordsPerPage;
        return list.slice(first, last);
    }

    function prevPage() {
        if(tempCurrentPage !== 1) {
            setTempCurrentPage(tempCurrentPage - 1);
            onSuccess(handleLoad(items, tempCurrentPage - 1));
        }
    }
    function changeCPage(id) {
        setTempCurrentPage(id);
        onSuccess(handleLoad(items, id));
    }

    function nextPage() {
        if (tempCurrentPage < npage) {
            setTempCurrentPage(tempCurrentPage + 1);
            onSuccess(handleLoad(items, tempCurrentPage + 1));
        }
    }
    
    return(
        <>
            <div className="d-block">
            <nav className="d-flex justify-content-end align-items-center mb-2 ">
                <ul className="pagination">
                <li className="page-item">
                    <a href="#" className="page-link" onClick={prevPage}>
                    <AiOutlineCaretLeft />
                    </a>
                </li>
                {
                    numbers.map((n, i) => {
                        const name = tempCurrentPage === n ? "page-link active" : "page-link";
                    return (
                        // {console.log(n)}
                    <li className="page-item" key={n}>
                        <a href="#" className={name} onClick={() => changeCPage(n)}>{n}</a>
                    </li>
                    )})
                }
                <li className="page-item">
                    <a href="#" className="page-link" onClick={nextPage}>
                    <AiOutlineCaretRight />
                    </a>
                </li>
                </ul>
            </nav>
            </div>
        </>
    )
}

export default PaginationControl;

PaginationControl.prototype = {
    items: PropTypes.array,
    moved: PropTypes.bool,
    onSuccess: PropTypes.func,
}