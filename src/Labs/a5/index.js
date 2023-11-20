import WorkingWithArrays from "./WorkingWithArrays";
import EncodingParametersInURLs from "./EncodingParametersInURLs";
import WorkingWithObjects from "./WorkingWithObjects";

function Assignment5() {
  const URL_BASE = process.env.REACT_APP_REGULAR_BASE;
    return (
      <div>
        <h1>Assignment 5</h1>
        <div className="list-group">
          <a href={`${URL_BASE}/a5/welcome`}
             className="list-group-item">
            Welcome
          </a>
        </div>
        {/* <SimpleAPIExamples /> */}
        <EncodingParametersInURLs/>
        <WorkingWithObjects/>
        <WorkingWithArrays/>
      </div>
    );
  }
  export default Assignment5;