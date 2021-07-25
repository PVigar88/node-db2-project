// DO YOUR MAGIC

const router = require("express)").Router();
const Cars = require("./cars-model");
const {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
} = require("./cars-middleware");

router.get("/", (req, res, next) => {
  Cars.getAll()
    .then((cars) => {
      res.status(200).json(cars);
    })
    .catch((err) => {
      console.log(err);
      next({ errorMessage: "There was a server error (cars-gt)" });
    });
});

router.get("/:id", checkCarId, (req, res, next) => {
  Cars.getById(req.params.id)
    .then((car) => {
      res.status(200).json(car);
    })
    .catch((err) => {
      console.log(err);
      next({ errorMessage: "There was a server error (cars-gtid)" });
    });
});

router.post(
  "/",
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
  (req, res, next) => {
    Cars.create(req.body)
      .then((car) => {
        res.status(201).json(car);
      })
      .catch((err) => {
        console.log(err);
        next({ errorMessage: "There was a server error (cars-pst)" });
      });
  }
);
