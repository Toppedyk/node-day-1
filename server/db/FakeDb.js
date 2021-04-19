import { generateId } from "../utils/GenerateId"

class FakeDb {
  burgers = [{name: "Double Decker",description: "Two burgers and two slices of american cheese, along with mustard,ketchup,lettuce and tomato", price: 8.50, id: generateId()}]
}

export const fakeDb = new FakeDb()