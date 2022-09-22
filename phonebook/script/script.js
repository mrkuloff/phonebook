'use strict';

import {modalControl,
  deleteControl,
  formControl,
  hoverRow} from './modules/control.js';


import {
  renderContacts,
  renderPhoneBook,
  sortList } from './modules/render.js';

import {
  createHeader,
  createLogo,
  createMain,
  createFooter,
  createButtonGroup,
  createTable,
  createForm,
  createRow } from './modules/createElements.js';


import {
  getStorage,
  setStorage,
  removeStorage,
  addStorage } from './modules/serviceStorage.js';

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
