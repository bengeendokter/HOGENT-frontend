export function useJwt(token)
{

  function parseJwt(token)
  {
    if(!token) return {};
    const base64Url = token.split('.')[1];
    const payload = Buffer.from(base64Url, 'base64');
    const jsonPayload = payload.toString('ascii');
    return JSON.parse(jsonPayload);
  }

  function parseExp(exp)
  {
    if(!exp) return null;
    if(typeof exp !== 'number') exp = Number(exp);
    if(isNaN(exp)) return null;
    return new Date(exp * 1000);
  }

  const {exp} = parseJwt(token);
  const expiry = parseExp(exp);
  const stillValid = expiry >= new Date();

  return stillValid;
}
