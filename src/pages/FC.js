import FC from "../tutors/factorizacion/factorComun/FactorComun";
import { Stack } from "@chakra-ui/react";
import { useGQLQuery } from "rq-gql";
import { gql } from "../graphql";
import { Loading } from "../tutors/factorizacion/tools/Spinner";
//import { useAction } from "../utils/action";
//import { useEffect } from "react";

function IndexPage() {
  const { data, isLoading } = useGQLQuery(
    gql(/* GraphQL */ `
      query ProjectData {
        project(code: "factorize_tutor") {
          content(pagination: { first: 25 }, filters: { topics: 3 }) {
            nodes {
              json
            }
          }
        }
      }
    `)
  );

  /*const action = useAction();
    useEffect(() => {
      action({
        verbName: "loadContent",
        contentID: exercise.itemId, // leer contentId del JSON
      });
    }, []);*/

  return (
    <Stack width="100%" padding="1em">
      {!isLoading ? (
        <FC
          exercise={data?.project.content.nodes[0].json}
          nextRouter="/FC2"
        ></FC>
      ) : (
        <Loading></Loading>
      )}
    </Stack>
  );
}

export default IndexPage;
