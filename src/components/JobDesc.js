import React, { useState } from "react";
import Banner from "./Banner";
import JobDetail from "./JobDetails";
import { useLocation } from "react-router-dom";

const JobDesc = () => {
  const [isVisible, setIsVisible] = useState(false);

  const showSnackbar = () => {
    setIsVisible(true);
    setTimeout(() => setIsVisible(false), 3000);
  };
  const location = useLocation();
  const filteredApplicants = location.state?.state?.jobdesc;
  console.log(filteredApplicants);
  return (
    <div>
      <Banner
        filteredApplicants={filteredApplicants}
        showSnackbar={showSnackbar}
      />
      <JobDetail
        filteredApplicants={filteredApplicants}
        showSnackbar={showSnackbar}
      />
    </div>
  );
};
export default JobDesc;
