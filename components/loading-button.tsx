import * as React from "react";

import { Button } from "@/components/ui/button";

import { Spinner } from "./ui/spinner";

interface LoadingButtonProps extends React.ComponentProps<typeof Button> {
    loading: boolean;
    loadingText?: string;
}

export function LoadingButton({
    loading,
    loadingText,
    disabled,
    children,
    ...props
}: LoadingButtonProps) {
    return (
        <Button disabled={loading || disabled} {...props}>
            {loading ? (
                <div className="flex gap-4">
                    {" "}
                    <Spinner /> {loadingText || ""}
                </div>
            ) : (
                children
            )}
        </Button>
    );
}
