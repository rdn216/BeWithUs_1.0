// import { Controller } from "@hotwired/stimulus"

// // Connects to data-controller="datepicker"
// export default class extends Controller {
//   connect() {
//   }
// }

import { Controller } from "@hotwired/stimulus"
import flatpickr from "flatpickr"; // You need to import this to use new flatpickr()

export default class extends Controller {
  connect() {
    flatpickr(this.element)
  }
}
