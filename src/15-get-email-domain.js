/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let index;

  for (let i = email.length - 1; i > 0; i--) {
    if (email[i] === '@') {
      index = i;
      break;
    }
  }
  return email.slice(index + 1, email.length);
}

module.exports = getEmailDomain;
