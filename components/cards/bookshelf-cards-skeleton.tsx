import { Skeleton } from "../ui/skeleton"

const BookshelfCardsSkeleton = () => {
    const skeletonCards = Array(4).fill(null)

    return (
        <>
            {skeletonCards.map((_, index) => (
                <div 
                className="flex flex-col gap-2 rounded-lg border p-7"
                key={index}
                >
                    <div className="flex justify-between">
                        <div className="flex gap-2">
                            <Skeleton className="size-5" />
                            <Skeleton className="h-5 w-24" />
                        </div>
                        <div className="flex gap-1">
                            <Skeleton className="size-6" />
                            <Skeleton className="size-6" />
                            <Skeleton className="size-6" />
                        </div>
                    </div>
                        <Skeleton className="h-5 w-40 ml-6" />
                        <Skeleton className="h-25 mt-3"/>
                </div>
            ))}
        </>
    )
}

export default BookshelfCardsSkeleton