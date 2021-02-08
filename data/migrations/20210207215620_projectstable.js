exports.up = function (knex) {
  return knex.schema
    .createTable("projects", (tbl) => {
      tbl.increments("project_id");
      tbl.text("project_name").notNullable();
      tbl.text("project_description");
      tbl.boolean("project_completed").defaultTo("false");
    })
    .createTable("resources", (tbl) => {
      tbl.increments("resource_id");
      tbl.text("resource_description");
      tbl.boolean("resource_name").defaultTo("false");
    })
    .createTable("tasks", (tbl) => {
      tbl.increments("task_id");
      tbl.text("task_notes");
      tbl.text("task_description").notNullable();
      tbl.boolean("task_completed").defaultTo("false");
    });
};

exports.down = function (knex) {
  knex.schema
    .dropTableIfExists("projects")
    .dropTableIfExists("projects")
    .dropTableIfExists("projects");
};
