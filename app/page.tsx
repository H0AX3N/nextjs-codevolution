import ComboboxFormDemo from "@/components/ComboboxFormDemo";
import { CardDemo } from "@/components/LoginCard";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Home() {
  return (
    <div className="h-screen border flex items-center justify-center">
      <ComboboxFormDemo />
      <CardDemo />
    </div>
  );
}
