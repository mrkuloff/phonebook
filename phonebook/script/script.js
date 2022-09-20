'use strict';

import modalControl from './modules/control.js';
import deleteControl from './modules/control.js';
import formControl from './modules/control.js';
import hoverRow from './modules/control.js';

import renderContacts from './modules/render.js';
import renderPhoneBook from './modules/render.js';
import sortList from './modules/render.js';

import createHeader from './modules/createElements.js';
import createLogo from './modules/createElements.js';
import createMain from './modules/createElements.js';
import createFooter from './modules/createElements.js';
import createButtonGroup from './modules/createElements.js';
import createTable from './modules/createElements.js';
import createForm from './modules/createElements.js';
import createRow from './modules/createElements.js';

import setStorage from './modules/serviceStorage.js';
import removeStorage from './modules/serviceStorage.js';
import addStorage from './modules/serviceStorage.js';
import { getStorage } from './modules/serviceStorage.js';

{
  const init = (selectorApp, title) => {
    const  app = document.querySelector(selectorApp);
    const data = getStorage();


    const {
        table,
        list,
        listHead,
        logo,
        btnAdd,
        btnDel,
        formOverlay,
        form,
      } = renderPhoneBook(app, title);

    //функционад
    const allRow = renderContacts(list, data);
    const {closeModal }= modalControl(btnAdd, formOverlay);

    hoverRow(allRow, logo);
    deleteControl(btnDel, list);
    sortList();
    formControl(form, list, closeModal);

  };



  window.phoneBookInit = init;
}
