import Crud from '../Schema/crud';

class CrudController {
  async index(req, res) {
    const crud = await Crud.find();

    return res.json(crud);
  }

  async show(req, res) {
    const show = await Crud.findById(req.params.id);

    return res.json(show);
  }

  async store(req, res) {
    const { name, age, city, state } = req.body;

    const save = await Crud.create({
      name,
      age,
      city,
      state,
    });

    return res.json(save);
  }

  async update(req, res) {
    const update = await Crud.findById(req.params.id);

    const { name, age, city, state } = req.body;

    await update.updateOne({
      name,
      age,
      city,
      state,
    });

    update.save();

    return res.json({
      name,
      age,
      city,
      state,
    });
  }

  async destroy(req, res) {
    const destroy = await Crud.findById(req.params.id);

    await destroy.remove();

    return res.json('Object was removed');
  }
}
export default new CrudController();
