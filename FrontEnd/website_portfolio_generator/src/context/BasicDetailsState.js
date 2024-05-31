import { useEffect, useState } from "react";
import BasicDetailsContext from "./BasicDetailsContext";
import UserBasicDetailService from "../service/UserBasicDetailService";
import { Box, CircularProgress } from "@mui/material";
import { doLogOut, getLoggedInUser } from "../auth/AuthenticatioHandler";

const BasicDetailsState = (props) => {
  const [basicDetails, setBasicDetails] = useState({
    id:0,
    name: '',
    email: '',
    mobile: '',
    softSkills: '',
    technicalSkills: '',
    address: '',
    tagLine: '',
    summary: '',
  });

  const [loading, setLoading] = useState(true);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setBasicDetails((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  useEffect(() => {
    const fetchBasicDetails = async () => {
      try {
        const response = await UserBasicDetailService.getAllUserBasicDetails();
        const basicData = response.data;
        if (basicData && basicData.length > 0) {
          setBasicDetails(basicData[0]);
        }
      } catch (error) {
        if (error.response && error.response.status === 401) {
          doLogOut();
        } else {
          console.log("Error while fetching basic details: ", error);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchBasicDetails();
  }, []);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <BasicDetailsContext.Provider value={{ basicDetails, handleChange }}>
      {props.children}
    </BasicDetailsContext.Provider>
  );
}

export default BasicDetailsState;
