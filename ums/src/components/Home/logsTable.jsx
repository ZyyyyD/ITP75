// utils
import "bootstrap/dist/css/bootstrap.min.css";
// import PropTypes from "prop-types";
import React, { useState } from "react";
//data
import LogData from "../Data/logs.json";

// controls
import PaginationControl from "../controls/paginationControl";
import SearchControl from "../controls/searchControl";
import SortControl from "../controls/sortControl";
import TableControl from "../controls/tableControl";

const LogsTable = ({
}) => {
    // states
    const [logs, setLogs] = useState(LogData);
    const [processedLogs, setProcessedLogs] = useState(LogData);
    const [moved, setMoved] = useState(true);

    // const rerender = React.useReducer(() => ({}), {})[1]

    const headers = ["#", "Description", "Time Created", "Date Created", "User", "Actions"];

    const reloadLogs = (data) => {
        // rerender();
        setLogs(data);
    }

    const processData = (data) => {
        setMoved(!moved);
        // rerender();
        setLogs(data.slice(0, 5));
        setProcessedLogs(data);
    }

    // useEffect(() => {
    //     // GET USER QUERY HERE THEN STORE TO LOGS STATE
    // }, [])

return (                                                                
    // <div>
    <div className="content-wrapper">
        <div className="wrapper">
            <h2>Logs</h2>
            <div className="d-flex justify-content-end align-items-center mb-2">
                <SortControl name={"sort-by"} items={processedLogs} onSuccess={processData}/>
                <SearchControl name="`search-name" items={LogData} onSuccess={processData}/>
            </div>
            
            <TableControl headers={headers} items={logs} allItems={LogData} onSuccess={processData}/>
            <PaginationControl items={processedLogs} onSuccess={reloadLogs} moved={moved}/>
        </div>
    </div>
    // </div>
  )}

export default LogsTable;

// LogsTable.propTypes = {

// }