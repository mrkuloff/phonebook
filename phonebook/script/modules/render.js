'use strict';

const renderContacts = (elem, data) => {
  const  allRow = data.map(createRow);
  elem.append(...allRow);
  return allRow;
}

const  renderPhoneBook = (app, title) => {
  const header = createHeader();
  const logo = createLogo(title);
  const main = createMain();
  const buttonGroup = createButtonGroup([
    {
      className: 'btn btn-primary mr-3 js-add',
      type: 'button',
      text: 'Добавить',
    },
    {
      className: 'btn btn-danger',
      type: 'button',
      text: 'Удалить',
    },
  ]);

  const table = createTable();
  const {form, overlay} = createForm();

  const footer = createFooter(title);

  header.headerContainer.append(logo);
  main.mainContainer.append(buttonGroup.btnWrapper, table, overlay);
  app.append(header, main, footer);

  return {
    table,
    list: table.tbody,
    listHead: table.tHead,
    logo,
    btnAdd: buttonGroup.btns[0],
    btnDel: buttonGroup.btns[1],
    formOverlay: overlay,
    form,
  }
};

const sortList = () => {
  const getSort = ({target}) => {
    const order = (target.dataset.order = -(target.dataset.order || -1));
    const index = [...target.parentNode.cells].indexOf(target);
    const collator = new Intl.Collator(['en', 'ru'], {numeric: true});
    const comparator = (index, order) => (a, b) => order * collator.compare(
      a.children[index].innerHTML,
      b.children[index].innerHTML
    );

    for (const tBody of target.closest('table').tBodies)
      tBody.append(...[...tBody.rows].sort(comparator(index, order)));

    for (const cell of target.parentNode.cells)
      cell.classList.toggle('sorted', cell === target);
  };

  const tableForSort = document.querySelectorAll('.table thead');

  tableForSort.forEach(tableTH => {
    tableTH.addEventListener('click', event => {
      if (event.target.closest('.th-name') || event.target.closest('.th-surname')) {
        getSort(event);
        //TODO: добавить сохранение в localStorage
      }
    });
  });
};

export default {
  renderContacts,
  renderPhoneBook,
  sortList,
};
