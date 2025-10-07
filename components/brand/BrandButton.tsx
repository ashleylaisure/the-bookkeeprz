
import Link from "next/link";
import { Button } from "../ui/button";
import BrandIcon from "./BrandIcon";
import BrandText from "./BrandText";
import ROUTES from "@/constants/routes";

export default function BrandButton({ variant }: { variant?: "link" | "ghost" | "outline" }) {

    return (
        <>
            <Button variant={variant} className="h-10 px-2 py-1 rounded-md">
                <Link className="flex items-center gap-2" href={ROUTES.HOME}>
                    <BrandIcon size={20} />
                    <BrandText />
                </Link>
            </Button>
        </>
    );
}
