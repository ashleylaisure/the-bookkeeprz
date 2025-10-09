import Link from "next/link";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import ROUTES from "@/constants/routes";

import BrandIcon from "../../brand/BrandIcon";
import BrandText from "../../brand/BrandText";
import { SignInForm } from "./SignInForm";
import { SignUpForm } from "./SignUpForm";
import SocialAuthForm from "./SocialAuthForm";

interface AuthFormProps {
    formHeader: string;
    formSubHeader?: string;
    formType: "SIGN_IN" | "SIGN_UP";
}

const AuthForm = ({ formHeader, formSubHeader, formType }: AuthFormProps) => {
    return (
        <Card className="w-full max-w-md">
            {/* Header */}
            <CardHeader>
                <Link href={ROUTES.HOME}>
                    <div className="flex justify-center gap-2">
                        <BrandIcon />
                        <BrandText />
                    </div>
                </Link>
                <CardTitle className="text-center text-lg md:text-xl">
                    {formHeader}
                </CardTitle>
                <CardDescription className="text-center text-xs md:text-sm">
                    {formSubHeader}
                </CardDescription>
            </CardHeader>

            {/* MagicLink Form */}
            {/* <MagicLinkForm formType={formType} /> */}

            <CardContent>
                {formType === "SIGN_IN" ? <SignInForm /> : <SignUpForm />}

                {/* Divider */}
                <div className="my-4 flex items-center justify-center gap-4">
                    <hr className="border-t-1.5 border-dark-500_light400 flex-grow" />
                    <span className="text-dark500_light400 text-xs font-medium">
                        OR
                    </span>
                    <hr className="border-t-1.5 border-dark-500_light400 flex-grow" />
                </div>

                {/* Social Auth Form */}
                <SocialAuthForm formType={formType} />
            </CardContent>

            <CardFooter>
                {/* Toggle between sign in and sign up */}
                {formType === "SIGN_IN" ? (
                    <div className="mt-8 flex w-full justify-center">
                        <p className="text-muted-foreground text-center text-sm">
                            Don&apos;t have an account?{" "}
                            <Link
                                href={ROUTES.SIGN_UP}
                                className="text-primary font-semibold hover:underline"
                            >
                                Sign up
                            </Link>
                        </p>
                    </div>
                ) : (
                    <div className="mt-8 flex w-full justify-center">
                        <p className="text-muted-foreground text-center text-sm">
                            Already have an account?{" "}
                            <Link
                                href={ROUTES.SIGN_IN}
                                className="text-primary font-semibold hover:underline"
                            >
                                Sign in
                            </Link>
                        </p>
                    </div>
                )}
            </CardFooter>
        </Card>
    );
};

export default AuthForm;
