/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Pagination } from "@mui/material";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

const Paginations = ({ numberOfPage, totalProducts }) => {
  const [searchParams] = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const pathname = useLocation().pathname;
  const navigate = useNavigate();
  
  const paramValue = searchParams.get("page")
    ? Number(searchParams.get("page"))
    : 1;

  const onChangeHandler = (event, value) => {
    params.set("page", value.toString());
    navigate(`${pathname}?${params}`);
  };

  return (
    <Pagination
      count={numberOfPage}
      page={paramValue}
      defualtPage={1}
      siblingCount={0}
      boundaryCount={2}
      shape="rounded"
      onChange={onChangeHandler}
    />
  );
};

export default Paginations;
