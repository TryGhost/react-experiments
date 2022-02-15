import { SignJWT } from "jose";
import { Buffer } from "buffer/";

export const getJWTFromStaffAccessToken = async (accessToken) => {
  const [id, secret] = accessToken.split(":");

  const signer = new SignJWT({})
    .setProtectedHeader({ kid: id, alg: "HS256" })
    .setExpirationTime("5m")
    .setIssuedAt()
    .setAudience("/canary/admin/");

  return await signer.sign(Buffer.from(secret, "hex"));
};
