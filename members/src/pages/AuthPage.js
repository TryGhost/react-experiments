import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../component-library/form/Button";
import { ErrorSummary } from "../component-library/form/ErrorSummary";
import { Input } from "../component-library/form/Input";
import { Label } from "../component-library/form/Label";
import { setConfig } from "../store/config";

export const AuthPage = () => {
  const config = useSelector((state) => state.config);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ defaultValues: config });
  const dispatch = useDispatch();

  return (
    <form onSubmit={handleSubmit((values) => dispatch(setConfig(values)))}>
      <ErrorSummary errors={errors} />

      <Label htmlFor="siteUrl">Site URL</Label>
      <Input
        id="siteUrl"
        placeholder="e.g. https://josh-demo.ghost.io"
        error={!!errors.siteUrl}
        {...register("siteUrl", {
          required: { value: true, message: "Site URL is required" },
          pattern: {
            value: /https:\/\/.*\.ghost\.io/,
            message: "Site URL must be a valid URL, ending in ghost.io",
          },
        })}
      />

      <Label htmlFor="staffAccessToken">Staff access token</Label>
      <Input
        id="staffAccessToken"
        error={!!errors.staffAccessToken}
        {...register("staffAccessToken", {
          required: { value: true, message: "Staff access token is required" },
          pattern: {
            value: /.+:.+/,
            message: "Staff access token doesn't look like a valid token",
          },
        })}
      />

      <Button type="submit">Sign in</Button>
    </form>
  );
};

export default AuthPage;
