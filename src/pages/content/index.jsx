import Router from "next/router";
import { useEffect } from "react";

export default function Index() {
  useEffect(() => {
    Router.replace("exercise/solve");
  }, []);

  return <div></div>;
}
