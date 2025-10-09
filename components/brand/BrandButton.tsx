import Link from "next/link";

import ROUTES from "@/constants/routes";

import { Button } from "../ui/button";
import BrandIcon from "./BrandIcon";
import BrandText from "./BrandText";

export default function BrandButton({
    variant,
}: {
    variant?: "link" | "ghost" | "outline";
}) {
    return (
        <>
            <Button variant={variant} className="h-10 rounded-md px-2 py-1">
                <Link className="flex items-center gap-2" href={ROUTES.HOME}>
                    <BrandIcon size={20} />
                    <BrandText />
                </Link>
            </Button>
        </>
    );
}
