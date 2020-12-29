import './styles.css';

import refs from './js/refs.js';
import onSubmitSearch from './js/submitAction';
import click from './js/clickAction';

refs.form.addEventListener('submit', onSubmitSearch);
refs.btn.addEventListener('click', click.onClickAction);
refs.cardsList.addEventListener('click', click.modalOpen);