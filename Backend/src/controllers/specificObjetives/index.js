const registerSpecificObjetive = require('./register-specific-objetiveController')
const getSpecificObjetives = require('./get-specifics-objetives-controller')
const updateSpecificObjetives = require('./update-specific-objetives-controller')
const deleteSpecificObjetive = require('./delete-specific-objetive-controller')
const objetivos = require('./get-objetives-by-task-id-controller')
module.exports = {
  registerSpecificObjetive,
  getSpecificObjetives,
  updateSpecificObjetives,
  deleteSpecificObjetive,
  objetivos,
}
