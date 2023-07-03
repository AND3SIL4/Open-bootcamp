import { LEVELS } from "./levels.enum"

export class Task{
  name = ''
  desciption = ''
  iscompleted = false
  level = LEVELS.NORMAL

  constructor(name, desciption, iscompleted, level) {
    this.name = name
    this.desciption = desciption
    this.iscompleted = iscompleted
    this.level = level
  }
}