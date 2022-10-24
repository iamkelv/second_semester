import { useState, useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/Nav";
import { Pagination } from "./components/Pagination";
import { User } from "./components/User";
import { UserDetail } from "./components/UserDetail";
import { API } from "./config/API";
import { context } from "./context/UsersContext";
import { ErroBound } from "./hooks/ErroBound";
import { useFetch } from "./hooks/https";
import { MenuRoutes } from "./routes/MenuRoutes";

export const Users = () => {
  const userData = useContext(context);
  const kelv = userData.userData({
    name: "data.name",
    email: "data.email",
    phone: "data.phone",
    gender: "data.gender",
    pictures: { picture: "data.medium" },
  });
  console.log(kelv);

  const { data, loading, error } = useFetch(API, "Error getting users");
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage, setDataPerPage] = useState(2);
  // const [nextpage, setNextpage] = useState(currentPage);
  const indexOfLastUser = currentPage * dataPerPage;
  const indexOfFistData = indexOfLastUser - dataPerPage;
  const currentData = data.slice(indexOfFistData, indexOfLastUser);

  const paginated = (data) => {
    setCurrentPage(data);
    console.log(currentPage);
  };
  const nextPage = () => {
    console.log(currentPage);
    return setCurrentPage((prev) => prev + 1);
  };
  const prevPage = () => {
    console.log(currentData);
    setCurrentPage((prev) => prev - 1);
  };
  return (
    <div>
      {error && <ErroBound err={error} />}
      {!error && (
        <>
          <User data={currentData} isLoading={loading} />
          <button onClick={() => nextPage()}>Prev.</button>
          <Pagination
            dataPerPage={dataPerPage}
            pageNumber={paginated}
            paginated={paginated}
            data={currentData}
            totalData={data.length}
          />
          <button onClick={() => prevPage()}>Next</button>
        </>
      )}
    </div>
  );
};
const Invoices = () => {
  return <div>Invoices</div>;
};
const Invoice = () => {
  return <div>Invoice</div>;
};

const SentInvoices = () => {
  return <div>Invoice</div>;
};

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <MenuRoutes /> */}
      <Routes>
        <Route path="invoices" element={<Invoices />}>
          <Route path=":invoiceId" element={<Invoice />} />
          <Route path="sent" element={<SentInvoices />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
