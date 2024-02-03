import React, { Suspense, useState, useEffect } from "react";
import axios from "axios";

const SearchInput = React.lazy(() => import("./components/SearchInput"));
const LoadingText = React.lazy(() => import("./components/LoadingText"));
const DataTable = React.lazy(() => import("./components/DataTable"));
const PaginationButtons = React.lazy(() =>
  import("./components/PaginationButtons")
);
const Chart = React.lazy(() => import("./components/Chart"));

const App = () => {
  const [data, setData] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `https://dummyjson.com/users/search?q=${searchTerm}&skip=${
            (currentPage - 1) * 10
          }&limit=10`
        );
        setData(response.data.users);
        if (currentPage === 1) {
          setSelectedIds(
            response.data.users.slice(0, 5).map((user) => user.id)
          );
        }
      } catch (error) {
        console.error("Failed to fetch data:", error);
        setData([]);
      } finally {
        setIsLoading(false);
      }
    };

    const timeoutId = setTimeout(() => {
      fetchData();
    }, 500); // Debounce the API call

    return () => clearTimeout(timeoutId);
  }, [currentPage, searchTerm]);

  const handleCheckboxChange = (checked, id) => {
    setSelectedIds((prev) =>
      checked ? [...prev, id] : prev.filter((userId) => userId !== id)
    );
  };

  return (
    <div>
      <Suspense fallback={<div>Loading Search...</div>}>
        <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </Suspense>

      {isLoading ? (
        <Suspense fallback={<div>Loading...</div>}>
          <LoadingText />
        </Suspense>
      ) : (
        <Suspense fallback={<div>Loading Data...</div>}>
          <DataTable
            data={data}
            selectedIds={selectedIds}
            handleCheckboxChange={handleCheckboxChange}
          />
          <PaginationButtons
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
          <Chart data={data} selectedIds={selectedIds} />
        </Suspense>
      )}
    </div>
  );
};

export default App;
