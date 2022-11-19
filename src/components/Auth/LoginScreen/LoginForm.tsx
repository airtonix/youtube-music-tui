import React from "react";
import { Form } from "ink-form";

function isLoginFormData(formData: object): formData is LoginFormData {
  const keys = Object.keys(formData);
  return keys.includes("username") && keys.includes("password");
}

type LoginFormData = { username: string; password: string };
type LoginFormProps = {
  onSubmit: (value: LoginFormData) => void;
};

export function LoginForm({ onSubmit }: LoginFormProps) {
  const handleSubmit = (formData: object) => {
    if (!isLoginFormData(formData)) return;
    onSubmit({
      username: formData.username,
      password: formData.password,
    });
  };

  return (
    <Form
      onSubmit={handleSubmit}
      form={{
        sections: [
          {
            title: "Login",
            fields: [
              {
                type: "string",
                name: "username",
                label: "username",
              },
              {
                type: "string",
                name: "password",
                label: "password",
                mask: "*",
              },
            ],
          },
        ],
      }}
    />
  );
}
