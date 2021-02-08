const express = require("express");

const db = require("../../data/dbConfig");

module.exports = {
  get,
  create,
};

function get() {
  return db("resources");
}

function create(resource) {
  return db("resources")
    .insert(resource)
    .then((ids) => {
      {
        id: ids[0];
      }
    });
}
