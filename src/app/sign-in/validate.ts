import * as z from "zod";

export const signInSchema = z.object({
  email: z.string().email("Email không hợp lệ"),
  password: z.string().min(8, "Mật khẩu phải có ít nhất 6 ký tự"),
});

export type SignInFormValues = z.infer<typeof signInSchema>;
