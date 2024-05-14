import { Service } from "./service";

export type Project = {
  name: string,
  budget: number,
  categorie: string,
  cost: number,
  services: Service[]
};