import React from 'react';
import { Button } from '@mantine/core';
import { TodoistApi } from '@doist/todoist-api-typescript';

const RestApiTest = () => {
  const api = new TodoistApi('a63eef5ffb47fe74f1baf625e04c18d6e877dded');
  api
    .getProjects()
    .then((projects) => console.log(projects))
    .catch((error) => console.log(error));

  const newProject = async function (name) {
    api
      .addProject({ name: name })
      .then((project) => console.log(project))
      .catch((error) => console.log(error));
  };

  const projectName = 'todo-list';

  api
    .deleteProject()
    .then((isSuccess) => console.log(isSuccess))
    .catch((error) => console.log(error));

  return (
    <div>
      <Button onClick={() => newProject(projectName)}>create new project</Button>
      {JSON.stringify(api)}
    </div>
  );
};

export { RestApiTest };
