import { useNavigate } from "react-router-dom";
import { Button, Box } from "@chakra-ui/react";
import "./index.css";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Box alignContent={"center"} minHeight={"75vh"}>
      <div className="NotFound">
        <h1 className="text-3xl text-center font-bold my-5">
          Sorry, the page you are looking for does not exist.
        </h1>
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <Button
            className="justify-self-center"
            colorScheme="blue"
            onClick={() => navigate("/")}
          >
            Go back to the main page
          </Button>
        </Box>
      </div>
    </Box>
  );
};

export default NotFound;
