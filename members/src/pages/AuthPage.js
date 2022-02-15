import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../component-library/form/Button";
import { Input } from "../component-library/form/Input";
import { Label } from "../component-library/form/Label";
import { setConfig } from "../store/config";

export const AuthPage = () => {
  const config = useSelector((state) => state.config);
  const { handleSubmit, register } = useForm({ defaultValues: config });
  const dispatch = useDispatch();

  return (
    <form onSubmit={handleSubmit((values) => dispatch(setConfig(values)))}>
      <Label htmlFor="siteUrl">Site URL</Label>
      <Input
        type="url"
        id="siteUrl"
        placeholder="e.g. https://josh-demo.ghost.io"
        required
        {...register("siteUrl")}
      />

      <Label htmlFor="staffAccessToken">Staff access token</Label>
      <Input id="staffAccessToken" required {...register("staffAccessToken")} />

      <Button type="submit">Submit</Button>
    </form>
  );
};
