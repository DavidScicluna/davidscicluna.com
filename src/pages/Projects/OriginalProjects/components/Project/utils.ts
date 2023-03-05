import { includes } from 'lodash';
import memoizee from 'memoizee';

import { Project } from '../../../../../common/hooks/useGetProjects';
import { SkillGroups, Skills } from '../../../../../common/hooks/useGetSkills';

type GetProjectSkillsProps = Pick<Project, 'id'> & { skills: SkillGroups };

export const getProjectSkills = memoizee(({ skills: allSkills, id }: GetProjectSkillsProps): Skills => {
	let selectedSkills: Skills = [];

	allSkills.forEach(({ skills }) => {
		selectedSkills = [...selectedSkills, ...skills.filter(({ projects }) => includes(projects, id))];
	});

	console.log(selectedSkills);

	return selectedSkills;
});
