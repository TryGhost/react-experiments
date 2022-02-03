import { SignJWT } from "jose";
import { Buffer } from "buffer/";

export const getTokenFromKey = async (key) => {
  const [id, secret] = key.split(":");

  const signer = new SignJWT({})
    .setProtectedHeader({ kid: id, alg: "HS256" })
    .setExpirationTime("5m")
    .setAudience("/canary/admin/");

  return await signer.sign(Buffer.from(secret));
};
