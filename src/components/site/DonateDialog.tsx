import { Landmark } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { BankDetailsList } from "./BankDetails";

export function DonateDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md overflow-hidden p-0">
        <div className="flex items-center gap-4 bg-forest px-6 py-5">
          <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-sm bg-primary-foreground/10 text-primary-foreground">
            <Landmark className="size-5" />
          </span>
          <div>
            <p className="text-[0.6875rem] font-bold tracking-[0.22em] text-primary-foreground/70 uppercase">
              Official Account
            </p>
            <p className="font-display text-xl text-primary-foreground">
              Obemi CBO — Donations
            </p>
          </div>
        </div>
        <div className="px-0">
          <DialogHeader className="px-6 pt-4 text-left lg:px-8">
            <DialogTitle className="font-display text-2xl text-foreground">
              Donate via Bank Transfer
            </DialogTitle>
            <DialogDescription>
              You can support our work by making a direct bank transfer using the details below.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <BankDetailsList />
          </div>
          <p className="border-t border-border bg-muted/50 px-6 py-4 text-xs leading-relaxed text-muted-foreground lg:px-8">
            After making your transfer, kindly share the confirmation with us at{" "}
            <a
              href="mailto:info@obemi.co.ke"
              className="font-semibold text-primary underline-offset-4 hover:underline"
            >
              info@obemi.co.ke
            </a>{" "}
            so we can thank you and receipt your gift.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
