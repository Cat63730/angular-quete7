import { Skills } from '../models/skills.models'

export class Developer{
  constructor(
    public lastName: string,
    public firstName: string,
    public age: number,
    public gender: string,
    public bio: string,
    public skill: Skills[]
  ) {}
}

  