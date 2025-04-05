import { z } from "zod";

const flightFormSchema = z.object({
  from: z.string(),
  to: z.string(),
  dob: z.date({
    required_error: "A date of birth is required.",
  }),
});
