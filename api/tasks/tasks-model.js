const express = require("express");

const db = require("../../data/dbConfig");

module.exports = {
  get,
  create,
};

function get() {
  return db("tasks");
}

function create(task) {
  return db("tasks")
    .insert(task)
    .then((ids) => {
      {
        id: ids[0];
      }
    });
}
