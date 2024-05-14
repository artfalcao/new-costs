import { Project } from "./project";

export interface User {
  id?: number,
  name: string,
  categories: string[],
  projects: Project[]
};