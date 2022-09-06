import Router from "next/router";
import { useEffect } from "react";

export default function index() {
  useEffect(() => {
    Router.replace("exercise/solve");
  }, []);

  return <div></div>;
}
