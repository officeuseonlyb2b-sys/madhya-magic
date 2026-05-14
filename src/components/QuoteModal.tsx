import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon, MessageSquare } from "lucide-react";
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
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { submitFormWithToast } from "@/lib/submitForm";

interface QuoteModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  destinationName: string;
}

const QuoteModal = ({ open, onOpenChange, destinationName }: QuoteModalProps) => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", people: "2", message: "" });
  const [travelDate, setTravelDate] = useState<Date>();
  const [loading, setLoading] = useState(false);
  const update = (k: string, v: string) => setForm((p) => ({ ...p, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    const res = await submitFormWithToast({
      formName: "Quote Request",
      fullName: form.name,
      email: form.email,
      phone: form.phone,
      destination: destinationName,
      travelers: `${form.people} people`,
      travelDate: travelDate ? format(travelDate, "PPP") : undefined,
      message: form.message,
    });
    setLoading(false);
    if (res.ok) onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto p-0">
        <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground p-5 rounded-t-lg">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-lg md:text-xl font-display">
              <MessageSquare size={20} /> Get a Quote — {destinationName}
            </DialogTitle>
            <DialogDescription className="text-primary-foreground/90 text-sm">
              Share your details and we'll craft the best price for your trip.
            </DialogDescription>
          </DialogHeader>
        </div>

        <form onSubmit={handleSubmit} className="p-5 space-y-4">
          <div className="space-y-1.5">
            <Label>Name*</Label>
            <Input value={form.name} onChange={(e) => update("name", e.target.value)} required />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label>Phone*</Label>
              <Input type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} required />
            </div>
            <div className="space-y-1.5">
              <Label>Email*</Label>
              <Input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} required />
            </div>
            <div className="space-y-1.5">
              <Label>Travel Date*</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    type="button"
                    variant="outline"
                    className={cn("w-full justify-start text-left font-normal", !travelDate && "text-muted-foreground")}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {travelDate ? format(travelDate, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={travelDate}
                    onSelect={setTravelDate}
                    disabled={(d) => d < new Date(new Date().setHours(0, 0, 0, 0))}
                    initialFocus
                    className={cn("p-3 pointer-events-auto")}
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="space-y-1.5">
              <Label>Number of People*</Label>
              <Input type="number" min={1} value={form.people} onChange={(e) => update("people", e.target.value)} required />
            </div>
          </div>
          <div className="space-y-1.5">
            <Label>Message (optional)</Label>
            <Textarea rows={3} value={form.message} onChange={(e) => update("message", e.target.value)} placeholder="Anything we should know?" />
          </div>

          <div className="flex gap-3 pt-2">
            <Button type="button" variant="outline" className="flex-1" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit" disabled={loading} className="flex-1 gradient-gold text-primary-foreground font-semibold disabled:opacity-70">
              {loading ? "Sending…" : "Submit"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default QuoteModal;
