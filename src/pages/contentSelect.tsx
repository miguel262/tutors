import { useRouter } from "next/router";
import { CardSelection } from "../components/contentSelectComponents/CardSelection";
import { SimpleGrid, Center } from "@chakra-ui/react";

function ContentSelect() {
  const router = useRouter();
  const topic = router.query; //topico
  // *** Lógica por implementar para obtener 3 ejercicios grupo experimental o 1 ejercicio grupo control ***

  // *** data manual ***
  const control = false; //false = 3 exersices, true = 1 exercise
  const exercises = [
    {
      exercise: "Ejercicio 1",
      msg: "explicación (prerequisitos - más fácil)",
    },
    {
      exercise: "Ejercicio 2",
      msg: "explicación (similar - seguir practicando)",
    },
    {
      exercise: "Ejercicio 3",
      msg: "explicación (más difícil - aprender más)",
    },
  ]; //id ejercicio
  const bestExercise = 1;

  //console.log(query.type);
  return (
    <>
      <p>Selección del contenido del tópico: {topic.type}</p>
      <SimpleGrid
        columns={control ? 1 : 3}
        spacing="8"
        p="10"
        textAlign="center"
        rounded="lg"
      >
        {control ? (
          <Center>
            <CardSelection
              exercise={exercises[bestExercise]?.exercise}
              msg={exercises[bestExercise]?.msg}
              best={false}
            ></CardSelection>
          </Center>
        ) : (
          <>
            {exercises.map(({ exercise, msg }, index) => (
              <CardSelection
                exercise={exercise}
                msg={msg}
                // @ts-ignore
                best={index == bestExercise}
              ></CardSelection>
            ))}
          </>
        )}
      </SimpleGrid>
    </>
  );
}

export default ContentSelect;
