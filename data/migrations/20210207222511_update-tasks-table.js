exports.up = function (knex) {
  return knex.schema.table("tasks", (tbl) => {
    tbl.integer("project_id").references("project_id").inTable("projects");
  });
};

exports.down = function (knex) {
  return knex.schema.table("tasks", (tbl) => tbl.dropColumn("project_id"));
};
