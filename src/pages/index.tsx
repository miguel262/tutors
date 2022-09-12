import { TutorFac } from "../components/tutorFactorizacion/tutorFac";
import data from "../components/tutorFactorizacion/trinomiosCuadraticos/ejerciciosTC.json";
import { useAuth } from "../components/Auth";
import { Tutor } from "../components/tutorEcuaciones/Tutor";

//import Start from "./start";
export default function Index() {
  const { user } = useAuth();
  return (
    <>
      {
        user && <Tutor id={0}></Tutor>
        /*<TutorFac exercise={data[0]}></TutorFac>*/
      }
    </>
  );
}
