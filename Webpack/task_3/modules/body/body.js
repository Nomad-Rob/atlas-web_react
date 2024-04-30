import $ from 'jquery';
import { debounce } from 'lodash';
import './body.css';

$(function() {
  $('body').append('<button id="start-btn">Click here to get started</button>');
  $('body').append('<p id="count"></p>');
  $('#start-btn').on('click', debounce(function() {
    const count = parseInt($('#count').text() || '0') + 1;
    $('#count').text(`${count} clicks on the button`);
  }, 500));
});
