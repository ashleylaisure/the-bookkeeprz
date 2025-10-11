const ROUTES = {
    HOME: "/",
    SIGN_IN: "/sign-in",
    SIGN_UP: "/sign-up",
    ERROR: "/error",

    DASHBOARD: "/dashboard",
    MY_BOOKS: "/my_books",
    BOOK_DETAIL: (Id: string) => `/my_books/${Id}`,
    ADD_BOOK: "add_book",
    AUTHORS: "/authors",
    TAGS: (id: string) => `/tags/${id}`,
    BOOKSHELVES: "/bookshelves",
    SERIES: "/series",
    JOURNAL: "/journal",
    QUOTES: "/quotes",
    WHISHLIST: "/wishlist",
    BUDGET: "/budget",
    ANALYTICS: "/analytics",
    SEARCH: "/search",
    PROFILE: "/profile",

    IMPORT: "/import",
    PROFILE_EDIT: (id: string) => `/profile/${id}/edit`,
    SETTINGS: "/settings",
    NOT_FOUND: "/404",
    EMAIL_VERIFY: "/email-verified",
    FORGOT_PASSWORD: "/forgot-password",
};

export default ROUTES;
