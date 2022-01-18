import { useRouter } from 'next/router';
import Box from "@mui/material/Box";
function ValentineDay() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Box sx={{ display: "flex" }}>
      <h1>Kamleshkns {id}</h1>
    </Box>
  );
}

export default ValentineDay;
