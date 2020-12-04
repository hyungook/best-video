import UserStore from './UserStore'

export function createStore(){
  const userStore = new UserStore()
  return {
    userStore
  }
}