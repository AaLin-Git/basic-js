const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let teamName = "";
  let buffer = [];
  if (!members) return false;
  for (let i = 0; i < members.length; i++) {
    if (!members[i]) continue;
    if (typeof members[i] === "string") {
      let name = members[i].trim().toUpperCase();
      buffer.push(name[0]);
      teamName = buffer.sort().join("");
    }
  }
  return teamName;
}

module.exports = {
  createDreamTeam,
};
