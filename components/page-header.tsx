import { cn } from "@/lib/utils";


interface PageHeaderProps {
    title: string;
    description?: string;
    action?: React.ReactNode;
    variant?: "default" | "centered" | "compact";
    className?: string;
}

export function PageHeader({
    title,
    description,
    action,
    className,
    variant= "default"
}: PageHeaderProps ) {
    const baseStyles = "w-full";
    const variantStyles = {
        default:
            "flex flex-col-reverse sm:flex-row sm:items-center justify-between gap-4",
        centered:
            "flex flex-col items-center justify-center text-center gap-2",
        compact:
            "flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-sm",
    };
    const titleStyles = {
        default: "text-3xl font-semibold tracking-tight",
        centered: "text-3xl font-bold tracking-tight",
        compact: "text-xl font-semibold tracking-tight",
    };

    return (
        <div className={cn(baseStyles, variantStyles[variant], className)}>
            <div className={cn(variant === "centered" ? "max-w-xl" : "", "space-y-1")}>
                <h1 className={cn(titleStyles[variant])}>{title}</h1>
                {description && 
                    <p className={cn("text-muted-foreground", variant === "compact" && "text-xs")}>{description}</p>
                }
            </div>
            {action && <div className="flex-shrink-0">{action}</div>}
        </div>
    )

}