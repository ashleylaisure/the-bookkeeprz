import { ArrowUpRightIcon } from "lucide-react"

import {
    Empty,
    EmptyContent,
    EmptyDescription,
    EmptyHeader,
    EmptyTitle,
} from "@/components/ui/empty"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import ROUTES from "@/constants/routes"
import { Card } from "@/components/ui/card"

export default function NotFound() {
    return (
        <Empty className="bg-[url(/images/bg-bookstore.jpg)] bg-cover bg-center h-screen flex items-center justify-center">
            <Card className="bg-black/60 p-20 rounded-lg shadow-lg">
                <EmptyHeader>
                    <EmptyTitle>404 - Not Found</EmptyTitle>
                    <EmptyDescription className="text-white">
                    The page you&apos;re looking for doesn&apos;t exist.
                    </EmptyDescription>
                </EmptyHeader>
                <EmptyContent>
                    <EmptyDescription className="text-white">
                    Return back to your {" "}
                    <Button
                        variant="link"
                        asChild
                        className="text-muted-foreground"
                        size="sm"
                        >
                        <Link href={ROUTES.DASHBOARD} className="inline-flex items-center">
                            Dashboard <ArrowUpRightIcon />
                        </Link>
                    </Button>
                    </EmptyDescription>
                </EmptyContent>
            </Card>
        </Empty>
    )
}
