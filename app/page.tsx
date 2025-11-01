
import ComboboxFormDemo from "@/components/ComboboxFormDemo";
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
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen border flex flex-col items-center justify-center gap-10 underline">
      <Link href={'/login'}>Go to Form page</Link>
      <ComboboxFormDemo />
    </div>
  );
}
