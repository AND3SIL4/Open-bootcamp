import { LEVELS } from "./levels.enum"

export class Task{
  name = ''
  description = ''
  iscompleted = false
  level = LEVELS.NORMAL

  constructor(name, desciption, iscompleted, level) {
    this.name = name
    this.description = desciption
    this.iscompleted = iscompleted
    this.level = level
  }
}