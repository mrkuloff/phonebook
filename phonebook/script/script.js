'use strict';

import modalControl from 'modules/control';
import deleteControl from 'modules/control';
import formControl from 'modules/control';
import hoverRow from 'modules/control';

import renderContacts from 'modules/render';
import renderPhoneBook from 'modules/render';
import sortList from 'modules/render';

import createHeader from 'modules/createElements';
import createLogo from 'modules/createElements';
import createMain from 'modules/createElements';
import createFooter from 'modules/createElements';
import createButtonGroup from 'modules/createElements';
import createTable from 'modules/createElements';
import createForm from 'modules/createElements';
import createRow from 'modules/createElements';

import getStorage from 'modules/serviceStorage';
import setStorage from 'modules/serviceStorage';
import removeStorage from 'modules/serviceStorage';
import addStorage from 'modules/serviceStorage';

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
