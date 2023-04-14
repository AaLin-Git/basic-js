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
  //throw new NotImplementedError('Not implemented');
  //if (typeof members !== "string") return false;
  let teamName = "";
  let buffer = [];
  if (!members) return false;
  //throw new NotImplementedError('Not implemented');
  for (let i = 0; i < members.length; i++) {
    if (!members[i]) continue;
    //console.log(members[i].length);
    if (typeof members[i] === "string") {
      //console.log(members[i])
      // let name = members[i].split(" ");
      let name = members[i].trim().toUpperCase();
      buffer.push(name[0]);
      teamName = buffer.sort().join("");
      console.log(buffer);
      // name.forEach((item) => {
      //   console.log(item);
      // });
    }
    //  else if (typeof members[i] !== "string") {
    //   return false;
    // }
  }
  return teamName;
}

module.exports = {
  createDreamTeam,
};
