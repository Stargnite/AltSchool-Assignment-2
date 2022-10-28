import { useState } from "react";
import useFetch from "../../useFetch";
import "./users.css";

const Users = () => {
  const [page, setPage] = useState(1);
  const { loading, data, error } = useFetch(
    `https://randomuser.me/api/?page=${page}&results=10&seed=abc`
  );

  const pageItems = 10;
  const totalPages = 20;
  const skip = page * pageItems - pageItems;
  const total = data?.results?.length;

  {
    if (loading) {
      return (
        <div className="loading">
          
          <h3>Loading, please wait...</h3>
        </div>
      );
    }
    if (!loading && error) {
      return (
        <div className="error">
          <h3>
            An error occured😥, kindly check internet connection and try
            reloading the page
          </h3>
        </div>
      );
    }
  }

  return (
    <div className="users-content">
      <div className="users-header">
        <h1>The list of senators attending conference</h1>
      </div>
      {data?.results?.map((every, index) => {
        const name = `${every.name.title} ${every.name.first} ${every.name.last}`;
        return (
          <li key={every.name.first} className="listed">
            {index + 1}. {name}
          </li>
        );
      })}
      <div className="btn-container">
        {Array.from({ length: totalPages }, (value, index) => index + 1).map(
          (every) => {
            return (
              <button
                key={every}
                className="num-btn"
                onClick={() => {
                  setPage(every);
                }}
              >
                {every}
              </button>
            );
          }
        )}
      </div>

      <div className="btn-container">
      {
        <button
          className="immidiate-btn"
          onClick={() => {
            setPage((prev) => prev - 1);
          }}
          disabled={page <= 1}
        >
          Prev
        </button>
      }

      {
        <button
          className="immidiate-btn"
          onClick={() => {
            setPage((prev) => prev + 1);
          }}
          disabled={page >= totalPages}
        >
          Next
        </button>
      }
      </div>
    </div>
  );
};

export default Users;

//   return (
//     <div className="App">
//       <h1 className="title">List of Users</h1>
//       {/* TODO: another magic with Array.slice() */}
//       {/* slice(0, 10) */}
//       {/* slice(10, 20) */}
//       {/* slice(20, 30) */}

//       {/* 0, 0 + 5 slice(0, 5)*/}
//       {/* 10, 20 */}
//       {/* 20, 30 */}

//       {/* 0, 1*10 */}
//       {/* 10, 20 */}
//       {/* 20, 30 */}

//       {data?.results
//         // .slice(skip, skip + PER_PAGE)
//         // .slice((page - 1) * PER_PAGE, page * PER_PAGE)
//         .map((each, index) => {
//           const name = `${each.name.title} ${each.name.first} ${each.name.last}`;
//           return (
//             <li key={name.toLowerCase().replaceAll(' ', '')}>{`${
//               index + 1
//             }.${name}`}</li>
//           );
//         })}
//       {
//         <button
//           disabled={page <= 1}
//           onClick={() => setPage((prev) => prev - 1)}
//         >
//           prev
//         </button>
//       }
//       <p className="pagination">
//         Pages: {page} of {pages}
//       </p>
//       {
//         <button
//           disabled={page >= pages}
//         //   aria-disabled={page >= pages}
//           onClick={() => setPage((prev) => prev + 1)}
//         >
//           next
//         </button>
//       }
//       {Array.from({ length: pages }, (value, index) => index + 1).map(
//         (each) => (
//           <button className='num-btn' onClick={() => setPage(each)}>{each}</button>
//         )
//       )}
//     </div>
//   );
// }

// export default Users;
