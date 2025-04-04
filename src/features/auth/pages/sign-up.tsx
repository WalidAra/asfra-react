import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  GithubAuthButton,
  GoogleAuthButton,
} from "@/features/auth/components/molecules";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { signUpFormSchema } from "@/features/auth/validators";
import { useMutation } from "@tanstack/react-query";
import { fetchData } from "@/lib";

function SignUp({ className, ...props }: React.ComponentProps<"div">) {
  const form = useForm<z.infer<typeof signUpFormSchema>>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { mutate } = useMutation({
    mutationFn: async (values: { email: string; password: string }) => {
      return await fetchData({
        endpoint: "login",
        method: "POST",
        payload: values,
        feature: "auth",
      });
    },
    mutationKey: ["sign-up"],
    // onSuccess: (data) => {},
    // onError: (error: unknown) => {},
  });

  function onSubmit(values: z.infer<typeof signUpFormSchema>) {
    mutate(values);
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col gap-2 ">
        <h1 className="text-2xl font-semibold text-center md:text-start">
          Create an account
        </h1>
        <p className=" text-sm text-muted-foreground md:text-start text-center">
          Create your account by filling out the form below.
        </p>
      </div>

      <div className={"w-full grid grid-cols-1 sm:grid-cols-2 gap-4"}>
        <GoogleAuthButton />
        <GithubAuthButton />
      </div>

      <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
        <span className="relative z-10 bg-background px-2 text-muted-foreground">
          Or register with your email
        </span>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="m@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button size={"lg"} type="submit" className={"w-full"}>
            Sign up
          </Button>
        </form>
      </Form>
      <div className="text-sm">
        Already have an account?{" "}
        <Link to="/auth/sign-in" className="underline underline-offset-4">
          Sign in
        </Link>
      </div>
    </div>
  );
}

export default SignUp;
