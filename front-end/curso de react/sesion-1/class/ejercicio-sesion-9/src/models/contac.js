
export class Contact {
  name = ''
  phone = ''
  description = ''
  status = false

  constructor (name, phone, description, status) {
    this.name = name
    this.phone = phone
    this.description = description
    this.status = status
  }
}