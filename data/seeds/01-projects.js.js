exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("table_name")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("table_name").insert([
        { id: 1, project_name: "Organize Closet" },
        { id: 2, colName: "rowValue2" },
        { id: 3, colName: "rowValue3" },
      ]);
    });
};
