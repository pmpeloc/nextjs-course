import { useRouter } from 'next/router';
import React from 'react';

const ClientProjectsPage = () => {
  const router = useRouter();
  console.log(router.query);

  const loadProjectHandler = () => {
    router.push({
      pathname: '/clients/[id]/[clientprojectid]',
      query: { id: 'max', clientprojectid: 'projecta' },
    });
  };

  return (
    <div>
      <h1>The projects of given client</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
};

export default ClientProjectsPage;
