const express = require("express");

const db = require("../../data/dbConfig");

module.exports = {
  get,
  create,
};

function get() {
  return db("projects");
}

function create(project) {
  return db("projects")
    .insert(project)
    .then((ids) => {
      {
        id: ids[0];
      }
    });
}
