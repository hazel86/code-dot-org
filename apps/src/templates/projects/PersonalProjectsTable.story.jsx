import React from 'react';
import PersonalProjectsTable from './PersonalProjectsTable';
import {stubFakePersonalProjectData} from './generateFakePersonalProjects';

export default storybook => {
  storybook
    .storiesOf('PersonalProjectsTable', module)
    .addStoryTable([
      {
        name: 'Personal Project Table',
        description: 'Table of users personal projects',
        story: () => (
          <PersonalProjectsTable
            projectList={stubFakePersonalProjectData}
          />
        )
      },
    ]);
};
