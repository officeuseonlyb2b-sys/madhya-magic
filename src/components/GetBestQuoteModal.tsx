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
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
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
  "Delhi", "Mumbai", "Bengaluru", "Kolkata", "Chennai", "Hyderabad",
  "Ahmedabad", "Pune", "Jaipur", "Bhopal", "Indore", "Nagpur",
];

const TRAVEL_MODES = ["Flight", "Train", "Car / Cab", "Bus", "Self-drive"];

const GetBestQuoteModal = ({
  open,
  onOpenChange,
  packageName,
  duration,
  hotelCategory = "Standard (3 Star)",
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
    message: "",
  });
  const [arrivalDate, setArrivalDate] = useState<Date>();
  const [departureDate, setDepartureDate] = useState<Date>();

  const update = (k: string, v: string) => setForm((p) => ({ ...p, [k]: v }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
              <FileText size={20} /> An Excellent Choice of Program for Your Guests
            </DialogTitle>
            <DialogDescription className="text-secondary-foreground/90 text-sm">
              Let's quote them the best rates: Fill out the Form To Generate Query
            </DialogDescription>
          </DialogHeader>
        </div>

        <form onSubmit={handleSubmit} className="p-5 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2 space-y-1.5">
              <Label>Tour Program Name*</Label>
              <Input value={form.tourName} onChange={(e) => update("tourName", e.target.value)} required />
            </div>

            <div className="space-y-1.5">
              <Label>Duration*</Label>
              <Input value={form.duration} onChange={(e) => update("duration", e.target.value)} required />
            </div>

            <div className="space-y-1.5">
              <Label>Hotel Category*</Label>
              <Input value={form.hotel} onChange={(e) => update("hotel", e.target.value)} required />
            </div>

            <div className="space-y-1.5">
              <Label>Departure City*</Label>
              <Select value={form.departureCity} onValueChange={(v) => update("departureCity", v)}>
                <SelectTrigger><SelectValue placeholder="Select city" /></SelectTrigger>
                <SelectContent>
                  {DEPARTURE_CITIES.map((c) => (
                    <SelectItem key={c} value={c}>{c}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-1.5">
              <Label>Travelling by*</Label>
              <Select value={form.travellingBy} onValueChange={(v) => update("travellingBy", v)}>
                <SelectTrigger><SelectValue placeholder="Select mode" /></SelectTrigger>
                <SelectContent>
                  {TRAVEL_MODES.map((m) => (
                    <SelectItem key={m} value={m}>{m}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="md:col-span-2">
              <Label className="mb-1.5 block">No. of Pax*</Label>
              <div className="grid grid-cols-3 gap-3">
                <div className="space-y-1">
                  <Label className="text-xs text-muted-foreground">Adults</Label>
                  <Input type="number" min={1} value={form.adults} onChange={(e) => update("adults", e.target.value)} required />
                </div>
                <div className="space-y-1">
                  <Label className="text-xs text-muted-foreground">Children 5 Years +</Label>
                  <Input type="number" min={0} value={form.children} onChange={(e) => update("children", e.target.value)} />
                </div>
                <div className="space-y-1">
                  <Label className="text-xs text-muted-foreground">Infants Below 5 Years</Label>
                  <Input type="number" min={0} value={form.infants} onChange={(e) => update("infants", e.target.value)} />
                </div>
              </div>
            </div>

            <div className="space-y-1.5">
              <Label>Arrival Date*</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    type="button"
                    variant="outline"
                    className={cn("w-full justify-start text-left font-normal", !arrivalDate && "text-muted-foreground")}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {arrivalDate ? format(arrivalDate, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={arrivalDate}
                    onSelect={setArrivalDate}
                    disabled={(d) => d < new Date(new Date().setHours(0, 0, 0, 0))}
                    initialFocus
                    className={cn("p-3 pointer-events-auto")}
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-1.5">
              <Label>Departure Date*</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    type="button"
                    variant="outline"
                    className={cn("w-full justify-start text-left font-normal", !departureDate && "text-muted-foreground")}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {departureDate ? format(departureDate, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={departureDate}
                    onSelect={setDepartureDate}
                    disabled={(d) => arrivalDate ? d < arrivalDate : d < new Date(new Date().setHours(0, 0, 0, 0))}
                    initialFocus
                    className={cn("p-3 pointer-events-auto")}
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-1.5">
              <Label>Agent Name*</Label>
              <Input value={form.agentName} onChange={(e) => update("agentName", e.target.value)} placeholder="Your name" required />
            </div>

            <div className="space-y-1.5">
              <Label>Agent Email*</Label>
              <Input type="email" value={form.agentEmail} onChange={(e) => update("agentEmail", e.target.value)} placeholder="you@example.com" required />
            </div>

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
