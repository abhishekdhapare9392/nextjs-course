import { useRouter } from "next/router";

const ClientProjectsPage = () => {
  const router = useRouter();
  console.log(router.query);

  const loadProjectHandler = () => {
    // Load some data
    router.push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: { id: "abhi", clientprojectid: "projectdata" },
    });
  };

  return (
    <div>
      <h1>The Projects of a Given Client</h1>
      <button onClick={loadProjectHandler}>Show Project</button>
    </div>
  );
};

export default ClientProjectsPage;
