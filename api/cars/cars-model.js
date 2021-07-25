const db = require("../../data/db-config");

const getAll = () => {
  // DO YOUR MAGIC

  return db("cars");
};

const getById = (id) => {
  // DO YOUR MAGIC

  return db("cars").where({ id }).first();
};

const create = async (car) => {
  // DO YOUR MAGIC

  const { vin, make, model, mileage, title, transmission } = car;

  const [id] = await db("cars").insert({
    vin: vin,
    make: make,
    model: model,
    mileage: mileage,
    title: title,
    transmission: transmission,
  });

  return getById(id);
};

module.exports = { getAll, getById, create };
