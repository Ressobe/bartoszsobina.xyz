"use client";

import { Button } from "@/app/_components/ui/button";
import { Input } from "@/app/_components/ui/input";
import { Textarea } from "@/app/_components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/_components/ui/form";
import { useTransition } from "react";
import { useToast } from "@/app/_hooks/use-toast";
import { sendEmailAction } from "@/app/_actions/send-email";
import { CheckIcon, XIcon } from "lucide-react";
import { TailSpin } from "react-loader-spinner";

const contactFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Invalid email",
  }),
  message: z.string().min(2, {
    message: "Message must be at least 2 characters.",
  }),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export function ContactForm() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const { toast } = useToast();

  const [isPending, startTransition] = useTransition();

  async function onSubmit(values: ContactFormValues) {
    startTransition(async () => {
      const response = await sendEmailAction(values);

      if (response.error) {
        toast({
          variant: "default",
          description: (
            <div className="flex items-center">
              <XIcon className="mr-2 text-red-500" />
              Something went wrong!
            </div>
          ),
        });
      }

      if (response.sucess) {
        toast({
          variant: "default",
          description: (
            <div className="flex items-center">
              <CheckIcon className="mr-2 text-green-500" />
              Your email was sent!
            </div>
          ),
        });
        form.reset();
      }
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Your name"
                    {...field}
                    className="border-zinc-500"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="john@gmail.com"
                    type="email"
                    {...field}
                    className="border-zinc-500"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  className="min-h-[150px] border-zinc-500"
                  placeholder="Your message"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          variant="secondary"
          className="w-full relative"
          disabled={isPending}
        >
          {isPending ? (
            <>
              <TailSpin
                visible={true}
                height="25"
                width="25"
                color="#6d28d9"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperClass="absolute left-[2rem] md:left-1/3"
              />
              Send email
            </>
          ) : (
            <>Send email</>
          )}
        </Button>
      </form>
    </Form>
  );
}
