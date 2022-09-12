import { TutorFac } from "../components/tutorFactorizacion/tutorFac";
import data from "../components/tutorFactorizacion/trinomiosCuadraticos/ejerciciosTC.json";
import { useAuth } from "../components/Auth";
//import { Tutor } from "../components/tutorEcuaciones/Tutor";

//import Start from "./start";
export default function Index() {
  const { user } = useAuth();
  return (
    <>
      {user && (
        //con el JSON del ejercicio
        <TutorFac exercise={data[0]}></TutorFac>
        //con identificador
        /* <Tutor id={0}></Tutor> */
      )}
    </>
  );
}
