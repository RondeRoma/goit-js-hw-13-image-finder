import '@pnotify/core/dist/PNotify.css';
import '@pnotify/mobile/dist/PNotifyMobile.css';
import '@pnotify/core/dist/BrightTheme.css';
import { defaultModules } from '@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
import { error } from '@pnotify/core';
defaultModules.set(PNotifyMobile, {});

export default {
  
    error() {
      error({ title: 'Ошибочка', text: 'Попробуй начать заново' });
    },
  
  };