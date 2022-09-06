//import { Tutor } from "../../components/tutor/Tutor";
import { withAuth } from "../../components/Auth";

import { useRouter } from "next/router";
import { Button } from "@chakra-ui/react";
import { Children } from "react";
export default withAuth(function exercise({ children }) {
  const router = useRouter();
  console.log(children);
  // const idExercise = router.basePath;

  return (
    <>
      <div>
        {/*idExercise && <Tutor id={idExercise} />*/}
        {router.query.type}
      </div>
      <Button
        onClick={() => router.push("/contentSelect?type=" + router.query.type)}
      >
        Siguiente
      </Button>
      {children}
    </>
  );
});
