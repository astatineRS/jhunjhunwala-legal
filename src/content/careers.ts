export type Role = {
  title: string;
  type: string;
  location: string;
  experience: string;
  summary: string;
  responsibilities: string[];
};

/** No vacancies are open at present; roles are listed here when recruitment reopens. */
export const roles: Role[] = [];

export const values = [
  {
    title: "You will own work early",
    description:
      "Juniors here draft, research and attend client calls from the first month. Supervision is close, but the work is real.",
  },
  {
    title: "Writing matters",
    description:
      "We spend time on how advice is written. If a client cannot act on it after one read, it is not finished.",
  },
  {
    title: "No performative hours",
    description:
      "Deadlines are real and sometimes demanding. Sitting at a desk to be seen is not.",
  },
  {
    title: "Direct feedback",
    description:
      "You will be told what is wrong with your draft and why. That is the fastest way anyone learns this job.",
  },
];
