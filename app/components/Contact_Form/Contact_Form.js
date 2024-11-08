"use client"
import { useForm } from "react-hook-form"; // Import react-hook-form
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"; // Assuming your form components are set up this way
import { Input } from "@/components/ui/input"; // Assuming your input component is correctly set up

export function ContactForm() {
  // Initialize react-hook-form
  const form = useForm();

  // Define the onSubmit function
  const onSubmit = (data) => {
    console.log(data); // Handle form data here
  };

  return (
    <Form>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
