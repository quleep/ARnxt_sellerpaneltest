import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footertest from "./Footertest";
import Banner from "./Banner";
import JobDetail from "./JobDetails";

const JobDesc = () => {
  const location = useLocation();
  const { jobdesc: filteredApplicants } = location.state?.state || {};

  return (
    <div>
      <Navbar />
      <Banner filteredApplicants={filteredApplicants} />
      <JobDetail filteredApplicants={filteredApplicants} />
      
      <Footertest />
    </div>
  );
};

export default JobDesc;
