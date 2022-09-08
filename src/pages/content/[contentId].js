//import { Tutor } from "../../components/tutor/Tutor";
import { withAuth } from "../../components/Auth";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { Button } from "@chakra-ui/react";
import { Children } from "react";
import { sessionState } from "../../components/SessionState";

export default withAuth(function Content() {
  const router = useRouter();
  const DynamicTutorEcu = dynamic(() =>
    import("../../components/tutorEcuaciones/Tutor").then((mod) => mod.Tutor)
  );
  // const idExercise = router.basePath;
  //console.log(sessionState.currentContent);
  return (
    <>
      <div>
        {/*idExercise && <Tutor id={idExercise} />*/}
        {router.query.type == 4 ? (
          "Factorización"
        ) : router.query.type == 5 ? (
          "Fracción algebraica"
        ) : router.query.type == 6 ? (
          "Potencias racionales"
        ) : router.query.type == 7 ? (
          "Raiz n-ésima"
        ) : router.query.type == 8 ? (
          "Racionalización"
        ) : router.query.type == 9 ? (
          <DynamicTutorEcu id={1} />
        ) : router.query.type == 10 ? (
          <DynamicTutorEcu id={6} />
        ) : router.query.type == 11 ? (
          "Triángulos"
        ) : router.query.type == 12 ? (
          "Teorema de Thales"
        ) : (
          router.query.type == 13 && "Teorema de Pitágoras"
        )}
      </div>
      <Button
        onClick={() => router.push("/contentSelect?type=" + router.query.type)}
      >
        Siguiente
      </Button>
    </>
  );
});
