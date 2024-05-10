import { defineStore } from 'pinia'

export const useToastStore = defineStore('toast', {
  state: () => ({
    title: '',
    message: '',
    status: 'success',
    is_visible: false,
    fade_top: false
  }),
  actions: {
    showToast({ status, message }) {
      clearTimeout(this.timeout);
  
      this.status = status === 400 ? 'error' : status === 200 ? 'success' : 'warning';
      this.message = message;
      this.is_visible = true;
  
      this.timeout = setTimeout(() => {
        this.fade_top = true;
  
        this.timeout = setTimeout(() => {
          this.is_visible = false;
          this.fade_top = false;
        }, 500);
      }, 3000);
    }
  }
  
});
