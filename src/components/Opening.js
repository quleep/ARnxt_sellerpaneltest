import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Next from "../careerimages/next.svg";

const Openings = () => {
  const [activeTab, setActiveTab] = useState("Sales");
  const [applicants, setApplicants] = useState([]);
  const [filteredApplicants, setFilteredApplicants] = useState([]);
  const [filteredApplicants1, setFilteredApplicants1] = useState([]);
  const [filteredApplicants2, setFilteredApplicants2] = useState([]);
  const [filteredApplicants3, setFilteredApplicants3] = useState([]);
  const [filteredApplicants4, setFilteredApplicants4] = useState([]);
  const [filteredApplicants5, setFilteredApplicants5] = useState([]);
  const [filteredApplicants6, setFilteredApplicants6] = useState([]);

  const [filteredApplicants7, setFilteredApplicants7] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();
  const openCity = (cityName) => {
    setActiveTab(cityName);
  };
  const nextPage = (id, jobdesc) => {
    history.push(`/career/${id}`, { state: { jobdesc } });
    console.log(jobdesc);
  };
  useEffect(() => {
    const fetchJobPostings = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          "https://0mbq9runce.execute-api.ap-south-1.amazonaws.com/prod/jobposts"
        );
        const data = await response.json();
        console.log(data);
        setApplicants(data.applicants);
        const filtered1 = data.applicants.filter(
          (applicant) => applicant.department === "Technology & IT"
        );
        setFilteredApplicants1(filtered1);
        const filtered = data.applicants.filter(
          (applicant) => applicant.department === "Operations"
        );
        setFilteredApplicants(filtered);

        const filtered2 = data.applicants.filter(
          (applicant) => applicant.department === "Product Marketing"
        );
        setFilteredApplicants2(filtered2);
        const filtered5 = data.applicants.filter(
          (applicant) => applicant.department === "Sales"
        );
        setFilteredApplicants5(filtered5);
        const filtered4 = data.applicants.filter(
          (applicant) => applicant.department === "Finance"
        );
        setFilteredApplicants4(filtered4);
        const filtered3 = data.applicants.filter(
          (applicant) => applicant.department === "Legal"
        );
        setFilteredApplicants3(filtered3);
        const filtered6 = data.applicants.filter(
          (applicant) => applicant.department === "HR & Admin"
        );
        setFilteredApplicants6(filtered6);
        const filtered7 = data.applicants.filter(
          (applicant) => applicant.department === "Customer Support"
        );
        setFilteredApplicants7(filtered7);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchJobPostings();
  }, []);

  return (
    <div className="openings-container">
      <div className="title">
        <div className="come-join-us">Join Us</div>
        <div className="career-description">
          We’re always looking for creative, talented self-starters to join the
          Arnxt family. Check out our open roles below and fill out an
          application.
        </div>
      </div>

      <div className="tabs-container">
        <div className="tab">
          <button
            className={
              activeTab === "Technology & IT" ? "tablinks active" : "tablinks"
            }
            onClick={() => openCity("Technology & IT")}>
            Technology & IT<sup>{filteredApplicants1.length}</sup>
          </button>
          <button
            className={
              activeTab === "Operations" ? "tablinks active" : "tablinks"
            }
            onClick={() => openCity("Operations")}>
            Operations<sup>{filteredApplicants.length}</sup>
          </button>
          <button
            className={
              activeTab === "Product Marketing" ? "tablinks active" : "tablinks"
            }
            onClick={() => openCity("Product Marketing")}>
            Product Marketing<sup>{filteredApplicants2.length}</sup>
          </button>
          <button
            className={activeTab === "Sales" ? "tablinks active" : "tablinks"}
            onClick={() => openCity("Sales")}>
            Sales<sup>{filteredApplicants5.length}</sup>
          </button>
          <button
            className={activeTab === "Finance" ? "tablinks active" : "tablinks"}
            onClick={() => openCity("Finance")}>
            Finance<sup>{filteredApplicants4.length}</sup>
          </button>
          <button
            className={activeTab === "Legal" ? "tablinks active" : "tablinks"}
            onClick={() => openCity("Legal")}>
            Legal<sup>{filteredApplicants3.length}</sup>
          </button>
          <button
            className={
              activeTab === "HR & Admin" ? "tablinks active" : "tablinks"
            }
            onClick={() => openCity("HR & Admin")}>
            HR & Admin<sup>{filteredApplicants6.length}</sup>
          </button>
          <button
            className={
              activeTab === "Customer Support" ? "tablinks active" : "tablinks"
            }
            onClick={() => openCity("Customer Support")}>
            Customer Support<sup>{filteredApplicants6.length}</sup>
          </button>
        </div>
        <div className="select-dropdown">
          <div style={{ color: "white" }}>Search By Department:</div>
          <select
            value={activeTab}
            onChange={(e) => setActiveTab(e.target.value)}>
            <option value="Technology & IT">Technology & IT</option>
            <option value="Operations">Operations</option>
            <option value="Product Marketing">Product Marketing</option>
            <option value="Sales">Sales</option>
            <option value="Finance">Finance</option>
            <option value="Legal">Legal</option>
            <option value="HR & Admin">HR & Admin</option>
            <option value="Customer Support">Customer Support</option>
          </select>
        </div>

        <div
          id="Technology & IT"
          className={
            activeTab === "Technology & IT" ? "tabcontent" : "tabcontent hidden"
          }>
          {isLoading ? (
            <div className="loading-text" style={{ color: "white" }}>
              Loading...
            </div>
          ) : (
            filteredApplicants1.map((applicant) => {
              return (
                <div
                  className="job-container"
                  onClick={() => nextPage(applicant.id, applicant)}>
                  <div className="job-name">{applicant.role}</div>
                  <div className="experience">
                    <div className="experience-text">Experience</div>
                    <div className="experience-year">
                      {applicant.experience}
                    </div>
                  </div>
                  <div className="deadline">
                    <div className="deadline-text">Deadline</div>
                    <div className="deadline-year">
                      {new Date(applicant.deadline * 1000).toLocaleDateString(
                        "en-GB"
                      )}
                    </div>
                  </div>
                  <div className="next-vector">
                    <img src={Next} alt="Your SVG" className="next-svg" />
                  </div>
                </div>
              );
            })
          )}
        </div>

        <div
          id="Operations"
          className={
            activeTab === "Operations" ? "tabcontent" : "tabcontent hidden"
          }>
          {isLoading ? (
            <div className="loading-text">Loading...</div>
          ) : (
            filteredApplicants.map((applicant) => {
              return (
                <div
                  className="job-container"
                  onClick={() => nextPage(applicant.id, applicant)}>
                  <div className="job-name">{applicant.role}</div>
                  <div className="experience">
                    <div className="experience-text">Experience</div>
                    <div className="experience-year">
                      {applicant.experience}
                    </div>
                  </div>
                  <div className="deadline">
                    <div className="deadline-text">Deadline</div>
                    <div className="deadline-year">
                      {new Date(applicant.deadline * 1000).toLocaleDateString(
                        "en-GB"
                      )}
                    </div>
                  </div>
                  <div className="next-vector">
                    <img src={Next} alt="Your SVG" className="next-svg" />
                  </div>
                </div>
              );
            })
          )}
        </div>

        <div
          id="Product Marketing"
          className={
            activeTab === "Product Marketing"
              ? "tabcontent"
              : "tabcontent hidden"
          }>
          {isLoading ? (
            <div className="loading-text">Loading...</div>
          ) : (
            filteredApplicants2.map((applicant) => {
              return (
                <div
                  className="job-container"
                  onClick={() => nextPage(applicant.id, applicant)}>
                  <div className="job-name">{applicant.role}</div>
                  <div className="experience">
                    <div className="experience-text">Experience</div>
                    <div className="experience-year">
                      {applicant.experience}
                    </div>
                  </div>
                  <div className="deadline">
                    <div className="deadline-text">Deadline</div>
                    <div className="deadline-year">
                      {new Date(applicant.deadline * 1000).toLocaleDateString(
                        "en-GB"
                      )}
                    </div>
                  </div>
                  <div className="next-vector">
                    <img src={Next} alt="Your SVG" className="next-svg" />
                  </div>
                </div>
              );
            })
          )}
        </div>
        <div
          id="Sales"
          className={
            activeTab === "Sales" ? "tabcontent" : "tabcontent hidden"
          }>
          {isLoading ? (
            <div className="loading-text">Loading...</div>
          ) : (
            filteredApplicants5.map((applicant) => {
              return (
                <div
                  className="job-container"
                  onClick={() => nextPage(applicant.id, applicant)}>
                  <div className="job-name">{applicant.role}</div>
                  <div className="experience">
                    <div className="experience-text">Experience</div>
                    <div className="experience-year">
                      {applicant.experience}
                    </div>
                  </div>
                  <div className="deadline">
                    <div className="deadline-text">Deadline</div>
                    <div className="deadline-year">
                      {new Date(applicant.deadline * 1000).toLocaleDateString(
                        "en-GB"
                      )}
                    </div>
                  </div>
                  <div className="next-vector">
                    <img src={Next} alt="Your SVG" className="next-svg" />
                  </div>
                </div>
              );
            })
          )}
        </div>
        <div
          id="Finance"
          className={
            activeTab === "Finance" ? "tabcontent" : "tabcontent hidden"
          }>
          {isLoading ? (
            <div className="loading-text">Loading...</div>
          ) : (
            filteredApplicants4.map((applicant) => {
              return (
                <div
                  className="job-container"
                  onClick={() => nextPage(applicant.id, applicant)}>
                  <div className="job-name">{applicant.role}</div>
                  <div className="experience">
                    <div className="experience-text">Experience</div>
                    <div className="experience-year">
                      {applicant.experience}
                    </div>
                  </div>
                  <div className="deadline">
                    <div className="deadline-text">Deadline</div>
                    <div className="deadline-year">
                      {new Date(applicant.deadline * 1000).toLocaleDateString(
                        "en-GB"
                      )}
                    </div>
                  </div>
                  <div className="next-vector">
                    <img src={Next} alt="Your SVG" className="next-svg" />
                  </div>
                </div>
              );
            })
          )}
        </div>
        <div
          id="Legal"
          className={
            activeTab === "Legal" ? "tabcontent" : "tabcontent hidden"
          }>
          {isLoading ? (
            <div className="loading-text">Loading...</div>
          ) : (
            filteredApplicants3.map((applicant) => {
              return (
                <div
                  className="job-container"
                  onClick={() => nextPage(applicant.id, applicant)}>
                  <div className="job-name">{applicant.role}</div>
                  <div className="experience">
                    <div className="experience-text">Experience</div>
                    <div className="experience-year">
                      {applicant.experience}
                    </div>
                  </div>
                  <div className="deadline">
                    <div className="deadline-text">Deadline</div>
                    <div className="deadline-year">
                      {new Date(applicant.deadline * 1000).toLocaleDateString(
                        "en-GB"
                      )}
                    </div>
                  </div>
                  <div className="next-vector">
                    <img src={Next} alt="Your SVG" className="next-svg" />
                  </div>
                </div>
              );
            })
          )}
        </div>
        <div
          id="HR & Admin"
          className={
            activeTab === "HR & Admin" ? "tabcontent" : "tabcontent hidden"
          }>
          {isLoading ? (
            <div className="loading-text">Loading...</div>
          ) : (
            filteredApplicants6.map((applicant) => {
              return (
                <div
                  className="job-container"
                  onClick={() => nextPage(applicant.id, applicant)}>
                  <div className="job-name">{applicant.role}</div>
                  <div className="experience">
                    <div className="experience-text">Experience</div>
                    <div className="experience-year">
                      {applicant.experience}
                    </div>
                  </div>
                  <div className="deadline">
                    <div className="deadline-text">Deadline</div>
                    <div className="deadline-year">
                      {new Date(applicant.deadline * 1000).toLocaleDateString(
                        "en-GB"
                      )}
                    </div>
                  </div>
                  <div className="next-vector">
                    <img src={Next} alt="Your SVG" className="next-svg" />
                  </div>
                </div>
              );
            })
          )}
        </div>
        <div
          id="Customer Support"
          className={
            activeTab === "Customer Support"
              ? "tabcontent"
              : "tabcontent hidden"
          }>
          {isLoading ? (
            <div className="loading-text">Loading...</div>
          ) : (
            filteredApplicants7.map((applicant) => {
              return (
                <div
                  className="job-container"
                  onClick={() => nextPage(applicant.id, applicant)}>
                  <div className="job-name">{applicant.role}</div>
                  <div className="experience">
                    <div className="experience-text">Experience</div>
                    <div className="experience-year">
                      {applicant.experience}
                    </div>
                  </div>
                  <div className="deadline">
                    <div className="deadline-text">Deadline</div>
                    <div className="deadline-year">
                      {new Date(applicant.deadline * 1000).toLocaleDateString(
                        "en-GB"
                      )}
                    </div>
                  </div>
                  <div className="next-vector">
                    <img src={Next} alt="Your SVG" className="next-svg" />
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Openings;
