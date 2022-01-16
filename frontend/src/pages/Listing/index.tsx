import axios from "axios";
import Moviecard from "components/MovieCard";
import Pagination from "components/Pagination";
import { BASE_URL } from "utils/resquests";

function Listing() {

  axios.get(`${BASE_URL}/movies?size=12&page=0`)
  .then(res => console.log(res.data))
  .catch(err => console.log(err))

  return (
    <>
      <Pagination />
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <Moviecard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <Moviecard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <Moviecard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <Moviecard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <Moviecard />
          </div>
        </div>
      </div>
    </>
  );
}

export default Listing;
