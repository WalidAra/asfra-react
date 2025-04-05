import { Button } from "@/components/ui/button";
import { DatePickerWithPresets } from "../../molecules/date-picker-with-presents";
import FlightClassPassengerInput from "../../atoms/flight-class-passenger-input";
import { Checkbox } from "@/components/ui/checkbox";
import { useLang } from "@/hooks/use-lang";
import { useTranslation } from "react-i18next";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";

export type PassengerType = "adults" | "children" | "infants";
export type FlightClass = "economy" | "firstClass";

const trip = [
  {
    label: "app-landing.hero.tabs.flight.content.checkboxes.oneWay",
    value: "oneWay",
  },
  {
    label: "app-landing.hero.tabs.flight.content.checkboxes.roundTrip",
    value: "roundTrip",
  },
  {
    label: "app-landing.hero.tabs.flight.content.checkboxes.multiCity",
    value: "multiCity",
  },
];

const FormSchema = z.object({
  selectedTrip: z
    .string()
    .refine((value) => trip.some((item) => item.value === value), {
      message: "You must select a valid trip option.",
    }),
  nonStop: z.boolean().default(false).optional(),
  from: z.string().min(1, {
    message: "From is required",
  }),
  to: z.string().min(1, {
    message: "To is required",
  }),
  dateRange: z
    .object({
      from: z.date({
        required_error: "A check-in date is required.",
      }),
      to: z.date({
        required_error: "A check-out date is required.",
      }),
    })
    .refine((data) => data.from <= data.to, {
      message: "Check-out date must be after check-in date.",
      path: ["to"],
    }),

  passengers: z.object({
    flightClass: z.enum(["economy", "firstClass"] as const),
    passengers: z
      .object({
        adults: z.number().min(1, "At least 1 adult is required").max(9),
        children: z.number().min(0).max(9),
        infants: z.number().min(0).max(9),
      })
      .refine(
        (data) => {
          const total = data.adults + data.children + data.infants;
          return total <= 9;
        },
        {
          message: "Total passengers cannot exceed 9",
          path: ["totalPassengers"],
        }
      ),
  }),
});

const FlightTab = () => {
  const { t } = useTranslation();
  const currentLanguage = useLang();
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      selectedTrip: "",
      nonStop: false,
      from: "",
      to: "",
      dateRange: {
        from: new Date(),
        to: new Date(),
      },
      passengers: {
        flightClass: "economy",
        passengers: {
          adults: 1,
          children: 0,
          infants: 0,
        },
      },
    },
  });

  function onSubmit(values: z.infer<typeof FormSchema>) {
    console.log(values);
  }
  return (
    <div className="w-full flex flex-col mt-4 gap-6 items-center justify-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full flex flex-col gap-4"
        >
          <div className="flex w-full justify-center flex-wrap gap-4 md:justify-between items-center ">
            <FormField
              control={form.control}
              name="selectedTrip"
              render={() => (
                <FormItem className="flex items-center gap-4">
                  {trip.map((item) => (
                    <FormField
                      key={item.label}
                      control={form.control}
                      name="selectedTrip"
                      render={({ field }) => {
                        return (
                          <FormItem
                            key={item.label}
                            className="flex flex-row items-start space-x-3 space-y-0"
                          >
                            <FormControl>
                              <Checkbox
                                checked={field.value === item.value}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange(item.value)
                                    : field.onChange("");
                                }}
                              />
                            </FormControl>
                            <FormLabel className="text-sm font-normal">
                              {t(item.label)}
                            </FormLabel>
                          </FormItem>
                        );
                      }}
                    />
                  ))}
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="nonStop"
              render={() => (
                <FormItem className="flex items-center gap-4">
                  <FormControl>
                    <Checkbox
                      id="nonStop"
                      onCheckedChange={(checked) =>
                        form.setValue("nonStop", checked === true)
                      }
                    />
                  </FormControl>
                  <FormLabel className="text-sm font-normal">
                    {t(
                      "app-landing.hero.tabs.flight.content.checkboxes.nonStop"
                    )}
                  </FormLabel>
                </FormItem>
              )}
            />
          </div>

          <div className="w-full flex flex-wrap items-center gap-4">
            <div className="grid md:grid-cols-4 flex-1 items-center gap-4">
              <FormField
                control={form.control}
                name="from"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="group relative w-full">
                        <p
                          className={`bg-background text-foreground ${
                            currentLanguage === "ar" ? "end-1" : "start-1"
                          } absolute top-0 z-10 block -translate-y-1/2 px-2 text-xs font-medium group-has-disabled:opacity-50`}
                        >
                          {t(
                            "app-landing.hero.tabs.flight.content.inputs.from.label"
                          )}{" "}
                        </p>
                        <Input
                          className="h-10 w-full text-xs"
                          placeholder={
                            t(
                              "app-landing.hero.tabs.flight.content.inputs.from.placeholder"
                            ) || ""
                          }
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormDescription />
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="to"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="group relative w-full">
                        <p
                          className={`bg-background text-foreground ${
                            currentLanguage === "ar" ? "end-1" : "start-1"
                          } absolute top-0 z-10 block -translate-y-1/2 px-2 text-xs font-medium group-has-disabled:opacity-50`}
                        >
                          {t(
                            "app-landing.hero.tabs.flight.content.inputs.to.label"
                          )}{" "}
                        </p>
                        <Input
                          className="h-10 w-full text-xs"
                          placeholder={
                            t(
                              "app-landing.hero.tabs.flight.content.inputs.to.placeholder"
                            ) || ""
                          }
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormDescription />
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="dateRange"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormControl>
                      <DatePickerWithPresets
                        date={field.value}
                        setDate={(date) => field.onChange(date)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FlightClassPassengerInput />
            </div>
            <Button className="w-full md:w-auto">Search</Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default FlightTab;
