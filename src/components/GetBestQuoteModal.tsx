import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon, FileText } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

interface GetBestQuoteModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  packageName: string;
  duration: string;
  hotelCategory?: string;
  agentName?: string;
  agentEmail?: string;
}

const DEPARTURE_CITIES = [
  "Delhi",
  "Mumbai",
  "Bengaluru",
  "Kolkata",
  "Chennai",
  "Hyderabad",
  "Ahmedabad",
  "Pune",
  "Jaipur",
  "Bhopal",
  "Indore",
  "Nagpur",
];

const TRAVEL_MODES = [
  "Flight",
  "Train",
  "Car / Cab",
  "Bus",
  "Self-drive",
];

const HOTEL_CATEGORIES = [
  "Excellent Budget",
  "3 Star",
  "3 Star Deluxe",
  "4 Star",
  "5 Star",
];

const GetBestQuoteModal = ({
  open,
  onOpenChange,
  packageName,
  duration,
  hotelCategory = "3 Star",
  agentName = "",
  agentEmail = "",
}: GetBestQuoteModalProps) => {
  const [form, setForm] = useState({
    tourName: packageName,
    duration,
    hotel: hotelCategory,
    departureCity: "",
    travellingBy: "",
    adults: "2",
    children: "0",
    infants: "0",
    agentName,
    agentEmail,
    phoneNumber: "",
    message: "",
  });

  const [arrivalDate, setArrivalDate] = useState<Date>();
  const [departureDate, setDepartureDate] = useState<Date>();

  const update = (k: string, v: string) =>
    setForm((p) => ({ ...p, [k]: v }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.phoneNumber.length !== 10) {
      toast.error("Please enter a valid 10 digit phone number");
      return;
    }

    toast.success("Query submitted!", {
      description: "Our team will share the best quote with you shortly.",
    });

    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto p-0">
        <div className="bg-gradient-to-r from-secondary to-secondary/80 text-secondary-foreground p-5 rounded-t-lg">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-lg md:text-xl font-display">
              <FileText size={20} />
              An Excellent Choice of Program for Your Guests
            </DialogTitle>

            <DialogDescription className="text-secondary-foreground/90 text-sm">
              Let's quote them the best rates: Fill out the Form To Generate
              Query
            </DialogDescription>
          </DialogHeader>
        </div>

        <form onSubmit={handleSubmit} className="p-5 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Tour Program Name */}
            <div className="md:col-span-2 space-y-1.5">
              <Label>Tour Program Name*</Label>

              <Input
                value={form.tourName}
                onChange={(e) => update("tourName", e.target.value)}
                required
              />
            </div>

            {/* Duration */}
            <div className="space-y-1.5">
              <Label>Duration*</Label>

              <Input
                value={form.duration}
                onChange={(e) => update("duration", e.target.value)}
                required
              />
            </div>

            {/* Hotel Category */}
            <div className="space-y-1.5">
              <Label>Hotel Category*</Label>

              <Select
                value={form.hotel}
                onValueChange={(v) => update("hotel", v)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select hotel category" />
                </SelectTrigger>

                <SelectContent>
                  {HOTEL_CATEGORIES.map((hotel) => (
                    <SelectItem key={hotel} value={hotel}>
                      {hotel}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Departure City */}
            <div className="space-y-1.5">
              <Label>Departure City*</Label>

              <Select
                value={form.departureCity}
                onValueChange={(v) => update("departureCity", v)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select city" />
                </SelectTrigger>

                <SelectContent>
                  {DEPARTURE_CITIES.map((city) => (
                    <SelectItem key={city} value={city}>
                      {city}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Travelling By */}
            <div className="space-y-1.5">
              <Label>Travelling by*</Label>

              <Select
                value={form.travellingBy}
                onValueChange={(v) => update("travellingBy", v)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select mode" />
                </SelectTrigger>

                <SelectContent>
                  {TRAVEL_MODES.map((mode) => (
                    <SelectItem key={mode} value={mode}>
                      {mode}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Pax */}
            <div className="md:col-span-2">
              <Label className="mb-1.5 block">No. of Pax*</Label>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="space-y-1">
                  <Label className="text-xs text-muted-foreground">
                    Adults
                  </Label>

                  <Input
                    type="number"
                    min={1}
                    value={form.adults}
                    onChange={(e) => update("adults", e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-1">
                  <Label className="text-xs text-muted-foreground">
                    Children 5 Years +
                  </Label>

                  <Input
                    type="number"
                    min={0}
                    value={form.children}
                    onChange={(e) => update("children", e.target.value)}
                  />
                </div>

                <div className="space-y-1">
                  <Label className="text-xs text-muted-foreground">
                    Infants Below 5 Years
                  </Label>

                  <Input
                    type="number"
                    min={0}
                    value={form.infants}
                    onChange={(e) => update("infants", e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Arrival Date */}
            <div className="space-y-1.5">
              <Label>Arrival Date*</Label>

              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    type="button"
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !arrivalDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />

                    {arrivalDate ? (
                      format(arrivalDate, "PPP")
                    ) : (
                      <span>Pick a date</span>
                    )}
                  </Button>
                </PopoverTrigger>

                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={arrivalDate}
                    onSelect={setArrivalDate}
                    disabled={(date) =>
                      date < new Date(new Date().setHours(0, 0, 0, 0))
                    }
                    initialFocus
                    className={cn("p-3 pointer-events-auto")}
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* Departure Date */}
            <div className="space-y-1.5">
              <Label>Departure Date*</Label>

              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    type="button"
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !departureDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />

                    {departureDate ? (
                      format(departureDate, "PPP")
                    ) : (
                      <span>Pick a date</span>
                    )}
                  </Button>
                </PopoverTrigger>

                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={departureDate}
                    onSelect={setDepartureDate}
                    disabled={(date) =>
                      arrivalDate
                        ? date < arrivalDate
                        : date < new Date(new Date().setHours(0, 0, 0, 0))
                    }
                    initialFocus
                    className={cn("p-3 pointer-events-auto")}
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* Name */}
            <div className="space-y-1.5">
              <Label>Name*</Label>

              <Input
                value={form.agentName}
                onChange={(e) => update("agentName", e.target.value)}
                placeholder="Your name"
                required
              />
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <Label>Email*</Label>

              <Input
                type="email"
                value={form.agentEmail}
                onChange={(e) => update("agentEmail", e.target.value)}
                placeholder="you@example.com"
                required
              />
            </div>

            {/* Phone Number */}
            <div className="md:col-span-2 space-y-1.5">
              <Label>Phone Number*</Label>

              <Input
                type="tel"
                value={form.phoneNumber}
                onChange={(e) =>
                  update(
                    "phoneNumber",
                    e.target.value.replace(/\D/g, "").slice(0, 10)
                  )
                }
                placeholder="Enter 10 digit phone number"
                required
                pattern="[0-9]{10}"
              />
            </div>

            {/* Message */}
            <div className="md:col-span-2 space-y-1.5">
              <Label>Write Your Message (optional)</Label>

              <Textarea
                rows={4}
                value={form.message}
                onChange={(e) => update("message", e.target.value)}
                placeholder="Any special requirements..."
              />
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold py-6 rounded-xl text-base"
          >
            Submit Now
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default GetBestQuoteModal;