import BaseController from "../utils/BaseController";
import { valuesService } from "../services/ValueService";

export class ValuesController extends BaseController {
  constructor() {
    super("api/values");
    this.router
      .get("", this.getAll)
      .post("", this.create);
  }
  async getAll(_, res, next) {
    try {
      const values = valuesService.find()
      return res.send(values);
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      res.send(req.body);
    } catch (error) {
      next(error);
    }
  }
}
