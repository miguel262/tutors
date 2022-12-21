import { useRouter } from "next/router";
import { CardSelection } from "../components/contentSelectComponents/CardSelection";
import { SimpleGrid, Center, Text } from "@chakra-ui/react";
import QuestionReflection from "../components/contentSelectComponents/QuestionReflection";
import { useState } from "react";
//import { useGQLQuery } from "rq-gql";
//import { gql } from "../graphql";

function ContentSelect() {
  const router = useRouter();
  const topic = router.query; //topico
  // *** Lógica por implementar para obtener 3 ejercicios grupo experimental o 1 ejercicio grupo control ***

  //lógica para obtener los ejercicios
  /*const { data, isLoading } =
    topic.type == "4"
      ? useGQLQuery(
          gql(`
            query ProjectData {
              project(code: "NivPreAlg") {
                content(
                  pagination: { first: 25 }
                  filters: { topics: [3, 5, 6, 7, 8] }
                ) {
                  nodes {
                    json
                  }
                }
              }
            }
          `)
        )
      : useGQLQuery(
          gql(`
            query ProjectData {
              project(code: "NivPreAlg") {
                content(pagination: { first: 25 }, filters: { topics: [4] }) {
                  nodes {
                    json
                  }
                }
              }
            }
          `)
        );

  const listEjercicio = data?.project?.content?.nodes.map(
    (data: { json: any }) => {
      return data.json;
    }
  );

  console.log(listEjercicio);*/

  // *** data manual ***
  const control = true; //false = 3 exersices, true = 1 exercise

  const exercises2 = [
    ///////////// json, sub-topic, msg ///////////////////////////
    {
      exercise: "Opción 1", //listEjercicio[0].itemTitle,
      msg: "MÁS FÁCIL - Para adquidir conocimientos pre-requisito o practicar con menos complejidad",
    },
    {
      exercise: "Opción 2", //listEjercicio[4].itemTitle,
      msg: "SIMILAR -   \n Para adquirir fluidez en las habilidades que estás aprendiendo",
    },
    {
      exercise: "Opción 3", //listEjercicio[6].itemTitle,
      msg: "MÁS DIFÍCIL - Para nuevos aprendizajes o combinar conocimientos",
    },
  ]; //id ejercicio
  const bestExercise = 1;
  const [question, setQuestion] = useState(false);
  //console.log(query.type);
  return (
    <>
      <Text>
        El sistema ha seleccionado el ejercicio más adecuado en base a tu nivel
        de conocimiento en el capítulo.
        {/*Selección del contenido del tópico: {topic.type}*/}
      </Text>
      <SimpleGrid
        columns={control ? 1 : 3}
        spacing="8"
        p="10"
        textAlign="center"
        rounded="lg"
      >
        {question ? (
          <QuestionReflection setQuestion={setQuestion} />
        ) : control /*&& !isLoading*/ ? (
          <Center>
            <CardSelection
              exercise={exercises2[bestExercise]?.exercise}
              msg={exercises2[bestExercise]?.msg}
              best={false}
              key={0}
            ></CardSelection>
          </Center>
        ) : (
          <>
            {exercises2.map(({ exercise, msg }, index) => (
              <CardSelection
                exercise={exercise}
                msg={msg}
                best={index == bestExercise}
                key={index}
              ></CardSelection>
            ))}
          </>
        )}
      </SimpleGrid>
    </>
  );
}

export default ContentSelect;
