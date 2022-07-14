import { defineStore } from "pinia";

export const useUserInfo = defineStore('userInfo', {
  // 推荐使用完整类型推断箭头函数
  state: () => {
    return {
      uid: '123',
      username: '',
      nickname: '',
      avatar: '',
      token: ''
    }
  }
})