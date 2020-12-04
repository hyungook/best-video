import { observable, action } from 'mobx'

export default class UserStore{
  @observable usermail = ""

  @action setUsermail = (usermail) => {
    this.usermail = usermail
  }
}