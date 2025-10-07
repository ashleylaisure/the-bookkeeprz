import Image from "next/image";

export default function BrandIcon({ size = 25 }: { size?: number }) {
    return (
        <>
            <Image
                src="/images/site-logo.svg"
                alt="Bookkeeprz Logo"
                width={size}
                height={size}
                className="object-contain"
            />
        </>
    );
}
