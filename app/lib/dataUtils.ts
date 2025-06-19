export function getRating(id: number): number {
  return (id % 5) + 1;
}

export async function getDepartments(): Promise<string[]> {
  const res = await fetch("https://dummyjson.com/users");
  const data: {
    users: {
      company: {
        department: string;
      };
    }[];
  } = await res.json();

  return [...new Set(data.users.map((u) => u.company.department))];
}

export const employeeDetailsSets = [
  {
    overview:
      "A reliable team member consistently contributing to shared goals and showing strong initiative.",
    projects: [
      "Collaborated on a key company initiative",
      "Contributed to process improvements",
      "Assisted with cross-functional team efforts",
    ],
    feedback:
      "Known for consistent performance and a helpful attitude across teams.",
  },
  {
    overview:
      "Demonstrates adaptability and effective communication in fast-paced team environments.",
    projects: [
      "Helped onboard new team members",
      "Participated in quarterly planning",
      "Supported documentation initiatives",
    ],
    feedback: "Communicates clearly and always available to support the team.",
  },
  {
    overview:
      "Takes ownership of tasks and regularly meets deadlines with high-quality output.",
    projects: [
      "Handled a high-priority project independently",
      "Helped streamline reporting systems",
      "Managed key deliverables during peak periods",
    ],
    feedback: "Shows great accountability and delivers solid results.",
  },
  {
    overview:
      "Proactively engages in team discussions and helps improve workflows and collaboration.",
    projects: [
      "Suggested improvements to existing processes",
      "Volunteered for sprint demos",
      "Assisted with backlog grooming",
    ],
    feedback:
      "Always brings value through thoughtful input and proactive participation.",
  },
  {
    overview:
      "A dependable contributor who supports team morale and works effectively with peers.",
    projects: [
      "Assisted in running retrospectives",
      "Created helpful internal resources",
      "Maintained consistent progress during sprints",
    ],
    feedback:
      "Encouraging teammate who positively influences the work environment.",
  },
];
