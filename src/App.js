import axios from "axios";
import { useState } from "react";
import "./App.css";
const App = () => {
  const [state, setState] = useState({
    jobdetails: "",
    jobdescription: "",
    experience: "0",
    location: "",
    category: "softwaredeveloper",
    functionalarea: "banglore",
    graduatingyear: "2020",
    tags: "",
  });
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecord = {
      ...state,
      location: state.location.split(" ").filter((ele) => ele.length > 0),
    };
    console.log(newRecord);
    axios.post("/v1jobs/job", newRecord);
    setState({
      jobdetails: "",
      jobdescription: "",
      experience: "0",
      location: "",
      category: "softwaredeveloper",
      functionalarea: "banglore",
      graduatingyear: "2020",
      tags: "",
    });
  };

  return (
    <>
      <h1>Post Job</h1>
      <form action="" onSubmit={handleSubmit}>
        <h2>Basic Details</h2>
        <hr />
        <div>
          <label htmlFor="jobdetails">Job Title*</label>
          <input
            required={true}
            type="text"
            autoComplete="off"
            placeholder="Write a title that appropriately describes this job"
            value={state.jobdetails}
            onChange={handleInput}
            name="jobdetails"
            id="jobdetails"
          />
        </div>
        <div>
          <label htmlFor="location">Location*</label>
          <input
            required={true}
            type="text"
            autoComplete="off"
            placeholder="+Add Location"
            value={state.location}
            onChange={handleInput}
            name="location"
            id="location"
          />
        </div>
        <div>
          <label htmlFor="experience">Years of Experience*</label>
          <select name="experience" onChange={handleInput} required={true}>
            <option value={0}>0</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={7}>7</option>
            <option value={8}>8</option>
            <option value={9}>9</option>
            <option value={10}>10</option>
          </select>
        </div>
        <div>
          <label htmlFor="jobdescription">Job Description*</label>
          <textarea
            rows={6}
            required={true}
            type="text"
            autoComplete="off"
            value={state.jobdescription}
            onChange={handleInput}
            placeholder="Describe the role and responsibilities,skills required for the job and help the candidates understand the role better"
            name="jobdescription"
            id="jobdescription"
          />
        </div>
        <h2>Targeting</h2>
        <hr />
        <div>
          <label htmlFor="category">Category*</label>
          <select name="category" onChange={handleInput} required={true}>
            <option value={"softwaredevelopment"}>Software Development</option>
            <option value={"dataanalyst"}>Data Analyst</option>
            <option value={"hr"}>HR</option>
            <option value={"tester"}>Tester</option>
            <option value={"intern"}>Intern</option>
          </select>
        </div>
        <div>
          <label htmlFor="functionalarea">Functional Area*</label>
          <select name="functionalarea" onChange={handleInput} required={true}>
            <option value={"bangalore"}>Bangalore</option>
            <option value={"mumbai"}>Mumbai</option>
          </select>
        </div>
        <div>
          <label htmlFor="graduatingyear">Graduating Year*</label>
          <select name="graduatingyear" onChange={handleInput} required={true}>
            <option value={2020}>2020</option>
            <option value={2021}>2021</option>
            <option value={2022}>2022</option>
            <option value={2023}>2023</option>
            <option value={2024}>2024</option>
            <option value={2025}>2025</option>
          </select>
        </div>

        <div>
          <label htmlFor="tags">Tags*</label>
          <input
            required={true}
            type="text"
            autoComplete="off"
            placeholder="+Add Tags"
            value={state.tags}
            onChange={handleInput}
            name="tags"
            id="tags"
          />
        </div>
        <button type="submit">Post Job</button>
      </form>
    </>
  );
};

export default App;
