import dynamic from "next/dynamic";

export const Plain = ({ steps }) => {
  const Lvltutor = dynamic(
    () => {
      return import("./Tools/Solver2");
    },
    { ssr: false }
  );

  return (
    <>
      {steps?.type == "lvltutor" ? (
        <Lvltutor steps={steps} nextRouter="/" />
      ) : (
        "potato"
      )}
    </>
  );
};
