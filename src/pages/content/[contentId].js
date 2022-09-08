import { withAuth } from "../../components/Auth";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { Button } from "@chakra-ui/react";
import { sessionState } from "../../components/SessionState";
import data1 from "../../components/tutorFactorizacion/factorComun/ejercicioFC.json";
import data2 from "../../components/tutorFactorizacion/factorComunCompuesto/ejerciciosFCC.json";
import data3 from "../../components/tutorFactorizacion/diferenciaCuadrados/ejerciciosDC.json";
import data4 from "../../components/tutorFactorizacion/diferenciaSumaCubos/ejerciciosDSC.json";
import data5 from "../../components/tutorFactorizacion/trinomiosCuadraticos/ejerciciosTC.json";

export default withAuth(function Content() {
  const router = useRouter();

  const DynamicTutorEcu = dynamic(() =>
    import("../../components/tutorEcuaciones/Tutor").then((mod) => mod.Tutor)
  );
  const DynamicTutorFac = dynamic(() =>
    import("../../components/tutorFactorizacion/TutorFac").then(
      (mod) => mod.TutorFac
    )
  );

  return (
    <>
      <div>
        {router.query.type == 4 ? (
          <DynamicTutorFac exercise={data5[0]} nextRouter="/" />
        ) : router.query.type == 5 ? (
          "Fracción algebraica"
        ) : router.query.type == 6 ? (
          "Potencias racionales"
        ) : router.query.type == 7 ? (
          "Raiz n-ésima"
        ) : router.query.type == 8 ? (
          "Racionalización"
        ) : router.query.type == 9 ? (
          <DynamicTutorEcu id={0} />
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
        Salir
      </Button>
    </>
  );
});
